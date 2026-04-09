# PetShop do Luiz - Sistema de Servicos

Sistema web para gerenciamento de servicos de um petshop (banho e tosa), com frontend em React e backend em Node.js/Express.

## Banco de dados

1. Abra o MySQL Workbench, conecte ao servidor e importe o arquivo `database.sql`:
   - Va em **Server > Data Import**
   - Selecione **Import from Self-Contained File** e escolha o arquivo `database.sql`
   - Clique em **Start Import**

2. Edite as credenciais de conexao em `backend/config/db.js`, trocando a senha do MySQL pela sua:

```js
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SUA_SENHA_AQUI',
  database: 'petshop'
});
```

## Backend

```bash
cd backend
npm install
npm start
```

O servidor inicia na porta `3001`.

## Frontend

```bash
cd frontend
npm install
npm run start
```

O frontend inicia na porta `3565` (Vite). Acesse `http://localhost:3565`.

## Estrutura

```
backend/
  server.js            - entrada do servidor Express
  config/db.js         - conexao com MySQL
  controllers/         - logica dos endpoints
  routes/              - definicao de rotas
  utils/               - funcoes de validacao

frontend/
  src/
    pages/             - paginas (lista, formulario, detalhes)
    components/        - componentes reutilizaveis (tabela, toast, paginacao, etc)
    services/api.jsx   - configuracao do axios

database.sql           - script de criacao do banco e dados iniciais
```
