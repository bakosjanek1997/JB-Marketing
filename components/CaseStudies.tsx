import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface CaseStudy {
  client: string;
  result: string;
  growth: number;
  data: { name: string; value: number }[];
}

const items: CaseStudy[] = [
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
];

const CaseCard: React.FC<{ item: CaseStudy }> = ({ item }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
            <div>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.client}</h3>
                 <p className="text-sm text-slate-500 uppercase tracking-wide font-semibold mt-1">Növekedés</p>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-bold">
                {item.result}
            </div>
        </div>
        
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={item.data}>
              <defs>
                <linearGradient id={`color${item.client.replace(/\s/g, '')}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.3} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff' }}
                itemStyle={{ color: '#38bdf8' }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#0ea5e9" 
                fillOpacity={1} 
                fill={`url(#color${item.client.replace(/\s/g, '')})`} 
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const CaseStudies: React.FC = () => {
  return (
    <section id="cases" className="py-24 scroll-mt-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Eredmények
          </h2>
           <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
             Valós eredmények, valós vállalkozásoknak a mi AI-vezérelt stratégiáinkkal.
           </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {items.map((item, index) => (
            <CaseCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;