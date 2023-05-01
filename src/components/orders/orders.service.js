async function fetchOrders() {
  return await fetch('/orders/api/orders').then(
    (response) => response.ok && response.json()
  );
}

async function fetchRestaurants() {
  return await fetch('/orders/api/restaurants').then(
    (response) => response.ok && response.json()
  );
}

async function fetchOffers(restaurantId) {
  return await fetch(
    '/orders/api/offers?' +
      new URLSearchParams({
        restaurant_id: restaurantId,
      })
  ).then((response) => response.ok && response.json());
}

async function initOrder(restaurantId, offersIds) {
  return await fetch('/orders/api/orders/init', {
    method: 'POST',
    body: JSON.stringify({
      restaurantId,
      offersIds,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.ok && response.json());
}

export { fetchOrders, fetchRestaurants, fetchOffers, initOrder };
