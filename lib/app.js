const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/animals', require('./controllers/animals'));
app.use('/cars', require('./controllers/cars'));
app.use('/books', require('./controllers/books'));
app.use('/drugs', require('./controllers/drugs'));
app.use('/employees', require('./controllers/employees'));
// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
