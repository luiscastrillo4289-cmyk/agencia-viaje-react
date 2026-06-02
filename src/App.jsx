import { useState } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Paquetes from './components/Paquetes'
import Promo from './components/Promo'
import Clientes from './components/Clientes'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import ApiTest from './components/ApiTest'

function App() {
  const [carrito, setCarrito] = useState([])
  const [mostrarDashboard, setMostrarDashboard] = useState(false)

  function abrirDashboard() {
    setMostrarDashboard(true)
  }

  function cerrarDashboard() {
    setMostrarDashboard(false)
  }

  return (
    <>
      {mostrarDashboard ? (
        <Dashboard cerrarDashboard={cerrarDashboard} />
      ) : (
        <>
          <Header
            carrito={carrito}
            setCarrito={setCarrito}
            abrirDashboard={abrirDashboard}
          />

          <Hero />
          <ApiTest />
          <Nosotros />

          <Paquetes
            carrito={carrito}
            setCarrito={setCarrito}
          />

          <Promo />
          <Clientes />
          <Footer />
        </>
      )}
    </>
  )
}

export default App