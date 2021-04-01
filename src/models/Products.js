const connection = require('./connection');

const getAllProducts = async () => {
  const [products] = await connection.execute('SELECT * FROM Trybeer.products');
  return products;
};

const getByIdProduct = async (id) => {
  const [product] = await connection.execute('SELECT * FROM Trybeer.products WHERE id = ?', [id]);
  return product;
};

module.exports = {
  getAllProducts,
  getByIdProduct,
};
