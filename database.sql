CREATE DATABASE IF NOT EXISTS petshop;
USE petshop;

CREATE TABLE IF NOT EXISTS servicos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome_animal VARCHAR(100) NOT NULL,
  tipo VARCHAR(50) NOT NULL,
  nome_dono VARCHAR(100) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  valor DECIMAL(10, 2) NOT NULL,
  servico ENUM('banho', 'tosa') NOT NULL
);

INSERT INTO servicos (nome_animal, tipo, nome_dono, telefone, valor, servico) VALUES
('Rex', 'Cachorro', 'Carlos Silva', '(31) 99999-1111', 50.00, 'banho'),
('Mia', 'Gato', 'Ana Souza', '(31) 98888-2222', 35.00, 'tosa'),
('Thor', 'Cachorro', 'Pedro Lima', '(31) 97777-3333', 60.00, 'banho'),
('Luna', 'Gato', 'Maria Oliveira', '(31) 96666-4444', 40.00, 'tosa'),
('Bob', 'Cachorro', 'Joao Santos', '(31) 95555-5555', 55.00, 'banho');
