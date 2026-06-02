import { useState } from 'react'
import Carrito from './Carrito'
import LoginModal from './LoginModal'

function Header({ carrito, setCarrito, abrirDashboard }) {
  const [mostrarCarrito, setMostrarCarrito] = useState(false)
  const [mostrarLogin, setMostrarLogin] = useState(false)

  const totalProductos = carrito.reduce((total, producto) => {
    return total + producto.cantidad
  }, 0)

  function toggleCarrito() {
    setMostrarCarrito(!mostrarCarrito)
  }

  function abrirLogin() {
    setMostrarLogin(true)
  }

  function cerrarLogin() {
    setMostrarLogin(false)
  }

  return (
    <>
      <header className="site-header">
        <div className="container navbar">
          <a href="#inicio" className="logo">
            American Airlines
          </a>

          <nav className="nav-contenedor">
            <ul className="menu">
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#paquetes">Paquetes</a></li>
              <li><a href="#clientes">Clientes Satisfechos</a></li>
            </ul>

            <button
              type="button"
              className="btn-login"
              onClick={abrirLogin}
            >
              Iniciar Sesión
            </button>

            <div className="carrito-wrapper">
              <div
                className="carrito"
                onClick={toggleCarrito}
              >
                🛒 <span className="carrito-count">{totalProductos}</span>
              </div>

              {mostrarCarrito && (
                <Carrito
                  carrito={carrito}
                  setCarrito={setCarrito}
                />
              )}
            </div>
          </nav>
        </div>
      </header>

      {mostrarLogin && (
        <LoginModal
          cerrarLogin={cerrarLogin}
          abrirDashboard={abrirDashboard}
        />
      )}
    </>
  )
}

export default Header