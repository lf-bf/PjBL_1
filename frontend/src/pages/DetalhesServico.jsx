import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import Toast from '../components/Toast';
import ServicoDetalhesCard from '../components/ServicoDetalhesCard';

function DetalhesServico() {
  const { id } = useParams();
  const [servico, setServico] = useState(null);
  const [toast, setToast] = useState({ message: '', type: 'error' });
  const fecharToast = useCallback(() => setToast({ message: '', type: 'error' }), []);

  useEffect(() => {
    api.get(`/servicos/${id}`)
      .then((res) => setServico(res.data))
      .catch((err) => setToast({ message: err.response?.data?.error || 'Erro ao carregar detalhes.', type: 'error' }));
  }, [id]);

  if (!servico && !toast.message) {
    return <div className="max-w-lg mx-auto p-6"><p>Carregando...</p></div>;
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      <Toast message={toast.message} type={toast.type} onClose={fecharToast} />
      {!servico ? (
        <div className="mt-4">
          <Link to="/" className="text-blue-600 hover:underline">Voltar</Link>
        </div>
      ) : (
        <ServicoDetalhesCard servico={servico} />
      )}
    </div>
  );
}

export default DetalhesServico;
