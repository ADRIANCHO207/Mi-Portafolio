import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../assets/styles/proyectos.css';

const proyectos = [
  {
    id: 1,
    titulo: 'Flota Vehicular',
    desc: 'Sistema integral que gestiona mantenimientos, documentos y recordatorios de vehículos personales.',
    img: 'src/assets/index_fleet.jpg',    // Coloca la ruta desde /public o /assets
    codigo: 'https://github.com/ADRIANCHO207/Proyecto_Final'
  },
  {
    id: 2,
    titulo: 'Creador de Torneos de Baloncesto',
    desc: 'Plataforma web que permite crear y administrar torneos de baloncesto, aplicando licencias y controlando equipos y jugadores.',
    img: 'src/assets/index_torneos.jpg',
    codigo: 'https://github.com/ADRIANCHO207/Cesar-Camargo-licencias'
  },
  // Agrega más proyectos con {id,titulo,desc,img,codigo}
];

const Proyectos = () => (
  <section id="proyectos" className="proyectos-section">
    <h2>Mis Proyectos</h2>
    <p className="intro">Estos son algunos de los proyectos que he realizado:</p>

    <div className="cards-grid">
      {proyectos.map(({ id, titulo, desc, img, codigo }) => (
        <div className="card" key={id}>
          <img src={img} alt={titulo} />
          <h3>{titulo}</h3>
          <p className="descripcion">{desc}</p>

          <a href={codigo} className="btn-git" target="_blank" rel="noreferrer">
            <FaGithub />
            Código
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Proyectos;
