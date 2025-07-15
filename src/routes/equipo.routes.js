const express = require('express');
const router = express.Router();
const equipo = require('../controllers/equipo.controllers');

router.get('/equipos', equipo.getEquipos);

router.post('/equipos', equipo.addEquipo);

router.put('/equipos/:id', equipo.updateEquipo);


router.delete('/equipos/:id', equipo.deleteEquipo);

module.exports = router;
