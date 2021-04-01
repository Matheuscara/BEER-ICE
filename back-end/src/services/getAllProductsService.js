const Products = require('../models/Products');

// Componente de repostas https
const { status } = require('../util/dataStatus');

const { sucess } = status;

const getAllProducts = async () => {
  const products = await Products.getAllProducts();

  return { status: sucess, message: products };
};

module.exports = getAllProducts;