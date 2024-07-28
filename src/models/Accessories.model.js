const { Accessory } = require("./accessory.pg");

async function getAllAccessories() {
  return await Accessory.findAll();
}

async function createAccessories(data) {
  return await Accessory.bulkCreate(data);
}

module.exports = { getAllAccessories, createAccessories };
