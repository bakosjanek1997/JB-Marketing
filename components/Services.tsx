import React from 'react';
import { Target, Layout, Bot, TrendingUp } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  target: <Target className="h-10 w-10 text-primary" />,
  layout: <Layout className="h-10 w-10 text-primary" />,
  bot: <Bot className="h-10 w-10 text-primary" />,
  'trending-up': <TrendingUp className="h-10 w-10 text-primary" />,
};

interface ServiceItem {
    title: string;
    description: string;
    icon: string;
}

const items: ServiceItem[] = [
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
];

const ServiceCard: React.FC<{ item: ServiceItem }> = ({ item }) => (
  <div className="group bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
    <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl w-fit group-hover:bg-primary/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
      {iconMap[item.icon]}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 scroll-mt-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Szolgáltatásaink
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;