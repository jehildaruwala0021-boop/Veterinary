
import React from 'react';
import { Link } from 'react-router-dom';
// Added missing ShieldAlert import
import { CheckCircle2, MapPin, Phone, MessageSquare, Download, ShieldAlert } from 'lucide-react';
import { HOSPITAL_INFO } from '../constants';

const Success: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-2xl text-center">
      <div className="w-24 h-24 bg-sage-50 text-sage-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-sage-100">
        <CheckCircle2 size={48} />
      </div>
      
      <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">You're all set!</h1>
      <p className="text-lg text-slate-600 mb-12">
        Your appointment is confirmed. We've sent a detailed confirmation with instructions to your phone via WhatsApp.
      </p>

      <div className="bg-white rounded-[40px] p-8 shadow-sm border border-slate-100 text-left space-y-8 mb-12">
        <div>
           <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
             <MapPin size={20} className="text-sage-600" /> Getting Here
           </h3>
           <p className="text-slate-600 text-sm leading-relaxed mb-4">
             {HOSPITAL_INFO.address}. We have dedicated pet parking right in front of the clinic.
           </p>
           <a 
            href="#" 
            className="text-sage-600 font-bold text-sm flex items-center gap-1 hover:underline"
           >
             Open in Google Maps <Download size={16} />
           </a>
        </div>

        <div className="border-t border-slate-100 pt-8">
           <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
             <ShieldAlert size={20} className="text-sage-600" /> Quick Tips
           </h3>
           <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sage-600 mt-1.5 shrink-0"></div>
                <span>Ensure your dog is on a leash or your cat is in a carrier.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sage-600 mt-1.5 shrink-0"></div>
                <span>Keep any medical records or previous vaccination cards handy.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sage-600 mt-1.5 shrink-0"></div>
                <span>Avoid heavy feeding 1 hour prior to the visit.</span>
              </li>
           </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to="/" 
          className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:bg-slate-800"
        >
          Back to Home
        </Link>
        <a 
          href={`https://wa.me/919876543210`}
          className="bg-sage-600 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:bg-sage-700 flex items-center justify-center gap-2 shadow-lg"
        >
          <MessageSquare size={18} /> Chat via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Success;
