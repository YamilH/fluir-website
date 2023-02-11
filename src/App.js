import React from 'react';
import Navbar from './componentes/Navbar/Navbar.jsx'
import About from './componentes/About/About.jsx'
import Home from './componentes/Home/Home.jsx'
import Clases from './componentes/Clases/Clases.jsx'
import Skills from './componentes/Skills/Skills.jsx'
import Contact from './componentes/Contact/Contact.jsx'

function App() {
  return (
    <div className="App">

      <Navbar />
      <Home />
      <About />
      <Clases />
      <Skills />
      <Contact />

    </div>
  );
}

export default App;
