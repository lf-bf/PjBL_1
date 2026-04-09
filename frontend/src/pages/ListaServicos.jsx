import { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import Toast from '../components/Toast';
import ConfirmDialog from '../components/ConfirmDialog';
import ServicoTable from '../components/ServicoTable';
import Pagination from '../components/Pagination';

function ListaServicos() {
  const navigate = useNavigate();
  const [servicos, setServicos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [toast, setToast] = useState({ message: '', type: 'error' });
  const fecharToast = useCallback(() => setToast({ message: '', type: 'error' }), []);
  const mostrarErro = (msg) => setToast({ message: msg, type: 'error' });
  const mostrarSucesso = (msg) => setToast({ message: msg, type: 'success' });

  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, tipo: null, id: null });

  const abrirConfirmDelete = (id) => setConfirmDialog({ isOpen: true, tipo: 'delete', id });
  const abrirConfirmEdit = (id) => setConfirmDialog({ isOpen: true, tipo: 'edit', id });
  const fecharConfirm = () => setConfirmDialog({ isOpen: false, tipo: null, id: null });

  const fetchServicos = async (p) => {
    try {
      const res = await api.get(`/servicos?page=${p}`);
      setServicos(res.data.data);
      setTotalPages(res.data.totalPages);
      setToast({ message: '', type: 'error' });
    } catch {
      mostrarErro('Erro ao carregar servicos.');
    }
  };

  useEffect(() => {
    fetchServicos(page);
  }, [page]);

  const handleConfirm = async () => {
    const { tipo, id } = confirmDialog;
    fecharConfirm();
    if (tipo === 'delete') {
      try {
        await api.delete(`/servicos/${id}`);
        mostrarSucesso('Registro excluído com sucesso.');
        fetchServicos(page);
      } catch (err) {
        mostrarErro(err.response?.data?.error || 'Erro ao excluir servico.');
      }
    } else if (tipo === 'edit') {
      navigate(`/editar/${id}`);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Toast message={toast.message} type={toast.type} onClose={fecharToast} />
      <ConfirmDialog
        isOpen={confirmDialog.isOpen}
        title={confirmDialog.tipo === 'delete' ? 'Excluir registro' : 'Editar registro'}
        message={
          confirmDialog.tipo === 'delete'
            ? 'Tem certeza que deseja excluir este registro? Esta ação não pode ser desfeita.'
            : 'Deseja editar este registro?'
        }
        confirmLabel={confirmDialog.tipo === 'delete' ? 'Excluir' : 'Editar'}
        confirmStyle={confirmDialog.tipo === 'delete' ? 'danger' : 'warning'}
        onConfirm={handleConfirm}
        onCancel={fecharConfirm}
      />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Servicos - PetShop</h1>
        <Link
          to="/novo"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Novo Registro
        </Link>
      </div>

      <ServicoTable
        servicos={servicos}
        onView={(id) => navigate(`/servico/${id}`)}
        onEdit={abrirConfirmEdit}
        onDelete={abrirConfirmDelete}
      />

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}

export default ListaServicos;
