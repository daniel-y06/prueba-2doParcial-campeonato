const mongoose = require('mongoose');

const equipoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  ciudad: { type: String, required: true },
  entrenador: { type: String, required: true },
  fundacion: { type: Number, required: true },
  estadio: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Equipo', equipoSchema);
