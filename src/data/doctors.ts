export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experienceYears: number;
  hospital: string;
  city: string;
  rating: number;
  consultationFee: number;
  image: string;
  availableDays: string[];
  availableSlots: string[];
  education: string;
  languages: string[];
}

export const DOCTORS_DATA: Doctor[] = [
  {
    id: "dr-v-k-sharma",
    name: "Dr. Vijay K. Sharma",
    specialty: "Cardiology",
    experienceYears: 22,
    hospital: "Apollo Hospitals, Chennai",
    city: "Chennai",
    rating: 4.9,
    consultationFee: 1200,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
    availableDays: ["Mon", "Wed", "Fri", "Sat"],
    availableSlots: ["09:30 AM", "11:00 AM", "02:30 PM", "05:00 PM"],
    education: "MD, DM (Cardiology) - AIIMS New Delhi",
    languages: ["English", "Hindi", "Tamil"]
  },
  {
    id: "dr-ananya-roy",
    name: "Dr. Ananya Roy",
    specialty: "Neurology",
    experienceYears: 16,
    hospital: "Fortis Memorial Research Institute",
    city: "Gurugram",
    rating: 4.8,
    consultationFee: 1500,
    image: "https://images.unsplash.com/photo-1594824813571-24a69c100417?auto=format&fit=crop&q=80&w=400",
    availableDays: ["Tue", "Thu", "Sat"],
    availableSlots: ["10:00 AM", "01:00 PM", "04:00 PM"],
    education: "MBBS, DM (Neurology) - PGIMER",
    languages: ["English", "Hindi", "Bengali"]
  },
  {
    id: "dr-rajesh-mehta",
    name: "Dr. Rajesh Mehta",
    specialty: "Oncology",
    experienceYears: 25,
    hospital: "Max Super Speciality Hospital",
    city: "New Delhi",
    rating: 4.9,
    consultationFee: 1800,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400",
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    availableSlots: ["09:00 AM", "11:30 AM", "03:00 PM"],
    education: "MS, MCh (Surgical Oncology) - Tata Memorial",
    languages: ["English", "Hindi"]
  },
  {
    id: "dr-preeti-deshmukh",
    name: "Dr. Preeti Deshmukh",
    specialty: "Pediatrics",
    experienceYears: 14,
    hospital: "Rainbow Children's Hospital",
    city: "Hyderabad",
    rating: 4.9,
    consultationFee: 1000,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
    availableDays: ["Mon", "Wed", "Fri"],
    availableSlots: ["10:30 AM", "02:00 PM", "05:30 PM"],
    education: "MD (Pediatrics), Fellowship in Neonatology",
    languages: ["English", "Hindi", "Telugu", "Marathi"]
  },
  {
    id: "dr-arjun-nair",
    name: "Dr. Arjun Nair",
    specialty: "Orthopedics",
    experienceYears: 18,
    hospital: "Manipal Hospital Old Airport Road",
    city: "Bengaluru",
    rating: 4.8,
    consultationFee: 1300,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
    availableDays: ["Tue", "Thu", "Sat", "Sun"],
    availableSlots: ["11:00 AM", "03:30 PM", "06:00 PM"],
    education: "MS (Orthopedics), FRCS (UK)",
    languages: ["English", "Kannada", "Malayalam"]
  },
  {
    id: "dr-sunita-sen",
    name: "Dr. Sunita Sen",
    specialty: "General Medicine",
    experienceYears: 12,
    hospital: "Belle Vue Clinic",
    city: "Kolkata",
    rating: 4.7,
    consultationFee: 800,
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400",
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    availableSlots: ["09:00 AM", "12:00 PM", "04:30 PM"],
    education: "MBBS, MD (Internal Medicine)",
    languages: ["English", "Hindi", "Bengali"]
  }
];
