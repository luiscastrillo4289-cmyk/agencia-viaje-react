const mongoose = require('mongoose')

const conectarDB = async () => {
  try {

    await mongoose.connect(
      'mongodb://luiscastrillo4289_db_user:OXE6sopJJZb4mI1w@ac-0rhqj0w-shard-00-00.wa2vseq.mongodb.net:27017,ac-0rhqj0w-shard-00-01.wa2vseq.mongodb.net:27017,ac-0rhqj0w-shard-00-02.wa2vseq.mongodb.net:27017/agencia_viajes?ssl=true&replicaSet=atlas-bycyxw-shard-0&authSource=admin&retryWrites=true&w=majority'
    )

    console.log('MongoDB conectado correctamente')

  } catch (error) {

    console.log(error)
    process.exit(1)

  }
}

module.exports = conectarDB