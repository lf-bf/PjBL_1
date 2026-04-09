import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import Toast from '../components/Toast';
import ServicoFormFields from '../components/ServicoFormFields';

function FormServico() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [form, setForm] = useState({
    nome_animal: '',
    tipo: 'Cachorro',
    nome_dono: '',
    telefone: '',
    valor: '',
    servico: 'banho'
  });
  const [toast, setToast] = useState({ message: '', type: 'error' });
  const fecharToast = useCallback(() => setToast({ message: '', type: 'error' }), []);
  const mostrarErro = (msg) => setToast({ message: msg, type: 'error' });

  useEffect(() => {
    if (isEditing) {
      api.get(`/servicos/${id}`)
        .then((res) => setForm(res.data))
        .catch(() => mostrarErro('Erro ao carregar dados.'));
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setToast({ message: '', type: 'error' });

    if (!form.nome_animal.trim() || !form.tipo.trim() || !form.nome_dono.trim() || !form.telefone.trim() || !form.valor || !form.servico) {
      mostrarErro('Preencha todos os campos.');
      return;
    }

    if (form.nome_animal.trim().length < 3) {
      mostrarErro('Nome do animal deve ter no mínimo 3 caracteres.');
      return;
    }

    if (form.nome_dono.trim().length < 3) {
      mostrarErro('Nome do dono deve ter no mínimo 3 caracteres.');
      return;
    }

    const telefoneLimpo = form.telefone.replace(/\D/g, '');
    if (!/^\d{10,11}$/.test(telefoneLimpo)) {
      mostrarErro('Telefone inválido. Informe 10 ou 11 dígitos numéricos.');
      return;
    }

    try {
      if (isEditing) {
        await api.put(`/servicos/${id}`, { ...form, valor: Number(form.valor) });
      } else {
        await api.post('/servicos', { ...form, valor: Number(form.valor) });
      }
      navigate('/');
    } catch (err) {
      const msg = err.response?.data?.error || 'Erro ao salvar.';
      mostrarErro(msg);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <Toast message={toast.message} type={toast.type} onClose={fecharToast} />
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        {isEditing ? 'Editar Registro' : 'Novo Registro'}
      </h1>

      <ServicoFormFields
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={() => navigate('/')}
        isEditing={isEditing}
      />
    </div>
  );
}

export default FormServico;
