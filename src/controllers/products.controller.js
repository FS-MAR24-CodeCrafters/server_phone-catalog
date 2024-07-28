const { pagination } = require('../constants/pagination');
const { response } = require('../constants/response');
const { getPaginatedProducts, createProducts } = require('../models/Product.model');

async function httpGetPaginatedProducts(req, res) {
  const { page = 0, perPage } = req.params;

  const offset = page * pagination.limit;
  const limit = perPage ? perPage : pagination.limit;

  const products = await getPaginatedProducts(offset, limit);

  if (!products) {
    return res
      .status(response[503].statusCode)
      .json({ success: false, error: response[503].messages.products });
  }

  return res.status(response[200].statusCode).json(products);
}

async function httpFillProductsTable(req, res) {
  const data = req.body;

  if (!data.length) {
    return res
      .status(response[400].statusCode)
      .json({ success: false, error: response[400].messages.noData });
  }

  const result = await createProducts(data);

  return res.status(response[200].statusCode).json({ success: true, result });
}

module.exports = { httpGetPaginatedProducts, httpFillProductsTable };
