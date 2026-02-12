
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Added missing Phone import
import { ChevronRight, ChevronLeft, CheckCircle2, ShieldAlert, Calendar, Clock, User, Dog, Phone } from 'lucide-react';
import { DOCTORS, AVAILABLE_SLOTS, SERVICES, HOSPITAL_INFO } from '../constants';
import { PetType } from '../types';

const steps = [
  { id: 1, name: 'Pet Info', icon: <Dog size={18} /> },
  { id: 2, name: 'Reason', icon: <ShieldAlert size={18} /> },
  { id: 3, name: 'Doctor', icon: <User size={18} /> },
  { id: 4, name: 'Schedule', icon: <Calendar size={18} /> },
  { id: 5, name: 'Contact', icon: <Clock size={18} /> },
  { id: 6, name: 'Review', icon: <CheckCircle2 size={18} /> },
];

const Booking: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    petName: '',
    petType: 'Dog' as PetType,
    petAge: '',
    isFirstVisit: true,
    isEmergency: false,
    reason: '',
    customReason: '',
    doctorId: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '',
    ownerName: '',
    ownerPhone: '',
    ownerEmail: '',
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as any;
    const val = type === 'checkbox' ? e.target.checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Final Booking Data:', formData);
    navigate('/booking-success');
  };

  const isStepValid = () => {
    if (currentStep === 1) return formData.petName && formData.petAge;
    if (currentStep === 2) return formData.reason || formData.customReason;
    if (currentStep === 4) return formData.date && formData.timeSlot;
    if (currentStep === 5) return formData.ownerName && formData.ownerPhone;
    return true;
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className={`flex flex-col items-center gap-2 group transition-all ${
                currentStep >= step.id ? 'text-sage-600' : 'text-slate-300'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                currentStep >= step.id ? 'border-sage-600 bg-sage-50' : 'border-slate-200 bg-white'
              }`}>
                {currentStep > step.id ? <CheckCircle2 size={20} /> : step.icon}
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-tight hidden md:block">
                {step.name}
              </span>
            </div>
          ))}
        </div>
        <div className="h-1 bg-slate-100 rounded-full relative overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-sage-600 transition-all duration-500 ease-out" 
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white rounded-[32px] p-6 md:p-10 shadow-xl border border-sage-50">
        {formData.isEmergency && currentStep === 2 && (
          <div className="bg-rose-50 border border-rose-200 p-6 rounded-2xl mb-8 flex flex-col items-center text-center">
             <ShieldAlert className="text-rose-500 mb-3" size={32} />
             <h3 className="text-rose-700 font-bold text-xl">High Priority / Emergency</h3>
             <p className="text-rose-600 text-sm mt-1 max-w-sm">
               For life-threatening situations, we recommend calling us immediately while you make your way here.
             </p>
             <a href={`tel:${HOSPITAL_INFO.phone}`} className="mt-4 bg-rose-500 text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:bg-rose-600">
               <Phone size={18} /> Call {HOSPITAL_INFO.phone}
             </a>
          </div>
        )}

        {/* Step 1: Pet Details */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Tell us about your pet</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">Pet Name</label>
                <input 
                  type="text" 
                  name="petName"
                  value={formData.petName}
                  onChange={handleInputChange}
                  placeholder="e.g., Buddy"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">Pet Type</label>
                <select 
                   name="petType"
                   value={formData.petType}
                   onChange={handleInputChange}
                   className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 transition-all bg-white"
                >
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Bird">Bird</option>
                  <option value="Rabbit">Rabbit</option>
                  <option value="Exotic">Exotic</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">Age (years/months)</label>
                <input 
                  type="text" 
                  name="petAge"
                  value={formData.petAge}
                  onChange={handleInputChange}
                  placeholder="e.g., 2 years"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sage-500/20 focus:border-sage-500 transition-all"
                />
              </div>
              <div className="flex items-center gap-3 py-4">
                <input 
                  type="checkbox" 
                  id="isFirstVisit"
                  name="isFirstVisit"
                  checked={formData.isFirstVisit}
                  onChange={(e) => setFormData(prev => ({ ...prev, isFirstVisit: e.target.checked }))}
                  className="w-5 h-5 accent-sage-600"
                />
                <label htmlFor="isFirstVisit" className="text-sm font-medium text-slate-700">Is this a first-time visit for this pet?</label>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Reason */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Reason for visit</h2>
              <div className="flex items-center gap-2 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                <input 
                  type="checkbox" 
                  id="isEmergency"
                  name="isEmergency"
                  checked={formData.isEmergency}
                  onChange={(e) => setFormData(prev => ({ ...prev, isEmergency: e.target.checked }))}
                  className="w-4 h-4 accent-rose-500"
                />
                <label htmlFor="isEmergency" className="text-xs font-bold text-rose-600">Emergency</label>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {SERVICES.map(s => (
                <button
                  key={s.id}
                  onClick={() => setFormData(prev => ({ ...prev, reason: s.title }))}
                  className={`p-4 rounded-2xl border text-sm font-semibold transition-all text-center ${
                    formData.reason === s.title ? 'border-sage-600 bg-sage-50 text-sage-700' : 'border-slate-100 bg-slate-50 text-slate-500'
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-600">Any specific notes? (Optional)</label>
              <textarea 
                name="customReason"
                value={formData.customReason}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 h-32 resize-none"
                placeholder="Briefly describe your concern..."
              ></textarea>
            </div>
          </div>
        )}

        {/* Step 3: Doctor Selection */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Choose a Doctor (Optional)</h2>
            <div className="space-y-4">
              <button
                onClick={() => setFormData(prev => ({ ...prev, doctorId: '' }))}
                className={`w-full p-4 rounded-2xl border-2 flex items-center justify-between transition-all ${
                  formData.doctorId === '' ? 'border-sage-600 bg-sage-50' : 'border-slate-100'
                }`}
              >
                <span className="font-bold">Any Available Doctor</span>
                {formData.doctorId === '' && <CheckCircle2 className="text-sage-600" />}
              </button>
              
              {DOCTORS.map(doc => (
                <button
                  key={doc.id}
                  onClick={() => setFormData(prev => ({ ...prev, doctorId: doc.id }))}
                  className={`w-full p-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${
                    formData.doctorId === doc.id ? 'border-sage-600 bg-sage-50' : 'border-slate-100'
                  }`}
                >
                  <img src={doc.image} alt={doc.name} className="w-12 h-12 rounded-full object-cover" />
                  <div className="text-left">
                    <p className="font-bold text-slate-900">{doc.name}</p>
                    <p className="text-xs text-slate-500">{doc.specialization}</p>
                  </div>
                  {formData.doctorId === doc.id && <CheckCircle2 className="ml-auto text-sage-600" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Schedule */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">When should we expect you?</h2>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-600">Select Date</label>
              <input 
                type="date" 
                name="date"
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white"
              />
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-600">Select Time Slot</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {AVAILABLE_SLOTS.map(slot => (
                  <button
                    key={slot.id}
                    disabled={!slot.available}
                    onClick={() => setFormData(prev => ({ ...prev, timeSlot: slot.time }))}
                    className={`py-3 rounded-xl text-sm font-bold border transition-all ${
                      !slot.available ? 'bg-slate-50 text-slate-300 border-slate-50 cursor-not-allowed' :
                      formData.timeSlot === slot.time ? 'bg-sage-600 text-white border-sage-600 shadow-lg shadow-sage-600/20' :
                      'bg-white border-slate-100 text-slate-600 hover:border-sage-600'
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Contact Info */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Your Contact Details</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">Full Name</label>
                <input 
                  type="text" 
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600">Mobile Number</label>
                  <input 
                    type="tel" 
                    name="ownerPhone"
                    value={formData.ownerPhone}
                    onChange={handleInputChange}
                    placeholder="+91 00000 00000"
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600">Email Address (Optional)</label>
                  <input 
                    type="email" 
                    name="ownerEmail"
                    value={formData.ownerEmail}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200"
                  />
                </div>
              </div>
              <p className="text-xs text-slate-400 italic text-center">
                We'll send a confirmation and visit instructions via WhatsApp and Email.
              </p>
            </div>
          </div>
        )}

        {/* Step 6: Review */}
        {currentStep === 6 && (
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Review & Confirm</h2>
            
            <div className="bg-slate-50 rounded-3xl p-6 space-y-4 border border-slate-100">
               <div className="flex justify-between border-b border-slate-200 pb-3">
                  <span className="text-slate-500 font-medium">Pet</span>
                  <span className="font-bold">{formData.petName} ({formData.petType})</span>
               </div>
               <div className="flex justify-between border-b border-slate-200 pb-3">
                  <span className="text-slate-500 font-medium">Reason</span>
                  <span className="font-bold">{formData.reason || 'General Consult'}</span>
               </div>
               <div className="flex justify-between border-b border-slate-200 pb-3">
                  <span className="text-slate-500 font-medium">Doctor</span>
                  <span className="font-bold">{formData.doctorId ? DOCTORS.find(d => d.id === formData.doctorId)?.name : 'First Available'}</span>
               </div>
               <div className="flex justify-between border-b border-slate-200 pb-3">
                  <span className="text-slate-500 font-medium">Appointment</span>
                  <span className="font-bold">{formData.date} at {formData.timeSlot}</span>
               </div>
               <div className="flex justify-between">
                  <span className="text-slate-500 font-medium">Contact</span>
                  <span className="font-bold text-right">{formData.ownerName}<br/><span className="text-sm text-slate-400 font-normal">{formData.ownerPhone}</span></span>
               </div>
            </div>

            <div className="flex items-center gap-3 bg-amber-50 p-4 rounded-2xl border border-amber-100">
               <Clock size={18} className="text-amber-600 shrink-0" />
               <p className="text-xs text-amber-700 font-medium">
                 Please arrive 10 minutes early to complete initial paperwork. Bring your pet's past records if any.
               </p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-12 flex items-center justify-between gap-4">
          {currentStep > 1 && (
            <button 
              onClick={prevStep}
              className="px-8 py-4 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              <ChevronLeft size={20} /> Back
            </button>
          )}
          
          {currentStep < steps.length ? (
            <button 
              onClick={nextStep}
              disabled={!isStepValid()}
              className={`ml-auto px-10 py-4 rounded-2xl font-bold text-white transition-all flex items-center gap-2 shadow-lg ${
                isStepValid() ? 'bg-sage-600 hover:bg-sage-700' : 'bg-slate-300 cursor-not-allowed shadow-none'
              }`}
            >
              Next Step <ChevronRight size={20} />
            </button>
          ) : (
            <button 
              onClick={handleFinalSubmit}
              className="ml-auto px-12 py-5 rounded-2xl font-bold text-white bg-sage-600 hover:bg-sage-700 transition-all flex items-center gap-2 shadow-xl hover:-translate-y-1"
            >
              Confirm Appointment
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
