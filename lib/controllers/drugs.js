const Router = require('express');
const Drug = require('../models/Drug');

module.exports = Router()
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

