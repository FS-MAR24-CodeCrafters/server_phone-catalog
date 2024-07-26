const { Tablet } = require('./tablets.pg');

async function getAllTablets() {
  return await Tablet.findAll();
}

async function createTablets(data) {
  return await Tablet.bulkCreate(data);
}

module.exports = { createTablets, getAllTablets };
