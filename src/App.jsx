import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyMe from './components/WhyMe';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <Router>
      <div className="relative">
        <ParticlesBackground />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <WhyMe />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;