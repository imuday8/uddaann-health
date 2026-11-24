export interface InsurancePlan {
  id: string;
  name: string;
  provider: string;
  monthlyPremium: number;
  annualPremium: number;
  coverageAmount: string;
  coverageValue: number;
  claimSettlementRatio: string;
  cashlessHospitalsCount: number;
  rating: number;
  badge?: string;
  features: string[];
  logoText: string;
  logoBg: string;
}

export const INSURANCE_PLANS_DATA: InsurancePlan[] = [
  {
    id: "star-health-optima",
    name: "Comprehensive Health Optima",
    provider: "Star Health",
    monthlyPremium: 799,
    annualPremium: 8990,
    coverageAmount: "₹10,00,000",
    coverageValue: 1000000,
    claimSettlementRatio: "99.2%",
    cashlessHospitalsCount: 14000,
    rating: 4.9,
    badge: "Most Popular",
    features: [
      "Zero Copay in Network Hospitals",
      "Automatic Restore Benefit",
      "Air Ambulance Coverage up to ₹2L",
      "Day Care Treatments Included",
      "Free Annual Health Checkup"
    ],
    logoText: "STAR",
    logoBg: "bg-blue-600"
  },
  {
    id: "niva-bupa-reassure",
    name: "ReAssure 2.0 Titanium",
    provider: "Niva Bupa",
    monthlyPremium: 849,
    annualPremium: 9490,
    coverageAmount: "₹15,00,000",
    coverageValue: 1500000,
    claimSettlementRatio: "98.8%",
    cashlessHospitalsCount: 10000,
    rating: 4.8,
    badge: "Best Value",
    features: [
      "Lock the Premium until First Claim",
      "Unlimited ReAssure Forever",
      "No Age-based Copay",
      "Express Claim Approval within 30 mins",
      "Mental Healthcare Coverage"
    ],
    logoText: "NIVA",
    logoBg: "bg-emerald-600"
  },
  {
    id: "icici-lombard-elevate",
    name: "Elevate Health Shield",
    provider: "ICICI Lombard",
    monthlyPremium: 899,
    annualPremium: 9990,
    coverageAmount: "₹20,00,000",
    coverageValue: 2000000,
    claimSettlementRatio: "98.5%",
    cashlessHospitalsCount: 7500,
    rating: 4.8,
    badge: "Top Rated",
    features: [
      "Instant E-Claim Settlement",
      "Reset Benefit for Unrelated Illness",
      "Pre & Post Hospitalization 60/180 days",
      "Bariatric Surgery Cover",
      "Worldwide Emergency Cover"
    ],
    logoText: "ICICI",
    logoBg: "bg-amber-600"
  },
  {
    id: "hdfc-ergo-optima-secure",
    name: "Optima Secure 4X Coverage",
    provider: "HDFC ERGO",
    monthlyPremium: 920,
    annualPremium: 10290,
    coverageAmount: "₹25,00,000",
    coverageValue: 2500000,
    claimSettlementRatio: "99.1%",
    cashlessHospitalsCount: 13000,
    rating: 4.9,
    badge: "Maximum Cover",
    features: [
      "4X Coverage from Day 1",
      "No Claim Bonus doubles cover in 2 yrs",
      "Zero Deductible Options",
      "Home Health Care Coverage",
      "Organ Donor Expenses Covered"
    ],
    logoText: "HDFC",
    logoBg: "bg-red-600"
  },
  {
    id: "care-health-supreme",
    name: "Care Supreme Unlimited",
    provider: "Care Health",
    monthlyPremium: 749,
    annualPremium: 8290,
    coverageAmount: "₹10,00,000",
    coverageValue: 1000000,
    claimSettlementRatio: "97.9%",
    cashlessHospitalsCount: 11500,
    rating: 4.7,
    features: [
      "Cumulative Bonus Super up to 500%",
      "Unlimited Automatic Recharge",
      "No Sub-limits on ICU Charges",
      "AYUSH Treatment Covered",
      "Annual Health Check-up for All Members"
    ],
    logoText: "CARE",
    logoBg: "bg-cyan-600"
  },
  {
    id: "acko-platinum",
    name: "Platinum Zero-Deductible",
    provider: "ACKO",
    monthlyPremium: 699,
    annualPremium: 7690,
    coverageAmount: "₹1,00,00,000",
    coverageValue: 10000000,
    claimSettlementRatio: "98.2%",
    cashlessHospitalsCount: 8200,
    rating: 4.8,
    badge: "1 Crore Cover",
    features: [
      "1 Crore Coverage Plan",
      "Zero Out-of-pocket Expenses",
      "100% Cashless at any Network Clinic",
      "Digital-First Claim Filing in App",
      "No Medical Checkup needed below age 45"
    ],
    logoText: "ACKO",
    logoBg: "bg-indigo-600"
  },
  {
    id: "aditya-birla-activ-fit",
    name: "Activ Fit Health Plan",
    provider: "Aditya Birla Health",
    monthlyPremium: 780,
    annualPremium: 8650,
    coverageAmount: "₹15,00,000",
    coverageValue: 1500000,
    claimSettlementRatio: "98.0%",
    cashlessHospitalsCount: 10500,
    rating: 4.7,
    features: [
      "Earn Up to 100% Premium back as HealthReturns",
      "Up to 50% No Claim Bonus",
      "Maternity & Newborn Cover",
      "Mental Health Counseling",
      "Modern Treatment Procedures Included"
    ],
    logoText: "ABHI",
    logoBg: "bg-rose-600"
  },
  {
    id: "tata-aig-medicare",
    name: "MediCare Premier",
    provider: "Tata AIG",
    monthlyPremium: 810,
    annualPremium: 8990,
    coverageAmount: "₹15,00,000",
    coverageValue: 1500000,
    claimSettlementRatio: "98.6%",
    cashlessHospitalsCount: 7200,
    rating: 4.7,
    features: [
      "High Claim Settlement Track Record",
      "Global Cover for Critical Illness",
      "Compassionate Travel Benefit",
      "Prolonged Hospitalization Allowance",
      "Vaccination Cover"
    ],
    logoText: "TATA",
    logoBg: "bg-sky-700"
  },
  {
    id: "manipal-cigna-prohealth",
    name: "ProHealth Prime Protect",
    provider: "ManipalCigna",
    monthlyPremium: 830,
    annualPremium: 9190,
    coverageAmount: "₹10,00,000",
    coverageValue: 1000000,
    claimSettlementRatio: "97.8%",
    cashlessHospitalsCount: 8800,
    rating: 4.6,
    features: [
      "Non-medical Expenses Rider",
      "Switch Off Benefit for Abroad Trips",
      "Cumulative Bonus Guaranteed",
      "Premium Waiver on Critical Illness",
      "Wellness Companion App"
    ],
    logoText: "MCIG",
    logoBg: "bg-teal-600"
  },
  {
    id: "bajaj-allianz-health-guard",
    name: "Health Guard Gold",
    provider: "Bajaj Allianz",
    monthlyPremium: 760,
    annualPremium: 8400,
    coverageAmount: "₹10,00,000",
    coverageValue: 1000000,
    claimSettlementRatio: "98.4%",
    cashlessHospitalsCount: 6800,
    rating: 4.7,
    features: [
      "In-house Health Administration Team",
      "Convalescence Benefit",
      "Daily Cash Allowance during Hospitalization",
      "Road Ambulance Cover up to ₹20,000",
      "Free Doctor Second Opinion"
    ],
    logoText: "BAJAJ",
    logoBg: "bg-blue-700"
  }
];
