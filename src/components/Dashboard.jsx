import { useEffect, useState } from 'react'

function Dashboard({ cerrarDashboard }) {
  const [paquetes, setPaquetes] = useState([])

  useEffect(() => {
    async function obtenerPaquetes() {
      const respuesta = await fetch('http://localhost:5000/api/paquetes')
      const datos = await respuesta.json()

      setPaquetes(datos)
    }

    obtenerPaquetes()
  }, [])

  return (
    <section className="dashboard activo" id="dashboard">
      <aside className="sidebar">
        <h2 className="sidebar-logo">Dashboard</h2>

        <ul>
          <li className="activo">Inicio</li>
          <li>Paquetes</li>
          <li>Clientes</li>
          <li>Estadísticas</li>
          <li onClick={cerrarDashboard}>Cerrar sesión</li>
        </ul>
      </aside>

      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1 id="titulo-dashboard">Panel Administrativo</h1>
          <p>Bienvenido nuevamente</p>
        </div>

        <div className="dashboard-cards">
          <div className="card-dashboard">
            <h3>Clientes</h3>
            <span>120</span>
          </div>

          <div className="card-dashboard">
            <h3>Paquetes vendidos</h3>
            <span>89</span>
          </div>

          <div className="card-dashboard">
            <h3>Ingresos</h3>
            <span>$12.500</span>
          </div>
        </div>

        <div className="tabla-container">
          <div className="tabla-header">
            <h2>Gestión de paquetes</h2>

            <button className="btn-dashboard">
              Crear paquete
            </button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Destino</th>
                <th>Precio</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {paquetes.map((paquete) => (
                <tr key={paquete._id}>
                  <td>{paquete.destino}</td>
                  <td>${paquete.precio}</td>
                  <td>{paquete.estado}</td>
                  <td className="acciones">
                    <button>Editar</button>
                    <button>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Dashboard