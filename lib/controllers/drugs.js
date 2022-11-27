const Router = require('express');
const Drug = require('../models/Drug');

module.exports = Router()
  
  .get('/:id', async (req, res, next) => {
    try {
      const drug = await Drug.getById(req.params.id);
      if (!drug) {
        next();
      }
      res.json(drug);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const drugs = await Drug.getAll();
      if (!drugs) {
        next();
      }
      res.json(drugs);
    } catch (e) {
      next(e);
    }
  });

