const Animal = require('../models/Animal');
const Router = require('express');

module.exports = Router() 

  .get('/', async (req, res) => {
    const animals = await Animal.getAll();
    res.json(animals);
  });

