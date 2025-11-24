import React from 'react';
import { Translation } from '../types';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  t: Translation['footer'];
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-primary dark:from-primary dark:to-cyan-300 cursor-default">
              JB Marketing
            </span>
            <p className="mt-4 text-slate-500 text-sm">
              Empowering businesses with AI-driven marketing solutions for the future.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="inline-block hover:text-primary transition-all duration-300 hover:translate-x-2">Google Ads</a></li>
              <li><a href="#" className="inline-block hover:text-primary transition-all duration-300 hover:translate-x-2">Meta Ads</a></li>
              <li><a href="#" className="inline-block hover:text-primary transition-all duration-300 hover:translate-x-2">Web Development</a></li>
              <li><a href="#" className="inline-block hover:text-primary transition-all duration-300 hover:translate-x-2">Automation</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
             <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#about" className="inline-block hover:text-primary transition-all duration-300 hover:translate-x-2">About Us</a></li>
              <li><a href="#cases" className="inline-block hover:text-primary transition-all duration-300 hover:translate-x-2">Case Studies</a></li>
              <li><a href="#contact" className="inline-block hover:text-primary transition-all duration-300 hover:translate-x-2">Contact</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-slate-900 dark:text-white mb-4">Connect</h4>
             <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-6"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-slate-400 hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-6"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-slate-400 hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-6"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="text-slate-400 hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-6"><Twitter className="h-5 w-5" /></a>
             </div>
          </div>

        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} JB Marketing. {t.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors hover:underline">{t.privacy}</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors hover:underline">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;