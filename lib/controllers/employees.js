const Router = require('express');
const Employee = require('../models/Employee');

module.exports = Router()

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
