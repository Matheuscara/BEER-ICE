const User = require('../models/User');

// Componente de repostas https
const { status } = require('../util/dataStatus');

const { sucess } = status;

const updateUser = async (name, email) => {
  const user = await User.updateUser(name, email);

  return { status: sucess, message: user };
};

module.exports = updateUser;
