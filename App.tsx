
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Success from './pages/Success';
import Contact from './pages/Contact';

// Mock simple pages to save space but maintain structure
const Doctors = () => (
  <div className="container mx-auto px-4 py-16">
    <h1 className="text-4xl font-bold mb-8 text-center">Our Veterinary Experts</h1>
    <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
      Meet the compassionate professionals dedicated to your pet's wellbeing.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-100 group">
          <img src={`https://picsum.photos/seed/doc${i}/400/500`} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-1">Dr. Specialist {i}</h3>
            <p className="text-sage-600 font-semibold mb-4">Senior Surgeon</p>
            <p className="text-slate-500 text-sm">Passionate about providing advanced medical care to companion animals in Bangalore.</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Emergency = () => (
  <div className="container mx-auto px-4 py-16 text-center max-w-3xl">
    <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-8">
       <span className="text-4xl">!</span>
    </div>
    <h1 className="text-4xl font-bold mb-6 text-rose-600">Emergency & Critical Care</h1>
    <p className="text-lg text-slate-700 mb-10">
      If your pet is experiencing difficulty breathing, severe bleeding, or sudden collapse, do not wait. We are open 24/7 for emergencies.
    </p>
    <div className="bg-rose-50 border-2 border-rose-200 rounded-[32px] p-8 space-y-6">
       <h2 className="text-2xl font-bold">Call Now: +91 98765 43210</h2>
       <p className="text-slate-600">Calling ahead helps our medical team prepare for your arrival.</p>
    </div>
  </div>
);

const PolicyPage = ({ title }: { title: string }) => (
  <div className="container mx-auto px-4 py-20 max-w-3xl">
    <h1 className="text-3xl font-bold mb-8">{title}</h1>
    <div className="prose prose-slate space-y-4">
      <p>This is a placeholder for the {title} content. In a production app, this would contain legal definitions regarding your data and usage of Pawfect Health services.</p>
      <p>Last updated: Jan 2024</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/booking-success" element={<Success />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/about" element={<Contact />} />
          <Route path="/privacy" element={<PolicyPage title="Privacy Policy" />} />
          <Route path="/terms" element={<PolicyPage title="Terms & Conditions" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
