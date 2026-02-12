
export type PetType = 'Dog' | 'Cat' | 'Bird' | 'Rabbit' | 'Exotic';

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  image: string;
  bio: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullContent?: string;
}

export interface Appointment {
  id: string;
  petName: string;
  petType: PetType;
  petAge: string;
  isFirstVisit: boolean;
  isEmergency: boolean;
  reason: string;
  doctorId?: string;
  date: string;
  timeSlot: string;
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}
