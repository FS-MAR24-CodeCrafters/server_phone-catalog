const { Phone } = require('./phone.pg');

async function getAllPhones() {
  return await Phone.findAll();
}

async function createPhones(data) {
  return await Phone.bulkCreate(data);
}

module.exports = { getAllPhones, createPhones };
