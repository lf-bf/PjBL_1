const db = require('../config/db');
const { validarId, validarCampos } = require('../utils/servicoController.utils');

const getAll = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  db.query('SELECT COUNT(*) AS total FROM servicos', (err, countResult) => {
    if (err) return res.status(500).json({ error: 'Erro ao buscar servicos' });

    const total = countResult[0].total;

    db.query('SELECT * FROM servicos ORDER BY id DESC LIMIT ? OFFSET ?', [limit, offset], (err, results) => {
      if (err) return res.status(500).json({ error: 'Erro ao buscar servicos' });
      res.json({ data: results, total, page, totalPages: Math.ceil(total / limit) });
    });
  });
};

const getById = (req, res) => {
  const { id } = req.params;
  if (!validarId(id)) return res.status(400).json({ error: 'ID inválido' });
  db.query('SELECT * FROM servicos WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Erro ao buscar serviço' });
    if (results.length === 0) return res.status(404).json({ error: 'Serviço nao encontrado' });
    res.json(results[0]);
  });
};

const create = (req, res) => {
  const { nome_animal, tipo, nome_dono, telefone, valor, servico } = req.body;

  const erroValidacao = validarCampos({ nome_animal, tipo, nome_dono, telefone, valor, servico });
  if (erroValidacao) return res.status(400).json({ error: erroValidacao });

  const nomeTrimmed = nome_animal.trim();
  const tipoTrimmed = tipo.trim();
  const doneTrimmed = nome_dono.trim();
  const telefoneLimpo = telefone.replace(/\D/g, '');

  const sql = 'INSERT INTO servicos (nome_animal, tipo, nome_dono, telefone, valor, servico) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [nomeTrimmed, tipoTrimmed, doneTrimmed, telefoneLimpo, Number(valor), servico], (err, result) => {
    if (err) return res.status(500).json({ error: 'Erro ao criar serviço' });
    res.status(201).json({ id: result.insertId, nome_animal: nomeTrimmed, tipo: tipoTrimmed, nome_dono: doneTrimmed, telefone: telefoneLimpo, valor: Number(valor), servico });
  });
};

const update = (req, res) => {
  const { id } = req.params;
  if (!validarId(id)) return res.status(400).json({ error: 'ID inválido' });

  const { nome_animal, tipo, nome_dono, telefone, valor, servico } = req.body;

  const erroValidacao = validarCampos({ nome_animal, tipo, nome_dono, telefone, valor, servico });
  if (erroValidacao) return res.status(400).json({ error: erroValidacao });

  const nomeTrimmed = nome_animal.trim();
  const tipoTrimmed = tipo.trim();
  const doneTrimmed = nome_dono.trim();
  const telefoneLimpo = telefone.replace(/\D/g, '');

  const sql = 'UPDATE servicos SET nome_animal = ?, tipo = ?, nome_dono = ?, telefone = ?, valor = ?, servico = ? WHERE id = ?';
  db.query(sql, [nomeTrimmed, tipoTrimmed, doneTrimmed, telefoneLimpo, Number(valor), servico, id], (err, result) => {
    if (err) return res.status(500).json({ error: 'Erro ao atualizar serviço' });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Serviço não encontrado' });
    res.json({ id: Number(id), nome_animal: nomeTrimmed, tipo: tipoTrimmed, nome_dono: doneTrimmed, telefone: telefoneLimpo, valor: Number(valor), servico });
  });
};

const remove = (req, res) => {
  const { id } = req.params;
  if (!validarId(id)) return res.status(400).json({ error: 'ID inválido' });
  db.query('DELETE FROM servicos WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: 'Erro ao remover serviço' });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Serviço nao encontrado' });
    res.json({ message: 'Serviço removido com sucesso' });
  });
};

module.exports = { getAll, getById, create, update, remove };
