import React from 'react';
import { Translation } from '../types';

interface AboutProps {
  t: Translation['about'];
}

const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-20 scroll-mt-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          {t.title}
        </h2>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
          {t.content}
        </p>
      </div>
    </section>
  );
};

export default About;
