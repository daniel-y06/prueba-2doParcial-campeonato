const express = require('express')
const app = express()
const port = 3000

// Conexión a la base de datos
require('./src/database');

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./src/routes/server.routes'));

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});