const db = require('../config/db');

class Product {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM produits ORDER BY date_creation DESC');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM produits WHERE id = ?', [id]);
    return rows[0];
  }

  static async add(data) {
    const { nom, prix, description } = data;
    const [result] = await db.query(
      'INSERT INTO produits (nom, prix, description) VALUES (?, ?, ?)',
      [nom, prix, description]
    );
    return result;
  }

  static async update(id, data) {
    const { nom, prix, description } = data;
    const [result] = await db.query(
      'UPDATE produits SET nom = ?, prix = ?, description = ? WHERE id = ?',
      [nom, prix, description, id]
    );
    return result;
  }

  static async remove(id) {
    const [result] = await db.query('DELETE FROM produits WHERE id = ?', [id]);
    return result;
  }
}

module.exports = Product;