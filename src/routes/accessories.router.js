const express = require('express');
const {
  httpGetAllAccessories,
  httpFillAccessoriesTable,
} = require('../controllers/accessories.controller');

const accessoriesRouter = express.Router();

accessoriesRouter.get('/', httpGetAllAccessories);
accessoriesRouter.post('/', httpFillAccessoriesTable);

module.exports = { accessoriesRouter };
