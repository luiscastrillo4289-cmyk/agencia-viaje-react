import { paquetes } from '../data/paquetes'

function Paquetes({ carrito, setCarrito }) {

  console.log(carrito)

 function agregarCarrito(paquete) {

  const existe = carrito.find(
    producto => producto.id === paquete.id
  )

  if (existe) {

    const carritoActualizado = carrito.map(producto => {
      if (producto.id === paquete.id) {
        return {
          ...producto,
          cantidad: producto.cantidad + 1
        }
      }

      return producto
    })

    setCarrito(carritoActualizado)

  } else {

    setCarrito([
      ...carrito,
      {
        ...paquete,
        cantidad: 1
      }
    ])

  }

}

  return (
    <section className="paquetes-section" id="paquetes">
      <div className="container">
        <h2 className="section-title">
          Paquetes a los siguientes continentes
        </h2>

        <div className="destinos-grid">
          {paquetes.map((paquete) => (
            <div className="destino-card Producto" key={paquete.id}>
              <img src={paquete.imagen} alt={paquete.alt} />

              <div className="overlay">
                <h3>{paquete.destino}</h3>
              </div>

              <div className="destino-info">
                <h5>{paquete.titulo}</h5>

                <p>{paquete.precio}</p>

                <button
                  className="btn agregar-carrito"
                  onClick={() => agregarCarrito(paquete)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Paquetes