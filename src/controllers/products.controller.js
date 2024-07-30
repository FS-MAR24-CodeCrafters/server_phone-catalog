const { response } = require('../constants/response');
const {
  getPaginatedProducts,
  createProducts,
  getProductsById,
  getProductsByParams,
} = require('../models/Product.model');

async function httpGetProducts(req, res) {
  const query = req.query;

  const products = await getPaginatedProducts(query);

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

async function httpGetAllFavourites(req, res) {
  const { ids } = req.params;

  if (!ids.length) {
    return res
      .status(response[400].statusCode)
      .json({ success: false, error: response[400].messages.noData });
  }

  const products = await getProductsById(ids.split(','));

  return res.status(response[200].statusCode).json({ success: true, products });
}

async function httpGetAllCartProducts(req, res) {
  const { ids } = req.params;

  if (!ids.length) {
    return res
      .status(response[400].statusCode)
      .json({ success: false, error: response[400].messages.noData });
  }

  const products = await getProductsById(ids.split(','));

  return res.status(response[200].statusCode).json({ success: true, products });
}

async function httpGetAllFilteredProducts(req, res) {
  const query = req.query;

  if (!('sortBy' in query)) {
    return res
      .status(response[400].statusCode)
      .json({ success: false, error: response[400].messages.noData });
  }

  const products = await getProductsByParams(query);

  return res.status(response[200].statusCode).json({ success: true, products });
}

module.exports = {
  httpGetProducts,
  httpFillProductsTable,
  httpGetAllFavourites,
  httpGetAllCartProducts,
  httpGetAllFilteredProducts,
};
