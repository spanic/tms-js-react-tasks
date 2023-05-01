import { ObjectId } from 'mongodb';

import connect from '../mongo-db/db-connection.js';

const db = await connect(process.env.MONGO_ORDERS_DB);

async function getRestaurants(req, res) {
  const collection = await db.collection('restaurants');
  const results = await collection.find({}).project({ offers: 0 }).toArray();
  const resultsMappedById = results.reduce((acc, restaurant) => {
    return acc.set(restaurant._id, { ...restaurant, _id: undefined });
  }, new Map());
  res.status(200).send(Object.fromEntries(resultsMappedById));
}

async function getOffers(req, res) {
  const id = req.query.restaurant_id;
  if (!ObjectId.isValid(id)) {
    res.status(400).send('"Incorrect restaurant id has been provided"');
    return;
  }
  const collection = await db.collection('restaurants');
  const result = await collection.findOne(
    { _id: new ObjectId(id) },
    { projection: { offers: 1, _id: 0 } }
  );
  if (!result) {
    res.status(400).send('"Cannot find offers for provided restaurant id"');
    return;
  }

  res.status(200).send(result.offers || []);
}

async function initOrder(req, res) {
  const { restaurantId, offersIds } = req.body || {};

  if (
    !restaurantId ||
    typeof restaurantId !== 'string' ||
    !ObjectId.isValid(restaurantId)
  ) {
    res.status(400).send('"Invalid restaurant id provided"');
    return;
  }
  if (
    !offersIds ||
    !Array.isArray(offersIds) ||
    offersIds.some((offerId) => !ObjectId.isValid(offerId))
  ) {
    res.status(400).send('"Invalid offers ids provided"');
    return;
  }

  const restaurantsCollection = await db.collection('restaurants');
  const chosenRestaurant = await restaurantsCollection.findOne({
    _id: new ObjectId(restaurantId),
  });
  if (!chosenRestaurant) {
    res
      .status(400)
      .send('"Cannot find any restaurants by the provided restaurantId"');
    return;
  }
  // Instead of that I can just get the available offers from the restaurant I obtained above
  // and iterate over them, but using aggregation function looks more interesting for me
  const chosenRestaurantOffers = await getMatchingRestaurantOffers(
    restaurantId,
    offersIds,
    restaurantsCollection
  );
  if (!chosenRestaurantOffers || !chosenRestaurantOffers.length) {
    res
      .status(400)
      .send(
        '"Cannot find any offers for the specified restaurant provided by offersIds"'
      );
    return;
  }

  const totalPrice = chosenRestaurantOffers.reduce((acc, offer) => {
    acc += +offer.price;
    return acc;
  }, 0);

  const ordersCollection = await db.collection('orders');
  const { insertedId } = await ordersCollection.insertOne({
    restaurantId,
    restaurantName: chosenRestaurant.name,
    created: new Date(),
    offers: chosenRestaurantOffers,
    updated: new Date(),
    totalPrice,
  });
  res.status(200).send(insertedId);
}

async function addOffersToOrder(req, res) {
  const orderId = req.query.order_id;
  if (!ObjectId.isValid(orderId)) {
    res.status(400).send('"Incorrect order id provided"');
    return;
  }

  const { offersIds } = req.body || {};
  if (
    !offersIds ||
    !Array.isArray(offersIds) ||
    offersIds.some((offerId) => !ObjectId.isValid(offerId))
  ) {
    res.status(400).send('"Invalid offers ids provided"');
    return;
  }

  const ordersCollection = await db.collection('orders');
  const order = await ordersCollection.findOne({ _id: new ObjectId(orderId) });
  if (!order) {
    res.status(400).send('"Cannot find any orders by the provided orderId"');
    return;
  }

  const restaurantId = order.restaurantId;

  const chosenRestaurantOffers = await getMatchingRestaurantOffers(
    restaurantId,
    offersIds
  );
  if (!chosenRestaurantOffers || !chosenRestaurantOffers.length) {
    res
      .status(400)
      .send(
        '"Cannot find any offers for the specified restaurant provided by offersIds"'
      );
    return;
  }

  const totalPrice = chosenRestaurantOffers.reduce((acc, offer) => {
    acc += +offer.price;
    return acc;
  }, 0);

  await ordersCollection.updateOne(
    { _id: new ObjectId(orderId) },
    {
      $set: { offers: chosenRestaurantOffers, updated: new Date(), totalPrice },
    }
  );

  res.status(204).send();
}

async function getOrders(req, res) {
  const collection = await db.collection('orders');
  const results = await collection.find({}).toArray();
  res.status(200).send(results);
}

async function getMatchingRestaurantOffers(
  restaurantId,
  offersIds,
  restaurantsCollection
) {
  restaurantsCollection =
    restaurantsCollection || (await db.collection('restaurants'));

  const matchingRestaurantOffers = (
    await restaurantsCollection
      .aggregate([
        {
          $match: { _id: new ObjectId(restaurantId) },
        },
        {
          $project: {
            offers: {
              $filter: {
                input: '$offers',
                as: 'offer',
                cond: { $in: ['$$offer._id', offersIds] },
              },
            },
          },
        },
      ])
      .toArray()
  )[0].offers;

  return matchingRestaurantOffers;
}

export default {
  getRestaurants,
  getOffers,
  getOrders,
  initOrder,
  addOffersToOrder,
};
