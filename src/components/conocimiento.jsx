import React, { useEffect } from 'react';      /* ✅ un solo import */
import {
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaPython,
  FaReact, FaGitAlt, FaLaravel
} from 'react-icons/fa';
import { SiMysql, SiBootstrap } from 'react-icons/si';
import '../assets/styles/Conocimientos.css';

const skills = [
  { id: 1, nombre: 'HTML', icono: <FaHtml5 />, nivel: 'Avanzado' },
  { id: 2,  nombre: 'CSS',       icono: <FaCss3Alt /> },
  { id: 3,  nombre: 'JavaScript',icono: <FaJs /> },
  { id: 4,  nombre: 'PHP',       icono: <FaPhp /> },
  { id: 5,  nombre: 'MySQL',     icono: <SiMysql /> },
  { id: 6,  nombre: 'Python',    icono: <FaPython /> },
  { id: 7,  nombre: 'Laravel',   icono: <FaLaravel /> },
  { id: 8,  nombre: 'React',     icono: <FaReact /> },
  { id: 9,  nombre: 'Bootstrap', icono: <SiBootstrap /> },
  { id: 10, nombre: 'Git',       icono: <FaGitAlt /> }
];

const Conocimientos = () => {
  /* ───────────── Intersection Observer ───────────── */
  useEffect(() => {
    const ob = new IntersectionObserver(
      entries => entries.forEach(ent => {
        if (ent.isIntersecting) {
          ent.target.classList.add('show');
          ob.unobserve(ent.target);
        }
      }),
      { threshold: 0.8}
    );

    document
      .querySelectorAll('.skill-card')
      .forEach(card => ob.observe(card));

    return () => ob.disconnect();
  }, []);

  return (
    <section id="conocimientos" className="conoc-section">
      <h2>Mis Conocimientos</h2>
      <p className="intro">
        Estas son las tecnologías y herramientas que manejo:
      </p>

      <div className="skills-grid">
        {skills.map(({ id, nombre, icono }) => (
          <div className="skill-card" key={id}> 
            {icono}


            <span>{nombre}</span>
          </div>
        ))}
      </div>
      

    </section>
  );
};

export default Conocimientos;
