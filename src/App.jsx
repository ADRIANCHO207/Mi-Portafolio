import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contacto from './components/contacto'
import Inicio from './components/Inicio';
import Sobremi from './components/sobremi';
import Proyectos from './components/proyectos';
import Conocimientos from './components/conocimiento';
import Educacion from './components/educacion';

function App() {
  return (
    <div>
      <Navbar />

      <Inicio />

      <Sobremi />

      <Proyectos />

      <Conocimientos />

      <Educacion />

      <Contacto />

      <Footer />
    </div>
  )
}

export default App
