import React, { useState, useEffect } from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Clients from "./sections/Clients.jsx";
import Contact from "./sections/Contact.jsx";
import Experience from "./sections/Experience.jsx";
import Footer from "./sections/Footer.jsx";
import Projects from "./sections/Projects.jsx";



const generateDeviceInfo = () => {
  return [
    `DEVICE: ${
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? "MOBILE"
        : "UNKNOWN"
    }`,
    `OS: ${navigator.platform}`,
    `BROWSER: ${
      navigator.userAgent.match(/(Chrome|Firefox|Safari|Edge|Opera)/)?.[0] ||
      "UNKNOWN"
    }`,
    `SCREEN: ${window.screen.width}x${window.screen.height}`,
    `PIXEL RATIO: ${window.devicePixelRatio}x`,
    `LANGUAGE: ${navigator.language}`,
  ];
};

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showRedirect, setShowRedirect] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState([]);

  const checkIfMobile = () => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);

    if (mobile) {
      setDeviceInfo(generateDeviceInfo());
      setShowRedirect(true);

      setTimeout(() => {
        window.location.href = "https://mobile.hemanshuuu.cloud/";
      }, 1500);
    }
  };

  useEffect(() => {
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  if (isMobile && showRedirect) {
    return (
      <div className="fixed inset-0 bg-black text-green-400 overflow-hidden flex flex-col items-center justify-center p-4">
        
        <div className="absolute top-8 w-full flex flex-col items-center z-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 border-4 border-t-green-500 border-r-green-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
            <span className="text-2xl font-mono text-green-300 animate-pulse">
              REDIRECTING
            </span>
          </div>
        </div>

        <div className="relative z-10 bg-black/80 p-6 rounded-xl border border-green-800 max-w-md w-full">
          <h1 className="text-3xl font-mono font-bold text-green-500 mb-4 text-center">
            MOBILE DEVICE DETECTED
          </h1>

          <div className="space-y-2 font-mono text-green-300">
            {deviceInfo.map((info, index) => (
              <div
                key={index}
                className="text-lg opacity-80 transform transition-all duration-500"
                style={{
                  transform: `translateX(${Math.random() * 20 - 10}px)`,
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                {info}
              </div>
            ))}
          </div>
        </div>

        {/* Matrix Background Lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute matrix-line text-xs opacity-20 text-green-500"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {Math.random().toString(36).substring(2, 15)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop render remains the same
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