const pool = require('../utils/pool');

class Book {
  id;
  title;
  isbn_number;
  quote;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.isbn_number = row.isbn_number;
    this.quote = row.quote;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT title, isbn_number, quote FROM books_data'
    );
    if (!rows[0]) {
      return null;
    }
    return rows.map((row) => new Book(row));
  }

  
}

module.exports = Book;
