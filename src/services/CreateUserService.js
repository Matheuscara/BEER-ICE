const User = require('../models/User');

// Componente de repostas https
const { status, messages } = require('../util/dataStatus');

const { sucess, unauthorized } = status;
const { emailExistente } = messages;

const ZERO = 0;

const createUser = async (name, email, password, role) => {
  const emailExists = await User.findByEmail(email);

  if (emailExists !== ZERO) {
    return { status: unauthorized, message: emailExistente };
  }

  const user = await User.createUser(name, email, password, role);
  return { status: sucess, message: email, user };
};

module.exports = createUser;
