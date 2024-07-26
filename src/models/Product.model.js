const { Product } = require('./product.pg');

async function getAllProducts() {
  return await Product.findAll();
}

async function createProducts(data) {
  const newData = data.map((product) => {
    delete product.id;

    return product;
  });

  return await Product.bulkCreate(newData);
}

module.exports = { getAllProducts, createProducts };
