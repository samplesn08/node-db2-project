const db = require('../../data/db-config');

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars');
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars')
  .where({ id: id }).first();
}

const create = (newCar) => {
  // DO YOUR MAGIC
  return db('cars')
  .insert(newCar)
  .then(ids => {
    return getById(ids[0])
  });
}

module.exports = {
  getAll,
  getById,
  create
}