const frisby = require('frisby');
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: '1234',
  host: 'localhost',
  database: 'Trybeer',
});

describe('Testando rotas.', () => {

  beforeEach(async () => {
    await connection.execute('DROP DATABASE IF EXISTS Trybeer');
    await connection.execute('CREATE DATABASE IF NOT EXISTS Trybeer');
    await connection.execute(`
      CREATE TABLE Trybeer.users (
      id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(20) NOT NULL,
        role VARCHAR(20) NOT NULL,
        PRIMARY KEY (id)
      );`);

    await connection.execute('INSERT INTO Trybeer.users (name, email, password, role) VALUES (?, ?, ?, ?)', ['rafael ponci', 'rafael@gmail.com', '123456', 'client']);
  });

  it('Testando a rota LOGIN.', async () => {
    await frisby.post('http://localhost:3001/login', {
      email: 'rafael@gmail.com',
      password: '123456',
    }).expect('status', 200).then((response) => {
      const { body } = response;
      const result = JSON.parse(body);
      expect(result.email).toBe('rafael@gmail.com');
      expect(result.name).toBe('rafael ponci');
      expect(result.role).toBe('client');
    });
  });
});