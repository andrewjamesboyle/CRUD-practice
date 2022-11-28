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

  .get('/', async (req, res, next) => {
    try {
      const animals = await Animal.getAll();
      if (!animals) {
        next();
      }
      res.json(animals);
    } catch (e) {
      next(e);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const newAnimal = await Animal.insert(req.body);
      if (!newAnimal) {
        next();
      }
      res.json(newAnimal);
    } catch (e) {
      next(e);
    }
  })

  .put('/:id', async (req, res, next) => {
    try {
      const updatedAnimal = await Animal.updateById(req.params.id, req.body);
      if (!updatedAnimal) {
        next();
      }
      res.json(updatedAnimal);
    } catch (e) {
      next(e);
    }
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

