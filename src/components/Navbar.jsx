import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [activo, setActivo] = useState('inicio');

  const manejarScroll = () => {
    const secciones = ['inicio', 'sobre-mi', 'proyectos', 'conocimientos', 'educacion', 'contacto'];
    for (let id of secciones) {
      const seccion = document.getElementById(id);
      if (seccion) {
        const top = seccion.offsetTop - 100;
        if (window.scrollY >= top) setActivo(id);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', manejarScroll);
    return () => window.removeEventListener('scroll', manejarScroll);
  }, []);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="navbar-container">
      <div className="logo-nombre">
        <img src="src/assets/logo.png" alt="Logo" className="logo-img" />
        <h1 className="nombre-usuario">Cesar Adrian Camargo</h1>
      </div>


      <nav className={`nav-links ${menuAbierto ? 'activo' : ''}`}>
        {[
          { id: 'inicio', nombre: 'Inicio' },
          { id: 'sobre-mi', nombre: 'Sobre mí' },
          { id: 'proyectos', nombre: 'Proyectos' },
          { id: 'conocimientos', nombre: 'Conocimientos' },
          { id: 'educacion', nombre: 'Educación' },
          { id: 'contacto', nombre: 'Contacto' }
        ].map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={cerrarMenu}
            className={activo === link.id ? 'activo' : ''}
          >
            {link.nombre}
          </a>
        ))}
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuAbierto ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </header>
  );
};

export default Navbar;
