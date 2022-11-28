const pool = require('../utils/pool');

class Employee {
  id;
  position;
  skills;
  education;

  constructor(row) {
    this.id = row.id;
    this.position = row.position;
    this.skills = row.skills;
    this.education = row.education;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT position, skills, education FROM employees'
    );
    if (!rows[0]) {
      return null;
    }
    return rows.map((row) => new Employee(row));
  }
}

module.exports = Employee;
