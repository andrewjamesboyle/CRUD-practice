const Animal = require('../models/Animal');
const Router = require('express');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const animal = await Animal.getById(req.params.id);
    res.json(animal);
  })
  .get('/', async (req, res) => {
    const animals = await Animal.getAll();
    res.json(animals);
  })

  .post('/', async (req, res) => {
    const newAnimal = await Animal.insert(req.body);
    res.json(newAnimal);
  });
