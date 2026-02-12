
import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { HOSPITAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-lg text-slate-600">
              We're located in the heart of Whitefield, making it easy for local pet parents to reach us. Whether you need an appointment or just have a quick question, we're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
               <div className="w-12 h-12 bg-sage-50 text-sage-600 rounded-xl flex items-center justify-center">
                  <Phone size={24} />
               </div>
               <h3 className="font-bold text-xl">Call Us</h3>
               <p className="text-slate-500">{HOSPITAL_INFO.phone}</p>
            </div>
            <div className="space-y-4">
               <div className="w-12 h-12 bg-sage-50 text-sage-600 rounded-xl flex items-center justify-center">
                  <Mail size={24} />
               </div>
               <h3 className="font-bold text-xl">Email Us</h3>
               <p className="text-slate-500">{HOSPITAL_INFO.email}</p>
            </div>
            <div className="space-y-4">
               <div className="w-12 h-12 bg-sage-50 text-sage-600 rounded-xl flex items-center justify-center">
                  <MapPin size={24} />
               </div>
               <h3 className="font-bold text-xl">Visit Us</h3>
               <p className="text-slate-500">{HOSPITAL_INFO.address}</p>
            </div>
            <div className="space-y-4">
               <div className="w-12 h-12 bg-sage-50 text-sage-600 rounded-xl flex items-center justify-center">
                  <Clock size={24} />
               </div>
               <h3 className="font-bold text-xl">Working Hours</h3>
               <p className="text-slate-500">9 AM - 9 PM, All Days<br/>(24/7 for Emergencies)</p>
            </div>
          </div>

          <div className="bg-sage-600 rounded-3xl p-8 text-white">
             <h3 className="text-2xl font-bold mb-4">Quick Chat?</h3>
             <p className="mb-6 opacity-90">Send us a message on WhatsApp for quick inquiries about services or prices.</p>
             <a 
               href={`https://wa.me/919876543210`}
               className="bg-white text-sage-600 px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-sage-50 transition-all"
             >
               <MessageSquare size={20} /> WhatsApp Us
             </a>
          </div>
        </div>

        <div className="h-full min-h-[500px] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl sticky top-24">
          <iframe 
            src={HOSPITAL_INFO.googleMapsUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
