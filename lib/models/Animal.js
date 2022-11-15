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
    const { rows } = await pool.query(
      'SELECT common_name, is_pet FROM animals'
    );
    if (!rows[0]) {
      return null;
    }
    return rows.map((row) => new Animal(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM animals WHERE id = $1', [
      id,
    ]);
    if (!rows[0]) {
      return null;
    }
    return new Animal(rows[0]);
  }

  static async insert({ common_name, scientific_name, is_pet }) {
    const { rows } = await pool.query(
      `
    INSERT INTO animals (common_name, scientific_name, is_pet)
    VALUES ($1, $2, $3)
    RETURNING *`,
      [common_name, scientific_name, is_pet]
    );
    if (!rows[0]) {
      return null;
    }
    return new Animal(rows[0]);
  }

  static async updateById(id, newAttrs) {
    const oldAnimal = await Animal.getById(id);
    const updatedAnimal = { ...oldAnimal, ...newAttrs };
    const { rows } = await pool.query(
      `
    UPDATE animals
    SET is_pet = $2
    WHERE id = $1
    RETURNING *`, [id, updatedAnimal.is_pet = true]
    );
    if (!rows[0]) {
      return null;
    }
    return new Animal(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query('DELETE FROM animals WHERE id = $1 RETURNING *', [id]);
    if (!rows[0]) {
      return null;
    }
    return new Animal(rows[0]);
  }
}

module.exports = Animal;
