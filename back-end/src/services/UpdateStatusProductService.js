const Orders = require('../models/Orders');

// Componente de repostas https
const { status } = require('../util/dataStatus');

const { sucess, error } = status;

const updateStatusProduct = async (id) => {
  const changedRows = await Orders.updateStatusProduct(id);
  if (changedRows === 1) return { status: sucess, message: 'Producto foi enviado com sucesso!' };

  return { status: error, message: 'Erro ao enviar' };
};

module.exports = updateStatusProduct;