const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  //port: 3306,
  user: 'root',
  password: 'h5n51305',
  database: 'petshop'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

module.exports = connection;
