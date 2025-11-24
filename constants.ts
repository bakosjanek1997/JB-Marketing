import { Translation } from './types';

export const TRANSLATIONS: Record<'HU' | 'EN', Translation> = {
  HU: {
    nav: {
      home: 'Főoldal',
      services: 'Szolgáltatások',
      cases: 'Esettanulmányok',
      pricing: 'Árak',
      contact: 'Kapcsolat',
      book: 'Időpontfoglalás',
    },
    hero: {
      title: 'AI alapú marketing és automatizáció, amivel a céged több bevételt szerez',
      subtitle: 'Növeld a vállalkozásod profitját célzott hirdetésekkel, okos automatizációkkal és teljesen optimalizált weboldalakkal.',
      ctaPrimary: 'Időpontfoglalás',
      ctaSecondary: 'Ingyenes konzultáció',
    },
    services: {
      title: 'Szolgáltatásaink',
      items: [
        {
          title: 'AI Hirdetéskezelés',
          description: 'Meta és Google Ads kampányok optimalizálása mesterséges intelligenciával a maximális ROI érdekében.',
          icon: 'target',
        },
        {
          title: 'Web & Landing Page',
          description: 'Konverzióra tervezett modern weboldalak, amelyek látogatókból vásárlókat generálnak.',
          icon: 'layout',
        },
        {
          title: 'AI Automatizáció',
          description: 'Teljes workflow automatizálás, CRM integráció és chatbotok a hatékony ügyfélkezelésért.',
          icon: 'bot',
        },
        {
          title: 'Konverzió Optimalizálás',
          description: 'Adatvezérelt A/B tesztelés és analitika a bevételek növelése érdekében.',
          icon: 'trending-up',
        },
      ],
    },
    stats: {
      title: 'Eredmények',
      items: [
        {
          client: 'TechStart Kft.',
          result: '+150% Lead növekedés',
          growth: 150,
          data: [{ name: 'Jan', value: 100 }, { name: 'Feb', value: 120 }, { name: 'Mar', value: 170 }, { name: 'Apr', value: 250 }],
        },
        {
          client: 'GreenHome Webshop',
          result: '3.5x ROAS',
          growth: 350,
          data: [{ name: 'Q1', value: 20 }, { name: 'Q2', value: 35 }, { name: 'Q3', value: 45 }, { name: 'Q4', value: 70 }],
        },
      ],
    },
    pricing: {
      title: 'Egyedi Ajánlat',
      description: 'Személyre szabott árajánlatot készítek a vállalkozás igényei alapján.',
      cta: 'Ingyenes konzultáció kérése',
    },
    about: {
      title: 'Miért a JB Marketing?',
      content: 'A JB Marketingnél nem hiszünk a találgatásban. Kizárólag adatokra és a legújabb AI technológiákra támaszkodva építünk rendszereket, amelyek mérhetően növelik partnereink profitját. Mi levesszük a technológiai terhet a válladról, hogy te az üzletépítésre fókuszálhass.',
    },
    contact: {
      title: 'Készen állsz a növekedésre?',
      subtitle: 'Foglalj időpontot egy ingyenes stratégiai megbeszélésre, és nézzük meg, hogyan segíthetünk.',
      cta: 'Időpontfoglalás',
      alertSuccess: 'Köszönjük! Az időpontot rögzítettük: Október {day}, {time}. Hamarosan felvesszük Önnel a kapcsolatot.',
      alertError: 'Kérlek válassz napot és időpontot!',
    },
    footer: {
      rights: 'Minden jog fenntartva.',
      privacy: 'Adatvédelem',
      terms: 'ÁSZF',
    },
  },
  EN: {
    nav: {
      home: 'Home',
      services: 'Services',
      cases: 'Case Studies',
      pricing: 'Quote',
      contact: 'Contact',
      book: 'Book Now',
    },
    hero: {
      title: 'AI-Driven Marketing & Automation to Boost Your Revenue',
      subtitle: 'Increase your profit with targeted ads, smart automation, and fully optimized websites.',
      ctaPrimary: 'Book Appointment',
      ctaSecondary: 'Free Consultation',
    },
    services: {
      title: 'Our Services',
      items: [
        {
          title: 'AI Ad Management',
          description: 'Optimizing Meta and Google Ads campaigns with AI for maximum ROI.',
          icon: 'target',
        },
        {
          title: 'Web & Landing Page',
          description: 'Conversion-focused modern websites that turn visitors into customers.',
          icon: 'layout',
        },
        {
          title: 'AI Automation',
          description: 'Full workflow automation, CRM integration, and chatbots for efficient client management.',
          icon: 'bot',
        },
        {
          title: 'Conversion Optimization',
          description: 'Data-driven A/B testing and analytics to increase revenue.',
          icon: 'trending-up',
        },
      ],
    },
    stats: {
      title: 'Case Studies',
      items: [
        {
          client: 'TechStart Ltd.',
          result: '+150% Lead Growth',
          growth: 150,
          data: [{ name: 'Jan', value: 100 }, { name: 'Feb', value: 120 }, { name: 'Mar', value: 170 }, { name: 'Apr', value: 250 }],
        },
        {
          client: 'GreenHome Shop',
          result: '3.5x ROAS',
          growth: 350,
          data: [{ name: 'Q1', value: 20 }, { name: 'Q2', value: 35 }, { name: 'Q3', value: 45 }, { name: 'Q4', value: 70 }],
        },
      ],
    },
    pricing: {
      title: 'Custom Quote',
      description: 'I create a personalized price quote based on the business needs.',
      cta: 'Request Free Consultation',
    },
    about: {
      title: 'Why JB Marketing?',
      content: 'At JB Marketing, we don\'t believe in guessing. We rely solely on data and the latest AI technologies to build systems that measurably increase our partners\' profits. We take the technological burden off your shoulders so you can focus on building your business.',
    },
    contact: {
      title: 'Ready for Growth?',
      subtitle: 'Book a free strategic consultation and let\'s see how we can help you.',
      cta: 'Book Appointment',
      alertSuccess: 'Thank you! Appointment confirmed for October {day}, {time}. We will contact you shortly.',
      alertError: 'Please select a day and time!',
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
};