import React from 'react';
import "../assets/styles/sobremi.css";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython, FaReact, FaLaravel } from 'react-icons/fa';
import { SiMysql, SiBootstrap } from 'react-icons/si';


const SobreMi = () => {
  return (
    <section id="sobre-mi" className="sobre-mi fade-in">
      <h2>Sobre mí</h2>
      <p>
        Soy un joven colombiano de 18 años, Actualmente residente en Ibagué, aprendiz del <strong>Tecnologo en Análisis y Desarrollo de Software</strong>. Me apasiona el mundo del desarrollo web y me motiva el aprendizaje constante. Me considero una persona sociable, proactiva y con facilidad para adaptarme a nuevos equipos y entornos.
      </p>
      <p>
        Tengo conocimientos en <strong>HTML, CSS, JavaScript, PHP, MySQL, Python y Bootstrap</strong>, además de una base en frameworks como <strong>Laravel y React</strong>. Disfruto tanto del diseño frontend como de la lógica backend, lo que me impulsa a crecer como desarrollador <strong>full-stack</strong>.
      </p>
      <p>
        Mi objetivo es integrarme a un entorno profesional donde pueda aplicar mis conocimientos, seguir aprendiendo y aportar soluciones útiles con dedicación, energía y buena actitud.
      </p>
      <div className="skills-row">
        <div className="skill-badge"><FaHtml5 /> </div>
        <div className="skill-badge"><FaCss3Alt /> </div>
        <div className="skill-badge"><FaJs /> </div>
        <div className="skill-badge"><FaPhp /> </div>
        <div className="skill-badge"><SiMysql /> </div>
        <div className="skill-badge"><FaPython /> </div>
        <div className="skill-badge"><FaLaravel /> </div>
        <div className="skill-badge"><FaReact /> </div>
        <div className="skill-badge"><SiBootstrap /> </div>
      </div>
      <a href="src/assets/CV-AdrianCamargo.pdf" className="btn-cv" target="_blank" rel="noopener noreferrer">
        Descargar CV
      </a>
      
    </section>
  )
}

export default SobreMi
