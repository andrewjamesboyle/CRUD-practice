const Car = require('../models/Car');
const Router = require('express');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const car = await Car.getById(req.params.id);
      if (!car) {
        next();
      }
      res.json(car);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const cars = await Car.getAll();
      if (!cars) {
        next();
      }
      res.json(cars);
    } catch (e) {
      next(e);
    }
  });

