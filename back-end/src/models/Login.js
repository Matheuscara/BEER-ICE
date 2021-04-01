const connection = require('./connection');

const getAllUser = async () => {
  const [alunos] = await connection.execute('SELECT * FROM trybeer.users');
  return alunos;
};

const findByEmail = async (email) => {
  const [user] = await connection.execute('select * from users where email=?', [email]);
  return user;
};

module.exports = {
  getAllUser,
  findByEmail,
};
