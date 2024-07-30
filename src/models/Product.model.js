const { Op } = require('sequelize');
const { pagination } = require('../constants/pagination');
const { Product } = require('./product.pg');

async function getPaginatedProducts(query) {
  const findOptions = {};

  const page = query.page ? query.page - 1 : 0;

  findOptions.limit = query.perPage ? query.perPage : pagination.limit;
  findOptions.offset = page * findOptions.limit;
  findOptions.where = {
    category: query.category,
  };

  if (query.sort) {
    switch (query.sort) {
      case 'Cheapest': {
        findOptions.order = [['price', 'ASC']];

        break;
      }

      case 'Alphabetically': {
        findOptions.order = [['name', 'ASC']];

        break;
      }

      case 'Newest': {
        findOptions.order = [['year', 'DESC']];

        break;
      }

      default:
        console.log('default case');
    }
  } else {
    findOptions.order = [['year', 'DESC']];
  }

  if (query.query) {
    console.log('here', query.query);
    findOptions.where.name = {
      [Op.iLike]: `%${query.query}%`,
    };
  }

  const result = await Product.findAndCountAll(findOptions);

  return {
    total: result.count,
    products: result.rows,
  };
}

async function getProductsById(ids) {
  return await Product.findAll({
    where: {
      itemId: {
        [Op.in]: ids,
      },
    },
  });
}

async function createProducts(data) {
  const newData = data.map((product) => {
    delete product.id;

    return product;
  });

  return await Product.bulkCreate(newData);
}

async function getProductsByParams(query) {
  return Product.findAll({
    order: [
      [`${query.sortBy}`, `${query.order}`]
    ],
    limit: 20,
  });
}

module.exports = {
  getPaginatedProducts,
  createProducts,
  getProductsById,
  getProductsByParams,
};
