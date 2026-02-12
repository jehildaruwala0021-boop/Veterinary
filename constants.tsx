
import React from 'react';
import { Stethoscope, Syringe, Heart, Clipboard, Scissors, ShieldAlert } from 'lucide-react';
import { Doctor, Service, TimeSlot } from './types';

export const SERVICES: Service[] = [
  {
    id: 'general-checkup',
    title: 'General Wellness',
    description: 'Comprehensive health exams to keep your furry friend thriving.',
    icon: 'Stethoscope',
  },
  {
    id: 'vaccinations',
    title: 'Vaccinations',
    description: 'Essential preventive care and immunization schedules.',
    icon: 'Syringe',
  },
  {
    id: 'emergency',
    title: 'Emergency Care',
    description: '24/7 priority care for critical and life-threatening situations.',
    icon: 'ShieldAlert',
  },
  {
    id: 'diagnostics',
    title: 'Advanced Diagnostics',
    description: 'In-house blood labs, digital X-rays, and ultrasound.',
    icon: 'Clipboard',
  },
  {
    id: 'surgery',
    title: 'Modern Surgery',
    description: 'Safe surgical procedures with advanced monitoring.',
    icon: 'Heart',
  },
  {
    id: 'grooming',
    title: 'Pet Grooming',
    description: 'Hygienic and aesthetic grooming by expert handlers.',
    icon: 'Scissors',
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-sharma',
    name: 'Dr. Anjali Sharma',
    specialization: 'Senior Veterinary Surgeon',
    experience: '12+ Years Experience',
    image: 'https://picsum.photos/seed/doc1/400/400',
    bio: 'Specialist in soft tissue surgery and critical care. Passionate about feline medicine.',
  },
  {
    id: 'dr-reddy',
    name: 'Dr. Vikram Reddy',
    specialization: 'Canine Specialist & Nutritionist',
    experience: '8+ Years Experience',
    image: 'https://picsum.photos/seed/doc2/400/400',
    bio: 'Expert in canine behavior and dermatological conditions. Loves goldens!',
  },
  {
    id: 'dr-desai',
    name: 'Dr. Priya Desai',
    specialization: 'Exotic Pet Specialist',
    experience: '6+ Years Experience',
    image: 'https://picsum.photos/seed/doc3/400/400',
    bio: 'Dedicated to the health of birds, rabbits, and other small mammals.',
  }
];

export const AVAILABLE_SLOTS: TimeSlot[] = [
  { id: '1', time: '09:00 AM', available: true },
  { id: '2', time: '09:30 AM', available: true },
  { id: '3', time: '10:00 AM', available: false },
  { id: '4', time: '10:30 AM', available: true },
  { id: '5', time: '11:00 AM', available: true },
  { id: '6', time: '11:30 AM', available: true },
  { id: '7', time: '02:00 PM', available: true },
  { id: '8', time: '02:30 PM', available: true },
  { id: '9', time: '03:00 PM', available: false },
  { id: '10', time: '03:30 PM', available: true },
];

export const HOSPITAL_INFO = {
  name: 'Pawfect Health Veterinary Hospital',
  location: 'Whitefield, Bangalore',
  address: 'Plot 42, Inner Circle Road, Near Whitefield Post Office, Bangalore - 560066',
  phone: '+91 98765 43210',
  email: 'care@pawfecthealth.com',
  hours: 'Mon - Sun: 9:00 AM - 9:00 PM (Emergency 24/7)',
  googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001655167!2d77.7471!3d12.9698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f3d358826d%3A0xc3f982956697b0a3!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
};
