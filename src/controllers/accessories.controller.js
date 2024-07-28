const { response } = require('../constants/response');
const { getAllAccessories, createAccessories } = require('../models/Accessories.model');

async function httpGetAllAccessories(req, res) {
  const accessories = await getAllAccessories();

  if (!accessories) {
    return res
      .status(response[503].statusCode)
      .json({ success: false, error: response[503].messages.products });
  }

  return res.status(response[200].statusCode).json(accessories);
}

async function httpFillAccessoriesTable(req, res) {
  const data = req.body;

  if (!data.length) {
    return res
      .status(response[400].statusCode)
      .json({ success: false, error: response[400].messages.noData });
  }

  const result = await createAccessories(data);

  return res.status(response[200].statusCode).json({ success: true, result });
}

module.exports = { httpGetAllAccessories, httpFillAccessoriesTable };
