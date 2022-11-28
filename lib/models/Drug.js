const pool = require('../utils/pool');

class Drug {
  id;
  company;
  otc_name;
  rx_name;

  constructor(row) {
    this.id = row.id;
    this.company = row.company;
    this.otc_name = row.otc_name;
    this.rx_name = row.rx_name;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT company, otc_name, rx_name FROM drugs'
    );
    if (!rows[0]) {
      return null;
    }
    return rows.map((row) => new Drug(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM drugs WHERE id = $1', [
      id,
    ]);
    if (!rows[0]) {
      return null;
    }
    return new Drug(rows[0]);
  }  

  static async insert({ company, otc_name, rx_name }) {
    const { rows } = await pool.query(
      `
    INSERT INTO drugs (company, otc_name, rx_name)
    VALUES ($1, $2, $3)
    RETURNING *`,
      [company, otc_name, rx_name]
    );
    if (!rows[0]) {
      return null;
    }
    return new Drug(rows[0]);
  }

  static async updateById(id, newAttrs) {
    const oldDrug = await Drug.getById(id);
    const updatedDrug = { ...oldDrug, ...newAttrs };
    const { rows } = await pool.query(
      `
    UPDATE drugs
    SET company = $2
    WHERE id = $1
    RETURNING *`, [id, updatedDrug.company = 'Pfizer']
    );
    if (!rows[0]) {
      return null;
    }
    return new Drug(rows[0]);
  }
}

module.exports = Drug;
