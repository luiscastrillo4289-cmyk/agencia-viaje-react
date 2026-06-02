import { useState } from 'react'

function LoginModal({ cerrarLogin, abrirDashboard }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mensaje, setMensaje] = useState('')

  async function iniciarSesion(e) {
    e.preventDefault()

    const respuesta = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const datos = await respuesta.json()

    if (datos.ok) {
      cerrarLogin()
      abrirDashboard()
    } else {
      setMensaje(datos.mensaje)
    }
  }

  return (
    <div className="modal-login activo">
      <form className="login-box" onSubmit={iniciarSesion}>
        <span
          className="cerrar-login"
          onClick={cerrarLogin}
        >
          X
        </span>

        <h2>Iniciar Sesión</h2>

        <p>Accede al panel administrativo o cliente</p>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {mensaje && (
          <p style={{ color: 'red', fontWeight: 'bold' }}>
            {mensaje}
          </p>
        )}

        <button
          type="submit"
          className="btn-dashboard"
        >
          Entrar como administrador
        </button>

        <button
          type="submit"
          className="btn-dashboard cliente-btn"
        >
          Entrar como cliente
        </button>
      </form>
    </div>
  )
}

export default LoginModal