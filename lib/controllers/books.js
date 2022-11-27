const Router = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const books = await Book.getAll();
      if (!books) {
        next();
      }
      res.json(books);
    } catch (e) {
      next(e);
    }
  });


