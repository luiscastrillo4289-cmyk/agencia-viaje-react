const User = require('../models/User')

async function login(req, res) {
  const { email, password } = req.body

  try {
    const usuario = await User.findOne({ email })

    if (!usuario) {
      return res.status(401).json({
        ok: false,
        mensaje: 'Correo o contraseña incorrectos'
      })
    }

    if (usuario.password !== password) {
      return res.status(401).json({
        ok: false,
        mensaje: 'Correo o contraseña incorrectos'
      })
    }

    return res.json({
      ok: true,
      mensaje: 'Login correcto',
      usuario: {
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol
      }
    })

  } catch (error) {
    return res.status(500).json({
      ok: false,
      mensaje: 'Error en el servidor'
    })
  }
}

module.exports = {
  login
}