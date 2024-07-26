const { response } = require('../constants/response');
const { createTablets, getAllTablets } = require('../models/Tablets.model');

async function httpGetAllTablets(req, res) {
  const tablets = await getAllTablets();

  if (!tablets) {
    return res
      .status(response[503].statusCode)
      .json({ success: false, error: response[503].messages.tablets });
  }

  return res.status(response[200].statusCode).json(tablets);
}

async function httpFillAllTablets(req, res) {
  const data = req.body;

  if (!data.length) {
    return res
      .status(response[400].statusCode)
      .json({ success: false, error: response[400].messages.noData });
  }

  const result = await createTablets(data);

  return res.status(response[200].statusCode).json({ success: true, result });
}

module.exports = { httpFillAllTablets, httpGetAllTablets };
