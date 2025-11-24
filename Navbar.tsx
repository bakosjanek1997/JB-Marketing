import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { Language, Translation } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  isDark: boolean;
  toggleTheme: () => void;
  t: Translation['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, isDark, toggleTheme, t }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: t.home, href: '#hero' },
    { label: t.services, href: '#services' },
    { label: t.cases, href: '#cases' },
    { label: t.pricing, href: '#pricing' },
    { label: t.contact, href: '#contact' },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-primary dark:from-primary dark:to-cyan-300 group-hover:opacity-80 transition-opacity">
              JB Marketing
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="relative group text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Controls (Lang & Theme) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setLang(lang === 'HU' ? 'EN' : 'HU')}
              className="group flex items-center text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            >
              <Globe className="h-5 w-5 mr-1 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm font-semibold">{lang}</span>
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:rotate-12 hover:scale-110"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <a
              href="#booking-calendar"
              onClick={(e) => handleScrollToSection(e, '#booking-calendar')}
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] active:scale-95"
            >
              {t.book}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-primary focus:outline-none transition-transform active:scale-90"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:translate-x-2"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between px-3 py-4 border-t border-slate-200 dark:border-slate-800 mt-4">
              <button
                onClick={() => {
                   setLang(lang === 'HU' ? 'EN' : 'HU');
                   setIsOpen(false);
                }}
                className="flex items-center text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              >
                <Globe className="h-5 w-5 mr-2" />
                <span className="font-bold">{lang}</span>
              </button>
              <button
                onClick={() => {
                  toggleTheme();
                  setIsOpen(false);
                }}
                className="flex items-center text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
              >
                 {isDark ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
                 <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
             <a
              href="#booking-calendar"
              onClick={(e) => handleScrollToSection(e, '#booking-calendar')}
              className="block w-full text-center bg-primary text-white mt-4 px-5 py-3 rounded-md font-bold active:scale-95 transition-transform"
            >
              {t.book}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;