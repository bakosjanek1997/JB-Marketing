import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact'; // Ez a fájl már a jó naptárat tartalmazza
import Footer from './components/Footer';

// Törölje az AppointmentBooking függvényt, ha korábban beillesztette ide!

function App() {
  const [isDark, setIsDark] = useState(false);

  // Initialize theme based on preference
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 font-sans">
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
      />
      
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Pricing />
        <About />
        {/* TÖRÖLJÖN MINDEN EGYÉB NAPTÁR HÍVÁST, 
            CSAK A KÖVETKEZŐ MARADJON: */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
