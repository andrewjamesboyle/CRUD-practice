const pool = require('../utils/pool');

class Animal {
  id;
  common_name;
  scientific_name;
  is_pet;

  constructor(row) {
    this.id = row.id;
    this.common_name = row.common_name;
    this.scientific_name = row.scientific_name;
    this.is_pet = row.is_pet;
  }

  
  static async getAll() {
    const { rows } = await pool.query('SELECT common_name, is_pet FROM animals');
    return rows.map((row) => new Animal(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM animals WHERE id = $1', [id]);
    return new Animal(rows[0]);
  }
}

module.exports = Animal;
