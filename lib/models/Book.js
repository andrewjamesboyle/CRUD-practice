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
  
  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM books_data WHERE id = $1', [
      id,
    ]);
    if (!rows[0]) {
      return null;
    }
    return new Book(rows[0]);
  }  
  
  static async insert({ title, isbn_number, quote }) {
    const { rows } = await pool.query(
      `
    INSERT INTO books_data (title, isbn_number, quote)
    VALUES ($1, $2, $3)
    RETURNING *`,
      [title, isbn_number, quote]
    );
    if (!rows[0]) {
      return null;
    }
    return new Book(rows[0]);
  }
}

module.exports = Book;
