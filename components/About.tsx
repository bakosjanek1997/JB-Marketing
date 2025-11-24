import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 scroll-mt-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Miért a JB Marketing?
        </h2>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
          A JB Marketingnél nem hiszünk a találgatásban. Kizárólag adatokra és a legújabb AI technológiákra támaszkodva építünk rendszereket, amelyek mérhetően növelik partnereink profitját. Mi levesszük a technológiai terhet a válladról, hogy te az üzletépítésre fókuszálhass.
        </p>
      </div>
    </section>
  );
};

export default About;