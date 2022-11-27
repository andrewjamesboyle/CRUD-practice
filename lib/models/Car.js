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

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM CAR_DATA WHERE id = $1', [
      id,
    ]);
    if (!rows[0]) {
      return null;
    }
    return new Car(rows[0]);
  }  

  static async insert({ model, make, year }) {
    const { rows } = await pool.query(
      `
    INSERT INTO CAR_DATA (model, make, year)
    VALUES ($1, $2, $3)
    RETURNING *`,
      [model, make, year]
    );
    if (!rows[0]) {
      return null;
    }
    return new Car(rows[0]);
  }

  static async updateById(id, newAttrs) {
    const oldCar = await Car.getById(id);
    const updatedCar = { ...oldCar, ...newAttrs };
    const { rows } = await pool.query(
      `
    UPDATE CAR_DATA
    SET year = $2
    WHERE id = $1
    RETURNING *`, [id, updatedCar.year = 2004]
    );
    if (!rows[0]) {
      return null;
    }
    return new Car(rows[0]);
  }
}

module.exports = Car;
