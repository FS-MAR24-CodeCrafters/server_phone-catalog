const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Product = sequelize.define(
  'product',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    itemId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullPrice: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    screen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ram: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    updatedAt: false,
    createdAt: false,
  },
);

function getAllProducts() {
  return Product.findAll();
}

function createProduct({
  category,
  itemId,
  name,
  fullPrice,
  price,
  screen,
  capacity,
  color,
  ram,
  year,
  image,
}) {
  return Product.create({
    category,
    itemId,
    name,
    fullPrice,
    price,
    screen,
    capacity,
    color,
    ram,
    year,
    image,
  });
}

module.exports = { getAllProducts, createProduct };
