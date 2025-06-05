import React, { useState, useEffect } from 'react';
import '../assets/styles/educacion.css';
import colegioImg from '../assets/colegio.jpg';
import senaImg from '../assets/sena.jpg';
import certificadoBachiller from '../assets/certificados/Certificado_bachiller.pdf';
import certificadoTecnico from '../assets/certificados/Certificado_tecnico.pdf';


const educacionData = [
  {
    id: 1,
    institucion: 'Institución Educativa Técnica Instituto Armero',
    titulo: 'Bachiller Académico',
    fecha: '2018 - 2023',
    imagen: colegioImg,
    certificado: certificadoBachiller
  },
  {
    id: 2,
    institucion: 'SENA - Servicio Nacional de Aprendizaje',
    titulo: 'Técnico en Sistemas',
    fecha: '2022 - 2023',
    imagen: senaImg,
    certificado: certificadoTecnico
  },
  {
    id: 3,
    institucion: 'SENA - Servicio Nacional de Aprendizaje',
    titulo: 'Tecnólogo en Análisis y Desarrollo de Software',
    fecha: '2024 - Presente',
    imagen: senaImg,
    certificado_1: '#' // en curso
  }
];

const Educacion = () => {
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % educacionData.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + educacionData.length) % educacionData.length);
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      siguiente();
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(intervalo); // Limpieza del intervalo
  }, []);

  const { institucion, titulo, fecha, imagen, certificado, certificado_1 } = educacionData[index];

  return (
    <section id="educacion" className="educacion-section">
      <h2>Mi Educación</h2>
      <p className="intro">Mi formación académica y técnica:</p>
      <div className="slider">
        <button onClick={anterior} className="flecha">&#8592;</button>
        <div className="carta">
          <img src={imagen} alt={institucion} />
          <h3>{institucion}</h3>
          <p>{titulo}</p>
          <span>{fecha}</span>
          {certificado ? (
          <a
            href={certificado}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-certificado"
          >
            Ver Certificado
          </a>
        ) : (
          <button className="btn-certificado en-curso" disabled>En curso</button>
        )}

        </div>
        <button onClick={siguiente} className="flecha">&#8594;</button>
      </div>
    </section>
  );
};

export default Educacion;
