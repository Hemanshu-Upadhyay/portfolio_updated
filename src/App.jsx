import React from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Experience from "./sections/Experience.jsx";
import Footer from "./sections/Footer.jsx";
import Projects from "./sections/Projects.jsx";

const App = () => {
  return (
    <main className="mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};
export default App;
