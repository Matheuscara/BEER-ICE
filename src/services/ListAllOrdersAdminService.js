const Orders = require('../models/Orders');

// Componente de repostas https
const { status } = require('../util/dataStatus');

const { sucess } = status;

const listAllOrdersAdmin = async () => {
  const orders = await Orders.listAllOrdersAdmin();

  return { status: sucess, message: orders };
};

module.exports = listAllOrdersAdmin;