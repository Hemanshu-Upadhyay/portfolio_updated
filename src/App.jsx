import React, { useState, useEffect } from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Experience from "./sections/Experience.jsx";
import Footer from "./sections/Footer.jsx";
import Projects from "./sections/Projects.jsx";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showWarning, setShowWarning] = useState(true);

  // Check if the device is mobile
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // Handle "Visit Anyway" button click
  const handleVisitAnyway = () => {
    setShowWarning(false);
  };

  useEffect(() => {
    checkIfMobile(); // Check on mount
    window.addEventListener("resize", checkIfMobile);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  if (isMobile && showWarning) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white text-center p-4">
        <div>
          <h1 className="text-2xl font-bold">
            This portfolio is made to be experienced in a desktop/tablet.
          </h1>
          <p className="mt-4 text-lg">
            It contains 3D elements and might have performance issues on mobile
            devices. For the best experience, use it on a desktop or tablet.
          </p>
          <button
            onClick={handleVisitAnyway}
            className="mt-6 bg-blue-900 text-white px-6 py-2 rounded-md font-bold hover:bg-blue-600"
          >
            Visit Anyway
          </button>
        </div>
      </div>
    );
  }

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
