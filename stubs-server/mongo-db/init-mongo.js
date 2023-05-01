/* eslint-disable */

/**
 * root user authentication
 */
db.getSiblingDB(process.env.MONGO_INITDB_DATABASE).auth(
  process.env.MONGO_INITDB_ROOT_USERNAME,
  process.env.MONGO_INITDB_ROOT_PASSWORD
);

/**
 * initializing "tasks" DB
 */
tasksDB = db.getSiblingDB(process.env.MONGO_TASKS_DB);
tasksDB.createCollection('tasks');
tasksDB.tasks.insertOne({
  text: 'This is a sample task, if you see it - everything works fine',
});

/**
 * initializing "orders" DB
 */
ordersDB = db.getSiblingDB(process.env.MONGO_ORDERS_DB);

ordersDB.createCollection('restaurants');
ordersDB.restaurants.insertMany([
  {
    name: 'Ante Seafood & Bar',
    type: 'Рыбные рестораны',
    description: 'Светский сифуд-ресторан Italy & Co. с кухней Дмитрия Блинова',
    address: 'Дегтярный пер., 11а, БЦ «Невская ратуша»',
    photos: [],
    offers: [
      {
        _id: objectId(),
        name: 'Морской ёж',
        price: 190,
      },
      {
        _id: objectId(),
        name: 'Треска в соусе из вермута',
        price: 750,
      },
      {
        _id: objectId(),
        name: 'Палтус со шпинатом и васаби соусом',
        price: 920,
      },
    ],
  },
  {
    name: 'Betulla',
    type: 'Итальянская кухня',
    description: 'Итальянская остерия в трактовке Арслана Бердиева',
    address: '9-я Советская, 1',
    photos: [],
    offers: [
      {
        _id: objectId(),
        name: 'Суп с уткой',
        price: 490,
      },
      {
        _id: objectId(),
        name: 'Фузилли с фисташковым песто, страчателла и томаты',
        price: 590,
      },
      {
        _id: objectId(),
        name: 'Панна котта со свежими ягодами',
        price: 450,
      },
    ],
  },
  {
    name: 'Saviv',
    type: 'Израильская кухня',
    description: 'Израильское бистро без ближневосточных границ',
    address: 'Б. Конюшенная, 9',
    photos: [],
    offers: [
      {
        _id: objectId(),
        name: 'Бабагануш',
        price: 650,
      },
      {
        _id: objectId(),
        name: 'Шницель «Тель-Авив» со свежими овощами и соусом тахини',
        price: 900,
      },
      {
        _id: objectId(),
        name: 'Сабих – жареный баклажан с маринованными овощами и яйцом',
        price: 530,
      },
    ],
  },
]);

ordersDB.createCollection('orders');

/**
 * creating user
 */
db.createUser({
  user: process.env.MONGO_USER,
  pwd: process.env.MONGO_PASSWORD,
  roles: [
    { role: 'readWrite', db: process.env.MONGO_TASKS_DB },
    { role: 'readWrite', db: process.env.MONGO_ORDERS_DB },
  ],
});

/**
 * service functions
 */
function objectId() {
  return (
    hex(Date.now() / 1000) +
    ' '.repeat(16).replace(/./g, () => hex(Math.random() * 16))
  );
}

function hex(value) {
  return Math.floor(value).toString(16);
}
