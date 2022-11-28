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
  })
  
  .post('/', async (req, res, next) => {
    try {
      const newEmployee = await Employee.insert(req.body);
      if (!newEmployee) {
        next();
      }
      res.json(newEmployee);
    } catch (e) {
      next(e);
    }
  })
  
  .put('/:id', async (req, res, next) => {
    try {
      const updatedEmployee = await Employee.updateById(req.params.id, req.body);
      if (!updatedEmployee) {
        next();
      }
      res.json(updatedEmployee);
    } catch (e) {
      next(e);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
      const data = await Employee.delete(req.params.id);
      if (!data) {
        next();
      }
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
