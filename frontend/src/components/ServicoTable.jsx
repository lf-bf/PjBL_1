import { FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';

function ServicoTable({ servicos, onView, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow rounded">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="p-3 text-left">Animal</th>
            <th className="p-3 text-left">Tipo</th>
            <th className="p-3 text-left">Dono</th>
            <th className="p-3 text-left">Telefone</th>
            <th className="p-3 text-left">Valor</th>
            <th className="p-3 text-left">Servico</th>
            <th className="p-3 text-left">Acoes</th>
          </tr>
        </thead>
        <tbody>
          {servicos.length === 0 ? (
            <tr>
              <td colSpan="7" className="p-4 text-center text-gray-500">
                Nenhum registro encontrado.
              </td>
            </tr>
          ) : (
            servicos.map((s) => (
              <tr key={s.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{s.nome_animal}</td>
                <td className="p-3">{s.tipo}</td>
                <td className="p-3">{s.nome_dono}</td>
                <td className="p-3">{s.telefone}</td>
                <td className="p-3">R$ {Number(s.valor).toFixed(2)}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      s.servico === 'banho'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {s.servico === 'banho' ? 'Banho' : 'Tosa'}
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onView(s.id)}
                      title="Ver detalhes"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <FiEye size={18} />
                    </button>
                    <button
                      onClick={() => onEdit(s.id)}
                      title="Editar"
                      className="text-yellow-500 hover:text-yellow-700 transition-colors"
                    >
                      <FiEdit2 size={18} />
                    </button>
                    <button
                      onClick={() => onDelete(s.id)}
                      title="Excluir"
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ServicoTable;
