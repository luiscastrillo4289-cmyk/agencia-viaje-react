const express = require('express')
const cors = require('cors')

const conectarDB = require('./config/db')

const authRoutes = require('./routes/authRoutes')
const paqueteRoutes = require('./routes/paqueteRoutes')

const app = express()

conectarDB()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    mensaje: 'API funcionando correctamente'
  })
})

app.use('/api/auth', authRoutes)
app.use('/api/paquetes', paqueteRoutes)

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})