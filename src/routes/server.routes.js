const express = require('express');
const router = express.Router();

const equipoRoutes = require('./equipo.routes');
router.use('/api', equipoRoutes);

router.use((req, res) => {
  res.status(404).send('No se encuentra la página');
});

module.exports = router;