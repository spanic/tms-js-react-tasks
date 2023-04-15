import productsList from './products-list.js';

function getProducts(req, res) {
  res.status(200).send(productsList);
}

export default { getProducts };
