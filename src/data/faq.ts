export interface FAQItem {
  id: string;
  category: "General" | "Insurance" | "AI & Privacy" | "Hospitals & Emergency";
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What is Uddaann Health?",
    answer: "Uddaann Health is an enterprise AI-powered healthcare ecosystem founded by Uday Saha. It seamlessly connects patients, hospitals, doctors, family care networks, and insurance providers into one unified, real-time intelligent platform."
  },
  {
    id: "faq-2",
    category: "AI & Privacy",
    question: "How accurate is the AI Symptom Checker & Assistant?",
    answer: "Our AI model is trained on over 2.4 million anonymized clinical cases and clinical guidelines. While it provides accurate triage recommendations and urgency scores, it is designed to assist and direct patients to qualified medical professionals rather than replace official diagnostic testing."
  },
  {
    id: "faq-3",
    category: "Insurance",
    question: "Can I get instant cashless approval through Uddaann Health?",
    answer: "Yes! Uddaann Health integrates directly with top insurer APIs including Star Health, HDFC ERGO, Niva Bupa, ICICI Lombard, and ACKO to deliver automated pre-authorization and cashless claim approvals in under 15 minutes."
  },
  {
    id: "faq-4",
    category: "Hospitals & Emergency",
    question: "How does 1-Click Emergency SOS work?",
    answer: "When triggered, Emergency SOS immediately broadcasts your precise GPS location, pre-saved medical records, blood group, and emergency contacts to the nearest partner hospital's emergency room command center and dispatches the closest available ACLS ambulance."
  },
  {
    id: "faq-5",
    category: "AI & Privacy",
    question: "Is my medical document data encrypted and compliant?",
    answer: "All documents in our Medical Vault are encrypted with AES-256 at rest and TLS 1.3 in transit. Uddaann Health complies strictly with HIPAA, ISO 27001, and Ayushman Bharat Digital Mission (ABDM) standards."
  },
  {
    id: "faq-6",
    category: "General",
    question: "How does the Family Dashboard help remote relatives?",
    answer: "Family members added to your trusted circle receive real-time updates on hospital admission status, recovery milestones, daily vitals, doctor rounds notes, and medicine reminders with full permission control."
  }
];
