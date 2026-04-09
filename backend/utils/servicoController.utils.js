const TELEFONE_REGEX = /^\d{10,11}$/;
const MAX_NOME = 100;
const MIN_NOME = 3;
const TIPOS_PERMITIDOS = ['cachorro', 'gato', 'coelho', 'pequenos roedores'];

function validarId(id) {
  const n = Number(id);
  return Number.isInteger(n) && n > 0;
}

function validarCampos({ nome_animal, tipo, nome_dono, telefone, valor, servico }) {
  if (!nome_animal?.trim()) return 'Nome do animal é obrigatório';
  if (nome_animal.trim().length < MIN_NOME) return `Nome do animal deve ter no mínimo ${MIN_NOME} caracteres`;
  if (nome_animal.trim().length > MAX_NOME) return `Nome do animal deve ter no máximo ${MAX_NOME} caracteres`;

  if (!tipo?.trim()) return 'Tipo do animal é obrigatório';
  if (!TIPOS_PERMITIDOS.includes(tipo.trim().toLowerCase())) return `Tipo inválido. Permitidos: ${TIPOS_PERMITIDOS.join(', ')}`;

  if (!nome_dono?.trim()) return 'Nome do dono é obrigatório';
  if (nome_dono.trim().length < MIN_NOME) return `Nome do dono deve ter no mínimo ${MIN_NOME} caracteres`;
  if (nome_dono.trim().length > MAX_NOME) return `Nome do dono deve ter no máximo ${MAX_NOME} caracteres`;

  if (!telefone?.trim()) return 'Telefone é obrigatório';
  const telefoneLimpo = String(telefone).replace(/\D/g, '');
  if (telefoneLimpo.length === 0) return 'Telefone deve conter apenas números';
  if (!TELEFONE_REGEX.test(telefoneLimpo)) return 'Telefone inválido (use apenas dígitos, 10 ou 11 números)';

  if (valor == null || valor === '') return 'Valor é obrigatório';
  if (isNaN(valor) || Number(valor) <= 0) return 'Valor deve ser um número positivo';

  if (!servico) return 'Serviço é obrigatório';
  if (servico !== 'banho' && servico !== 'tosa') return 'Serviço deve ser banho ou tosa';

  return null;
}

module.exports = { validarId, validarCampos };
