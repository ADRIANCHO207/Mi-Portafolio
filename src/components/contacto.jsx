import React, { useState } from 'react'
import { FaRegCopy, FaCheck, FaEnvelope } from 'react-icons/fa'

const Contacto = () => {
  const [copiado, setCopiado] = useState(false)
  const correo = 'adriancamargo69@gmail.com'

  const copiarCorreo = () => {
    navigator.clipboard.writeText(correo)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 2000)
  }

  const abrirCorreo = () => {
    const asunto = "Hola, quiero contactarte"
    const cuerpo = "Hola, estoy interesado en tu trabajo y me gustaría hablar contigo."
    window.location.href = `mailto:${correo}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
  }

  return (
    <section id="contacto" className="fade-in">
      <h1>Contactame</h1>
      <p>¿Te gustaría escribirme? Copia o Redactame un correo:</p>

      <div className="contenedor-copia">
        <input type="text" value={correo} readOnly />
        <button onClick={copiarCorreo} title="Copiar correo">
          {copiado ? <FaCheck size={24} color="limegreen" /> : <FaRegCopy size={24} />}
        </button>
        
      </div>

      {copiado && <p className="mensaje-copiado">¡Correo copiado al portapapeles!</p>}


      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adriancamargo69@gmail.com" className="enviar-correo" target="_blank" rel="noopener noreferrer">
        Redactar correoS
      </a>
    </section>
  )
}

export default Contacto
