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
  })
  
  .post('/', async (req, res, next) => {
    try {
      const newDrug = await Drug.insert(req.body);
      if (!newDrug) {
        next();
      }
      res.json(newDrug);
    } catch (e) {
      next(e);
    }
  })
  
  .put('/:id', async (req, res, next) => {
    try {
      const updatedDrug = await Drug.updateById(req.params.id, req.body);
      if (!updatedDrug) {
        next();
      }
      res.json(updatedDrug);
    } catch (e) {
      next(e);
    }
  })
  
  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Drug.delete(req.params.id);
      if (!data) {
        next();
      }
      res.json(data);
    } catch (e) {
      next(e);
    }
  });

