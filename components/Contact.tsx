import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(12);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleBooking = () => {
    if (selectedDay && selectedTime) {
      const message = `Köszönjük! Az időpontot rögzítettük: Október ${selectedDay}, ${selectedTime}. Hamarosan felvesszük Önnel a kapcsolatot.`;
      alert(message);
    } else {
      alert('Kérlek válassz napot és időpontot!');
    }
  };

  return (
    <section id="contact" className="py-24 scroll-mt-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Készen állsz a növekedésre?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
              Foglalj időpontot egy ingyenes stratégiai megbeszélésre, és nézzük meg, hogyan segíthetünk.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@jbmarketing.ai" className="flex items-center space-x-4 group p-4 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md hover:-translate-x-[-8px]">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">hello@jbmarketing.ai</span>
              </a>
              <div className="flex items-center space-x-4 group p-4 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md hover:-translate-x-[-8px]">
                 <div className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-md group-hover:bg-primary/10 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                 </div>
                <span className="text-lg text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Budapest, Hungary</span>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Calendar Interface */}
          <div id="booking-calendar" className="scroll-mt-32 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-200 dark:border-slate-800 transform transition-transform duration-500 hover:scale-[1.01]">
            <div className="flex items-center justify-between mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                        <span className="font-bold text-slate-600 dark:text-slate-300">JB</span>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">JB Marketing</h4>
                        <p className="text-xs text-slate-500">30 perc Stratégiai Hívás</p>
                    </div>
                </div>
            </div>
            
            {/* Calendar Grid */}
            <div className="space-y-4">
                <div className="flex justify-between items-center text-slate-800 dark:text-slate-200 font-semibold mb-2">
                    <span>Október 2023</span>
                    <div className="flex space-x-2">
                        <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors">&lt;</button>
                        <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors">&gt;</button>
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2 text-slate-400">
                    <div>H</div><div>K</div><div>Sz</div><div>Cs</div><div>P</div><div>Sz</div><div>V</div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center">
                    {/* Empty slots */}
                    <div/><div/>
                    {/* Days */}
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(d => (
                         <div 
                           key={d} 
                           onClick={() => setSelectedDay(d)}
                           className={`p-2 rounded-full cursor-pointer transition-all duration-300 ${
                             d === selectedDay
                               ? 'bg-primary text-white shadow-lg shadow-primary/40 scale-110' 
                               : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:scale-110'
                           }`}
                         >
                             {d}
                         </div>
                    ))}
                </div>
                
                <h5 className="font-semibold text-slate-900 dark:text-white mt-6 mb-3">Szabad időpontok</h5>
                <div className="grid grid-cols-2 gap-3">
                    {['09:00', '10:30', '13:00', '14:30', '16:00'].map(time => (
                        <button 
                          key={time} 
                          onClick={() => setSelectedTime(time)}
                          className={`border py-2 rounded-lg transition-all duration-300 font-medium hover:shadow-md hover:scale-105 active:scale-95 ${
                            selectedTime === time
                              ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30'
                              : 'border-primary text-primary hover:bg-primary hover:text-white'
                          }`}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </div>

            <button 
              onClick={handleBooking}
              className="w-full mt-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-3 rounded-xl hover:opacity-90 hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all duration-300"
            >
                Időpontfoglalás
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;