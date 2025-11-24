import React from 'react';
import AiSphere from './AiSphere';
import { Translation } from '../types';
import { ArrowRight, Calendar } from 'lucide-react';

interface HeroProps {
  t: Translation['hero'];
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('booking-calendar') || document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <AiSphere />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
           <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6 border border-primary/20 backdrop-blur-sm hover:bg-primary/20 transition-colors cursor-default">
             JB Marketing AI Solutions
           </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 drop-shadow-sm">
            {t.title}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300 mb-10">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#booking-calendar"
              onClick={handleScrollToBooking}
              className="group flex items-center justify-center bg-primary hover:bg-primary-dark text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg shadow-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(14,165,233,0.6)] active:scale-95"
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:animate-pulse group-hover:rotate-12 transition-transform" />
              {t.ctaPrimary}
            </a>
            <a
              href="#booking-calendar"
              onClick={handleScrollToBooking}
              className="group flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              {t.ctaSecondary}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent z-0"></div>
    </section>
  );
};

export default Hero;
