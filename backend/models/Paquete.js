const mongoose = require('mongoose')

const paqueteSchema = new mongoose.Schema({
  destino: {
    type: String,
    required: true
  },

  titulo: {
    type: String,
    required: true
  },

  precio: {
    type: Number,
    required: true
  },

  estado: {
    type: String,
    default: 'Activo'
  }

}, {
  timestamps: true
})

const Paquete = mongoose.model('Paquete', paqueteSchema)

module.exports = Paquete