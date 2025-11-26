import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Új komponens a Google Naptár beágyazásához
const AppointmentBooking = () => {
    const googleCalendarEmbed = `
        <div class="container mx-auto px-4 py-16">
            <h2 class="text-4xl font-bold mb-8 text-primary dark:text-primary-light text-center">
                Foglaljon időpontot AI Marketing Konzultációra
            </h2>
            <div class="shadow-2xl rounded-lg overflow-hidden border border-gray-200 dark:border-slate-800 p-2">
                <iframe 
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0RGkyqxojc4_mfGlxvWryI7gznNbZJgLg1toVl9X5P9De7K4DTd29swNPKi1kWT5XSajRdUagL?gv=true" 
                    style="border: 0" 
                    width="100%" 
                    height="700" 
                    frameborder="0"
                ></iframe>
                </div>
        </div>
    `;

    // Reactben iframe beágyazáshoz a dangerouslySetInnerHTML használata szükséges
    return (
        <section id="booking" className="py-12 md:py-20 bg-secondary-light dark:bg-slate-900 transition-colors duration-300">
            <div dangerouslySetInnerHTML={{ __html: googleCalendarEmbed }} />
        </section>
    );
};


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
        {/* IDE ÉPÍTETTÜK BE AZ ÚJ, MŰKÖDŐ NAPTÁR SZEKCIÓT */}
        <AppointmentBooking />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
