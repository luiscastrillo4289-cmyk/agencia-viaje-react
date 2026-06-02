function Promo() {
  return (
    <section className="promo-section">
      <div className="container">
        <div className="promo-grid">
          <div className="promo-image">
            <img src="/img/promo.jpg" alt="Promoción" />
          </div>

          <div className="promo-content">
            <div>
              <h2>No te pierdas las futuras ofertas de vuelos.</h2>

              <p>Únete hoy mismo a nuestra lista de correo.</p>

              <a href="#paquetes" className="btn">
                Elegir paquete
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promo