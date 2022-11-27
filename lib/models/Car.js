const pool = require('../utils/pool');

class Car {
  id;
  model;
  make;
  year;

  constructor(row) {
    this.id = row.id;
    this.model = row.model;
    this.make = row.make;
    this.year = row.year;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT model, make, year FROM car_data'
    );
    if (!rows[0]) {
      return null;
    }
    return rows.map((row) => new Car(row));
  }

  
}

module.exports = Car;
