const express = require('express');

const tabletsRouter = express.Router();

tabletsRouter.get('/', httpGetAllTablets)
tabletsRouter.post('/', httpFillAllTablets)

module.exports = { tabletsRouter };
