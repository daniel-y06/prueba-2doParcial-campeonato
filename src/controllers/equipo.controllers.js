const Equipo = require('../models/equipo');


exports.getEquipos = async (req, res) => {
  try {
    const equipos = await Equipo.find();
    res.json(equipos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.addEquipo = async (req, res) => {
  try {
    const { nombre, ciudad, entrenador, fundacion, estadio } = req.body;
    const nuevoEquipo = new Equipo({ nombre, ciudad, entrenador, fundacion, estadio });
    await nuevoEquipo.save();
    res.status(201).json(nuevoEquipo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.updateEquipo = async (req, res) => {
  try {
    const { id } = req.params;
    const equipo = await Equipo.findByIdAndUpdate(id, req.body, { new: true });
    if (!equipo) return res.status(404).json({ error: 'Equipo no encontrado' });
    res.json(equipo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.deleteEquipo = async (req, res) => {
  try {
    const { id } = req.params;
    const equipo = await Equipo.findByIdAndDelete(id);
    if (!equipo) return res.status(404).json({ error: 'Equipo no encontrado' });
    res.json({ mensaje: 'Equipo eliminado' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
