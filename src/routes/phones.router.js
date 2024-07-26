const express = require('express');
const { httpGetAllPhones, httpFillAllPhones } = require('../controllers/phones.controller');

const phonesRouter = express.Router();

phonesRouter.get('/', httpGetAllPhones)
phonesRouter.post('/', httpFillAllPhones)

module.exports = { phonesRouter };
