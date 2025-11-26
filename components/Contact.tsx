import React from 'react';
import { Mail, MapPin } from 'lucide-react';

// Új Google Calendar Embed Komponens
const GoogleCalendarEmbed: React.FC = () => {
    // A Reactben iframe-et a dangerouslySetInnerHTML használatával a legtisztább beágyazni,
    // különösen, ha külső szkripteket tartalmaz, de az iframe önmagában is működik.
    // CSS osztályokat adtunk hozzá a stílus és az árnyék megtartásához.
    return (
        <div id="booking-calendar" className="scroll-mt-32 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-200 dark:border-slate-800 transform transition-transform duration-500">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Stratégiai Megbeszélés Foglalása</h3>
            
            <div className="w-full h-[650px] overflow-hidden rounded-lg">
                {/* Google Calendar Appointment Scheduling begin - A SIKERESEN MŰKÖDŐ FOGLALÁSI RENDSZER! */}
                <iframe 
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0RGkyqxojc4_mfGlxvWryI7gznNbZJgLg1toVl9X5P9De7K4DTd29swNPKi1kWT5XSajRdUagL?gv=true" 
                    style={{ border: '0' }} 
                    width="100%" 
                    height="100%" // A szülő div méretéhez igazítva
                    frameBorder="0"
                ></iframe>
                {/* end Google Calendar Appointment Scheduling */}
            </div>
        </div>
    );
};


const Contact: React.FC = () => {
  // A korábbi useState és handleBooking függvények eltávolítva, mert a Google kezeli a foglalást.

  return (
    <section id="contact" className="py-24 scroll-mt-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side Info - Megtartva */}
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

          {/* Right Side - Google Calendar Embed */}
          <GoogleCalendarEmbed />

        </div>
      </div>
    </section>
  );
};

export default Contact;
