const express = require('express');
const { httpGetAllTablets, httpFillAllTablets } = require('../controllers/tablets.controller');

const tabletsRouter = express.Router();

tabletsRouter.get('/', httpGetAllTablets)
tabletsRouter.post('/', httpFillAllTablets)

module.exports = { tabletsRouter };
