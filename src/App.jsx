import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project"
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="md:px-20">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />        
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
