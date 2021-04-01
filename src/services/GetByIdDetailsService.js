const Orders = require('../models/Orders');

// Componente de repostas https
const { status } = require('../util/dataStatus');

const { sucess } = status;

const getByIdDetails = async (id) => {
  const [orders] = await Orders.getByIdDetails(id);

  return { status: sucess, message: orders };
};

module.exports = getByIdDetails;