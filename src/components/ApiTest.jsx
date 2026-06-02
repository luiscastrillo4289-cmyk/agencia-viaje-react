import { useState } from 'react'

function ApiTest() {

  const [mensaje, setMensaje] = useState('')

  async function probarAPI() {

    const respuesta = await fetch(
      'http://localhost:5000'
    )

    const datos = await respuesta.json()

    setMensaje(datos.mensaje)
  }

  return (
    <div
      style={{
        padding: '20px',
        textAlign: 'center'
      }}
    >
      <button
        className="btn"
        onClick={probarAPI}
      >
        Probar API
      </button>

      <p
        style={{
          marginTop: '20px',
          fontWeight: 'bold'
        }}
      >
        {mensaje}
      </p>
    </div>
  )
}

export default ApiTest