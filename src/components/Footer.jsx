import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaGoogle} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="redes-sociales animar-entrada">
        <a href="https://github.com/ADRIANCHO207" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icono-social" />
        </a>
        <a href="https://www.linkedin.com/in/adrian-camargo-rodriguez-6bb23b364/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icono-social" />
        </a>
        <a href="https://instagram.com/adriancho207" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icono-social" />
        </a>
        <a href="https://wa.me/573108571293" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icono-social" />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adriancamargo69@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaGoogle className="icono-social" />
        </a>
        </div>

      <p className="derechos">© 2025 Cesar Adrian Camargo. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
