const Paquete = require('../models/Paquete')

async function obtenerPaquetes(req, res) {
  try {
    const paquetes = await Paquete.find()

    res.json(paquetes)

  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al obtener paquetes'
    })
  }
}

module.exports = {
  obtenerPaquetes
}