const Sales = require('../models/Sales');
const Login = require('../models/Login');

// Componente de repostas https
const { status } = require('../util/dataStatus');

const { sucess } = status;

const createSale = async (saleData) => {
  const user = await Login.findByEmail(saleData.emailState);
  const userId = user[0].id;
  await Sales.createSale(userId, saleData);

  return { status: sucess, message: 'Cadastro de venda efetuado com sucesso!' };
};

module.exports = createSale;