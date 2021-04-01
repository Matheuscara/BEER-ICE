const Login = require('../models/Login');
const createToken = require('../auth/createToken');

// Componente de repostas https
const { status, messages } = require('../util/dataStatus');

const { sucess, unauthorized } = status;
const { dadosInvalidos } = messages;

const loginUsers = async (email, password) => {
  const user = await Login.findByEmail(email);

  if (!user[0] || user[0].password !== password) return { status: unauthorized, dadosInvalidos };

  const {
     password: passwordDB, id, ...userWithoutPassword 
  } = user[0];

  const token = createToken(userWithoutPassword);

  return { status: sucess, message: { token, ...userWithoutPassword } };
};

module.exports = loginUsers;
