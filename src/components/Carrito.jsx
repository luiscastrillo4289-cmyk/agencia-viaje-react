function Carrito({ carrito, setCarrito }) {

  const total = carrito.reduce((acumulado, producto) => {
    return acumulado + (producto.precio * producto.cantidad)
  }, 0)

  function eliminarProducto(id) {

    const carritoActualizado = carrito.filter(
      producto => producto.id !== id
    )

    setCarrito(carritoActualizado)
  }

  return (
    <div className="carrito-dropdown activo">

      <h4>Mi carrito</h4>

      {carrito.length === 0 ? (

        <p>No has agregado paquetes todavía.</p>

      ) : (

        <>
          {carrito.map(producto => (

            <div
              className="item-carrito"
              key={producto.id}
            >

              <img
                src={producto.imagen}
                alt={producto.alt}
              />

              <div className="item-carrito-info">

                <h5>{producto.titulo}</h5>

                <p>
                  Cantidad: {producto.cantidad}
                </p>

                <p>
                  Precio: ${producto.precio}
                </p>

              </div>

              <div className="item-carrito-acciones">

                <span>
                  ${producto.precio * producto.cantidad}
                </span>

                <button
                  className="eliminar"
                  onClick={() => eliminarProducto(producto.id)}
                >
                  X
                </button>

              </div>

            </div>

          ))}

          <p id="total-carrito">
            Total: ${total}
          </p>

        </>
      )}

    </div>
  )
}

export default Carrito