const Router = require('express');
const Employee = require('../models/Employee');

module.exports = Router()

  .get('/:id', async (req, res, next) => {
    try {
      const employee = await Employee.getById(req.params.id);
      if (!employee) {
        next();
      }
      res.json(employee);
    } catch (e) {
      next(e);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const employees = await Employee.getAll();
      if (!employees) {
        next();
      }
      res.json(employees);
    } catch (e) {
      next(e);
    }
  });
