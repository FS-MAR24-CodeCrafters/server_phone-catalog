const { response } = require('../constants/response');
const { getAllProducts, createProducts } = require('../models/Product.model');

async function httpGetAllProducts(req, res) {
  const products = await getAllProducts();

  if (!products) {
    return res
      .status(response[503].statusCode)
      .json({ success: false, error: response[503].messages.products });
  }

  return res.status(response[200].statusCode).json(products);
}

async function httpCreateNewProduct(req, res) {
  const data = req.body;

  if (!data.length) {
    return res
      .status(response[400].statusCode)
      .json({ success: false, error: response[400].messages.noName });
  }

  const result = await createProducts(data);

  return res
    .status(response[200].statusCode)
    .json({ success: true, result});
}

module.exports = { httpGetAllProducts, httpCreateNewProduct };
