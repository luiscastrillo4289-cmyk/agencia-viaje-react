const mongoose = require('mongoose')
const Paquete = require('../models/Paquete')

async function crearPaquetes() {
  try {
    await mongoose.connect(
         'mongodb://luiscastrillo4289_db_user:OXE6sopJJZb4mI1w@ac-0rhqj0w-shard-00-00.wa2vseq.mongodb.net:27017,ac-0rhqj0w-shard-00-01.wa2vseq.mongodb.net:27017,ac-0rhqj0w-shard-00-02.wa2vseq.mongodb.net:27017/agencia_viajes?ssl=true&replicaSet=atlas-bycyxw-shard-0&authSource=admin&retryWrites=true&w=majority'
       )

    await Paquete.create([
      {
        destino: 'Europa',
        titulo: 'Paquete Europa',
        precio: 950,
        estado: 'Activo'
      },
      {
        destino: 'Asia',
        titulo: 'Paquete Asia',
        precio: 800,
        estado: 'Activo'
      },
      {
        destino: 'América',
        titulo: 'Paquete América',
        precio: 650,
        estado: 'Activo'
      }
    ])

    console.log('Paquetes creados correctamente')
    process.exit()

  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

crearPaquetes()