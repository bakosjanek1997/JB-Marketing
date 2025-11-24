import React from 'react';
import { FileText } from 'lucide-react';

const Pricing: React.FC = () => {
  const handleScrollToBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('booking-calendar') || document.getElementById('contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 scroll-mt-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
       {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10 pointer-events-none overflow-hidden">
             <div className="absolute right-0 top-0 w-96 h-96 bg-primary rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute left-0 bottom-0 w-64 h-64 bg-cyan-400 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-10 md:p-16 shadow-2xl border border-slate-100 dark:border-slate-800 text-center hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] transition-shadow duration-500">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6 transform transition-transform duration-500 hover:rotate-12 hover:scale-110">
                <FileText className="h-10 w-10 text-primary" />
            </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Egyedi Ajánlat
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Személyre szabott árajánlatot készítek a vállalkozás igényei alapján.
          </p>
          <a 
            href="#booking-calendar"
            onClick={handleScrollToBooking}
            className="inline-block bg-primary hover:bg-primary-dark text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg shadow-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] active:scale-95 hover:-translate-y-1"
          >
            Ingyenes konzultáció kérése
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;