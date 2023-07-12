import './App.scss';
import Navbar from './components/navbar.js';
import HeroSection from './components/heroSection';
import SobreMi from './components/sobreMi';
import Experiencia from './components/experiencia';
import Proyectos from './components/proyectos';
import Articulos from './components/articulos';
import Testimonios from './components/testimonios';
import Contactos from './components/contactos';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SobreMi />
      <Proyectos />
      <Contactos />
      <Footer />
    </div>
  );
}

export default App;
