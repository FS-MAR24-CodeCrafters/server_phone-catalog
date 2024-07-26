const express = require('express');

const tabletsRouter = express.Router();

phonesRouter.get('/', httpGetAllTablets)
phonesRouter.post('/', httpFillAllTablets)

module.exports = { tabletsRouter };
