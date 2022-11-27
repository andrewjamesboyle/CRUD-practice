const Router = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .get('/:id', async (req, res, next) => {
    try {
      const book = await Book.getById(req.params.id);
      if (!book) {
        next();
      }
      res.json(book);
    } catch (e) {
      next(e);
    }
  })  

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
  })
  
  .post('/', async (req, res, next) => {
    try {
      const newBook = await Book.insert(req.body);
      if (!newBook) {
        next();
      }
      res.json(newBook);
    } catch (e) {
      next(e);
    }
  });


