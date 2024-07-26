const { getAllPhones, createPhones } = require('../models/Phone.model');
const { response } = require('../constants/response');

async function httpGetAllPhones(req, res) {
  const phones = await getAllPhones();

  if (!phones) {
    return res
      .status(response[503].statusCode)
      .json({ success: false, error: response[503].messages.phones });
  }

  return res.status(response[200].statusCode).json(phones);
}

async function httpFillAllPhones(req, res) {
  const data = req.body;

  if (!data.length) {
    return res
      .status(response[400].statusCode)
      .json({ success: false, error: response[400].messages.noData });
  }

  const result = await createPhones(data);

  return res.status(response[200].statusCode).json({ success: true, result });
}

module.exports = { httpFillAllPhones, httpGetAllPhones };
