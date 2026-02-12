
import React from 'react';
import { Link } from 'react-router-dom';
// Added missing HeartPulse and Stethoscope imports
import { ChevronRight, Phone, ShieldCheck, Clock, Award, Star, HeartPulse, Stethoscope } from 'lucide-react';
import { SERVICES, DOCTORS, HOSPITAL_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 px-4 overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-50 border border-sage-200 text-sage-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Award size={14} />
              <span>Best Veterinary Care in Whitefield</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.15] mb-6">
              Expert Care for <br />
              <span className="text-sage-600">Your Favorite Family</span> Members.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience modern, stress-free veterinary services in Whitefield, Bangalore. From routine checkups to emergency surgery, your pet is in safe hands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/book" 
                className="bg-sage-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-sage-700 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Book Appointment <ChevronRight size={20} />
              </Link>
              <a 
                href={`tel:${HOSPITAL_INFO.phone}`} 
                className="bg-white border-2 border-slate-200 text-slate-800 px-8 py-4 rounded-2xl font-bold text-lg hover:border-sage-600 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} /> Call Hospital
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-70 grayscale">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-slate-900">5k+</span>
                <span className="text-sm">Happy Pets</span>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-slate-900">4.9/5</span>
                <span className="text-sm">Google Review</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-sage-100 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-amber-50 rounded-full filter blur-3xl opacity-50"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/petvet/800/800" 
                alt="Veterinarian with dog" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-sage-600 rounded-xl text-white">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-tight">Emergency Ready</h4>
                    <p className="text-sm text-slate-600">24/7 Priority support for pets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="container mx-auto px-4">
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-sage-50 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="w-14 h-14 bg-sage-50 text-sage-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold">Trusted Doctors</h3>
            <p className="text-slate-500">Experienced team with over 15+ combined years in vet medicine.</p>
          </div>
          <div className="space-y-3">
            <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock size={28} />
            </div>
            <h3 className="text-xl font-bold">Quick Booking</h3>
            <p className="text-slate-500">Secure your appointment in under 60 seconds online.</p>
          </div>
          <div className="space-y-3">
            <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <HeartPulse size={28} />
            </div>
            <h3 className="text-xl font-bold">Modern Facility</h3>
            <p className="text-slate-500">Equipped with advanced diagnostic labs and sterile OTs.</p>
          </div>
        </div>
      </section>

      {/* Services Grid Preview */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Holistic Services for Every Pet</h2>
            <p className="text-slate-600">From routine vaccinations to advanced orthopedic surgeries, we cover it all right here in Whitefield.</p>
          </div>
          <Link to="/services" className="text-sage-600 font-bold flex items-center gap-1 hover:underline">
            View All Services <ChevronRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group cursor-pointer">
              <div className="w-12 h-12 bg-sage-50 text-sage-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sage-600 group-hover:text-white transition-colors">
                <Stethoscope size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-500 mb-6">{service.description}</p>
              <Link to="/book" className="text-sage-600 font-semibold text-sm hover:underline">
                Book for {service.title}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-sage-600 rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Need an appointment?</h2>
            <p className="text-lg md:text-xl text-sage-100 mb-10 leading-relaxed opacity-90">
              Don't wait. Early detection and regular care are key to your pet's long and happy life. Book your visit now.
            </p>
            <Link 
              to="/book" 
              className="bg-white text-sage-700 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-sage-50 transition-all inline-block shadow-lg"
            >
              Start Booking Now
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="container mx-auto px-4">
         <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Pet Parent Stories</h2>
            <p className="text-slate-600 mt-2">Hear from our local Whitefield community.</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100">
                <div className="flex text-amber-400 mb-4">
                   <Star size={18} fill="currentColor" />
                   <Star size={18} fill="currentColor" />
                   <Star size={18} fill="currentColor" />
                   <Star size={18} fill="currentColor" />
                   <Star size={18} fill="currentColor" />
                </div>
                <p className="text-slate-700 italic mb-6">"Dr. Sharma was incredible with our anxious Golden. The facility is clean and the booking process was so smooth!"</p>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                   <div>
                      <h4 className="font-bold text-sm">Rahul S.</h4>
                      <p className="text-xs text-slate-500">Golden Retriever Parent</p>
                   </div>
                </div>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default Home;
