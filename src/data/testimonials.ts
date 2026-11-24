export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  quote: string;
  avatar: string;
  rating: number;
  badge?: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Vikram Sethi",
    role: "Chief Medical Officer",
    organization: "Apollo Hospitals Group",
    quote: "Uddaann Health has transformed our emergency triage protocol. The real-time ICU bed synchronization and AI pre-diagnosis have reduced critical admission response times by 42%.",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    badge: "Enterprise Partner"
  },
  {
    id: "t2",
    name: "Meera Deshmukh",
    role: "Patient & Family Member",
    organization: "Mumbai",
    quote: "When my father was admitted for urgent cardiac bypass, the Family Dashboard kept our family in 4 different cities updated in real-time on every vitals reading and doctor note.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    badge: "Verified Patient"
  },
  {
    id: "t3",
    name: "Rohan Kapoor",
    role: "VP of Claims & Health Ops",
    organization: "Star Health Insurance",
    quote: "The automated treatment cost estimator and instant cashless claim clearance through Uddaann Health's API ecosystem has virtually eliminated claim disputes for our policyholders.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    badge: "InsurTech Partner"
  }
];
