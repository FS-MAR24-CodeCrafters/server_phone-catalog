const { Product } = require('./models/Product.model');

Product.sync({ force: true });
