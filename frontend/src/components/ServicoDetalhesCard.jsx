import { Link } from 'react-router-dom';

function ServicoDetalhesCard({ servico }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Detalhes do Registro</h1>
      <div className="bg-white shadow rounded p-6 space-y-3">
        <div>
          <span className="font-medium text-gray-600">Nome do Animal:</span>
          <p className="text-gray-800">{servico.nome_animal}</p>
        </div>
        <div>
          <span className="font-medium text-gray-600">Tipo:</span>
          <p className="text-gray-800">{servico.tipo}</p>
        </div>
        <div>
          <span className="font-medium text-gray-600">Nome do Dono:</span>
          <p className="text-gray-800">{servico.nome_dono}</p>
        </div>
        <div>
          <span className="font-medium text-gray-600">Telefone:</span>
          <p className="text-gray-800">{servico.telefone}</p>
        </div>
        <div>
          <span className="font-medium text-gray-600">Valor:</span>
          <p className="text-gray-800">R$ {Number(servico.valor).toFixed(2)}</p>
        </div>
        <div>
          <span className="font-medium text-gray-600">Servico:</span>
          <p>
            <span
              className={`px-2 py-1 rounded text-sm font-medium ${
                servico.servico === 'banho'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-green-100 text-green-800'
              }`}
            >
              {servico.servico === 'banho' ? 'Banho' : 'Tosa'}
            </span>
          </p>
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        <Link to={`/editar/${servico.id}`} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Editar
        </Link>
        <Link to="/" className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
          Voltar
        </Link>
      </div>
    </>
  );
}

export default ServicoDetalhesCard;
