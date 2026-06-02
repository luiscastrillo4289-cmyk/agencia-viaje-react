const express = require('express')

const router = express.Router()

const {
  obtenerPaquetes
} = require('../controllers/paqueteController')

router.get('/', obtenerPaquetes)

module.exports = router