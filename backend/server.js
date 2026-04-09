const express = require('express');
const cors = require('cors');
const routes = require('./routes/servicoRoutes');

const app = express();
const PORT = 3001;

app.use(cors({ origin: 'http://localhost:3565' }));
app.use(express.json());

app.use('/api/servicos', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
