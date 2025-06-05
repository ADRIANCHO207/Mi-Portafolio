import React from 'react';
import '../assets/styles/Inicio.css';
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGoogle
} from 'react-icons/fa';
import miFoto from '../assets/mi-foto.jpg';


const Inicio = () => {
  return (
    <section id="inicio" className="inicio">
      <div className="contenedor-inicio">
        <div className="foto">
          <img src={miFoto} alt="Mi Foto" className="foto-perfil" />
        </div>
        <div className="info">
          <h1>Cesar Adrian Camargo Rodriguez</h1>
          <h2>Aprendiz SENA</h2>
          <p>Tecnologo en Analisis y Desarrollo de Software</p>
          <p>(Desarrollador Web)</p>

          <div className="datos-contacto">
            <p><FaMapMarkerAlt className="icono" /> Ibagué, Tolima - Colombia</p>
            <p><FaEnvelope className="icono" /> adriancamargo69@gmail.com</p>
            <p><FaPhoneAlt className="icono" /> +57 310 857 1293</p>
          </div>

          <div className="redes">
            <a href="https://github.com/ADRIANCHO207" target="_blank" className='icono2'  rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/adrian-camargo-rodriguez-6bb23b364/" className='icono2' target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://wa.me/573108571293" target="_blank" className='icono2' rel="noreferrer"><FaWhatsapp /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adriancamargo69@gmail.com" target="_blank" className='icono2' rel="noreferrer"><FaGoogle /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
