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
('Rex', 'Cachorro', 'Carlos Silva', '3199999111', 50.00, 'banho'),
('Mia', 'Gato', 'Ana Souza', '31988882222', 35.00, 'tosa'),
('Thor', 'Cachorro', 'Pedro Lima', '31977773333', 60.00, 'banho'),
('Luna', 'Gato', 'Maria Oliveira', '31966664444', 40.00, 'tosa'),
('Bob', 'Cachorro', 'Joao Santos', '31955555555', 55.00, 'banho'),
('Nina', 'Gato', 'Fernanda Costa', '31944446666', 30.00, 'tosa'),
('Max', 'Cachorro', 'Ricardo Alves', '31933337777', 65.00, 'banho'),
('Mel', 'Coelho', 'Juliana Rocha', '31922228888', 45.00, 'tosa'),
('Duke', 'Cachorro', 'Bruno Ferreira', '31911119999', 70.00, 'banho'),
('Fifi', 'Gato', 'Camila Dias', '31900001111', 38.00, 'tosa'),
('Zeus', 'Cachorro', 'Marcos Ribeiro', '31988881234', 55.00, 'banho'),
('Mimi', 'Gato', 'Patricia Nunes', '31977775678', 42.00, 'tosa'),
('Toby', 'Cachorro', 'Lucas Mendes', '31966669012', 58.00, 'banho'),
('Pipoca', 'Coelho', 'Leticia Araujo', '31955553456', 48.00, 'tosa'),
('Buddy', 'Cachorro', 'Gustavo Martins', '31944447890', 62.00, 'banho'),
('Lili', 'Gato', 'Isabela Pereira', '31933331234', 36.00, 'tosa'),
('Simba', 'Cachorro', 'Rafael Gomes', '31922225678', 75.00, 'banho'),
('Bella', 'Gato', 'Tatiana Cardoso', '31911119012', 44.00, 'tosa'),
('Rocky', 'Cachorro', 'Diego Monteiro', '31900003456', 68.00, 'banho'),
('Coco', 'Pequenos Roedores', 'Amanda Lopes', '31988887890', 25.00, 'banho');
