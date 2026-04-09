const TIPOS_ANIMAL = ['Cachorro', 'Gato', 'Coelho', 'Pequenos Roedores'];

function ServicoFormFields({ form, onChange, onSubmit, onCancel, isEditing }) {
  return (
    <form onSubmit={onSubmit} className="bg-white shadow rounded p-6 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Animal</label>
        <input
          type="text"
          name="nome_animal"
          value={form.nome_animal}
          onChange={onChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tipo do Animal</label>
        <select
          name="tipo"
          value={form.tipo}
          onChange={onChange}
          className="w-full border rounded p-2"
        >
          {TIPOS_ANIMAL.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Dono</label>
        <input
          type="text"
          name="nome_dono"
          value={form.nome_dono}
          onChange={onChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
        <input
          type="text"
          name="telefone"
          value={form.telefone}
          onChange={onChange}
          className="w-full border rounded p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Valor (R$)</label>
        <input
          type="number"
          name="valor"
          value={form.valor}
          onChange={onChange}
          step="0.01"
          min="0"
          className="w-full border rounded p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Servico</label>
        <select
          name="servico"
          value={form.servico}
          onChange={onChange}
          className="w-full border rounded p-2"
        >
          <option value="banho">Banho</option>
          <option value="tosa">Tosa</option>
        </select>
      </div>
      <div className="flex gap-3">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isEditing ? 'Atualizar' : 'Cadastrar'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default ServicoFormFields;
