const Animal = require('../models/Animal');
const Router = require('express');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const animal = await Animal.getById(req.params.id);
      if (!animal) {
        next();
      }
      res.json(animal);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res) => {
    const animals = await Animal.getAll();
    res.json(animals);
  })

  .post('/', async (req, res) => {
    const newAnimal = await Animal.insert(req.body);
    res.json(newAnimal);
  })

  .put('/:id', async (req, res) => {
    const updatedAnimal = await Animal.updateById(req.params.id, req.body);
    res.json(updatedAnimal);
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Animal.delete(req.params.id);
      if (!data) {
        next();
      }
      res.json(data);
    } catch (e) {
      next(e);
    }

  });

