function Clientes() {
  return (
    <section className="clientes-section" id="clientes">
      <div className="container">
        <h2 className="section-title">Clientes satisfechos</h2>

        <p className="section-subtitle">
          Estas son algunas experiencias de viajeros que confiaron en nosotros.
        </p>

        <div className="testimonios-grid">
          <article className="testimonio">
            <p>“La atención fue excelente y el paquete estuvo increíble.”</p>
            <h4>María González</h4>
            <span>Viaje a Europa</span>
          </article>

          <article className="testimonio">
            <p>“Una experiencia increíble y muy buen precio.”</p>
            <h4>Andrés Ramírez</h4>
            <span>Viaje a Asia</span>
          </article>

          <article className="testimonio">
            <p>“Muy recomendados para viajes internacionales.”</p>
            <h4>Laura Martínez</h4>
            <span>Viaje a América</span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Clientes