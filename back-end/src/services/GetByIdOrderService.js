const Orders = require('../models/Orders');

// Componente de repostas https
const { status } = require('../util/dataStatus');

const { sucess } = status;

const getByIdOrder = async (id) => {
  const [orders] = await Orders.getByIdOrder(id);

  return { status: sucess, message: orders };
};

module.exports = getByIdOrder;