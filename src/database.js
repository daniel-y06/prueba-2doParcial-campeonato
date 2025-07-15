const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/campeonato', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado a MongoDB: campeonato'))
.catch(err => console.error('Error de conexión a MongoDB:', err));

module.exports = mongoose;
