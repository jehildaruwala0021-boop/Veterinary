
import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Syringe, HeartPulse, Scissors, Clipboard, Heart, Search } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mb-16">
         <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Complete Veterinary Care</h1>
         <p className="text-lg text-slate-600 leading-relaxed">
           Our Whitefield facility is equipped with state-of-the-art medical technology to ensure your pet receives the highest standard of care at every stage of their life.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
         {SERVICES.map((service) => (
           <div key={service.id} className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
             <div className="w-16 h-16 bg-sage-50 text-sage-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-sage-600 group-hover:text-white transition-all transform group-hover:rotate-3">
                <Stethoscope size={32} />
             </div>
             <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
             <p className="text-slate-500 mb-8 leading-relaxed">
               {service.description} We use modern techniques to minimize stress and maximize effectiveness for your pet's health.
             </p>
             <Link 
               to="/book" 
               className="inline-flex items-center gap-2 text-sage-600 font-bold hover:gap-3 transition-all"
             >
               Book this service <Search size={16} />
             </Link>
           </div>
         ))}
      </div>

      <div className="bg-amber-50 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
         <div className="shrink-0 w-24 h-24 bg-amber-200/50 rounded-full flex items-center justify-center">
            <HeartPulse size={48} className="text-amber-700" />
         </div>
         <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Emergency Support</h2>
            <p className="text-amber-800/80 text-lg max-w-2xl mb-6">
              Critical situations don't follow a schedule. Our critical care unit is staffed 24/7. If you're facing an emergency, please head to our Whitefield clinic immediately.
            </p>
            <Link to="/emergency" className="bg-amber-700 text-white px-8 py-3 rounded-xl font-bold inline-block shadow-lg">
              Emergency Procedures
            </Link>
         </div>
      </div>
    </div>
  );
};

export default Services;
