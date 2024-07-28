const { Product } = require('./product.pg');

async function getPaginatedProducts(offset, limit) {
  return await Product.findAll({
    offset,
    limit,
  });
}

async function createProducts(data) {
  const newData = data.map((product) => {
    delete product.id;

    return product;
  });

  return await Product.bulkCreate(newData);
}

module.exports = { getPaginatedProducts, createProducts };
