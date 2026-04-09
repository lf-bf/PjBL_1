import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListaServicos from './pages/ListaServicos';
import FormServico from './pages/FormServico';
import DetalhesServico from './pages/DetalhesServico';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-700 text-white p-4 shadow">
          <h1 className="text-xl font-bold text-center">PetShop do Luiz - Gerenciamento de Servicos</h1>
        </header>

        <main className="flex-1 py-6">
          <Routes>
            <Route path="/" element={<ListaServicos />} />
            <Route path="/novo" element={<FormServico />} />
            <Route path="/editar/:id" element={<FormServico />} />
            <Route path="/servico/:id" element={<DetalhesServico />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white text-center p-3 text-sm">
          Desenvolvido por Luiz Fernando
        </footer>
      </div>
    </Router>
  );
}

export default App;
