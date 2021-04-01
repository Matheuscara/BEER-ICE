const connection = require('./connection');

const findByEmail = async (email) => {
  const [[foundEmail]] = await connection.execute(
    'SELECT COUNT(*) AS counted FROM users WHERE email = ?', [email],
  );
  return foundEmail.counted;
};

const createUser = async (name, email, password, role) => {
  const user = await connection.execute(
    'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
    [name, email, password, role],
  );
  return user[0].insertId;
};

const updateUser = async (name, email) => {
  const [{ changedRows }] = await connection.execute(
    'UPDATE users SET name = ? WHERE email = ?',
    [name, email],
  );

  if (changedRows === 0) return null;

  return changedRows;
};

module.exports = {
  createUser,
  updateUser,
  findByEmail,
};
