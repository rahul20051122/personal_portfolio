import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Background Gradient Mesh Wrapper */}
      <div className="bg-gradient-wrapper">
        <div className="bg-gradient-orb bg-gradient-orb-1"></div>
        <div className="bg-gradient-orb bg-gradient-orb-2"></div>
        <div className="bg-gradient-orb bg-gradient-orb-3"></div>
      </div>
      
      {/* Background Grid Particles Overlay */}
      <div className="bg-grid-overlay"></div>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Layout */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </>
  );
}

export default App;
