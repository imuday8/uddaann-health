import Link from "next/link";
import { ArrowRight, BrainCircuit, Building2, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { HOSPITALS_DATA } from "@/data/hospitals";
import { INSURANCE_PLANS_DATA } from "@/data/insurance";

const features = [
  { href: "/hospitals", icon: Building2, title: "Hospital Intelligence", text: "Find care with live ICU availability, emergency status and appointment access." },
  { href: "/treatment-cost", icon: HeartHandshake, title: "Treatment Cost AI", text: "Plan care with transparent estimates, insurance and hospital comparisons." },
  { href: "/insurance", icon: ShieldCheck, title: "Insurance Hub", text: "Compare coverage, premiums and cashless networks in one calm experience." },
  { href: "/ai-assistant", icon: BrainCircuit, title: "Clinical AI", text: "Explore symptom guidance, health insights and an always-available assistant." },
  { href: "/family", icon: Users, title: "Family Care", text: "Coordinate reminders, reports, tracking and caregiver updates together." },
];

export const CoreFeaturesOverview = () => (
  <section id="features" className="space-y-8">
    <div className="text-center max-w-2xl mx-auto space-y-3"><span className="text-xs font-extrabold uppercase tracking-widest text-[#157BFF]">One connected platform</span><h2 className="text-3xl sm:text-4xl font-extrabold font-heading">Built for every step of care.</h2><p className="text-slate-600 dark:text-slate-300">Every Uddaann Health capability now has a focused workspace built around the task at hand.</p></div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">{features.map(({ href, icon: Icon, title, text }) => <Link key={href} href={href} className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 hover:-translate-y-1 hover:border-[#157BFF]/60 transition-all group"><Icon className="w-7 h-7 text-[#157BFF] mb-5" /><h3 className="font-bold text-slate-900 dark:text-white">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{text}</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#157BFF]">Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span></Link>)}</div>
  </section>
);

export const FeaturedHospitals = () => (
  <section className="space-y-8"><div className="flex flex-col sm:flex-row gap-4 sm:items-end sm:justify-between"><div><span className="text-xs font-extrabold uppercase tracking-widest text-emerald-500">Care network</span><h2 className="mt-2 text-3xl font-extrabold font-heading">Featured hospitals</h2></div><Link href="/hospitals" className="text-sm font-bold text-[#157BFF]">View hospital finder <ArrowRight className="inline w-4 h-4" /></Link></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{HOSPITALS_DATA.slice(0, 3).map((hospital) => <article key={hospital.id} className="glass-card overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800"><img src={hospital.image} alt={hospital.name} className="h-44 w-full object-cover" /><div className="p-5"><div className="flex justify-between gap-3"><h3 className="font-bold text-slate-900 dark:text-white">{hospital.name}</h3><span className="text-amber-500 text-sm font-bold">★ {hospital.rating}</span></div><p className="mt-2 text-sm text-slate-500">{hospital.city} · {hospital.icuBedsAvailable} ICU beds available</p><Link href="/hospitals" className="mt-4 inline-block text-sm font-bold text-[#157BFF]">Explore hospital</Link></div></article>)}</div></section>
);

export const InsurancePartners = () => <section className="rounded-3xl bg-slate-900 px-6 py-10 text-center text-white shadow-2xl"><span className="text-xs font-extrabold uppercase tracking-widest text-blue-300">Insurance partners</span><h2 className="mt-3 text-2xl sm:text-3xl font-extrabold">Trusted coverage, clearly compared.</h2><div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">{INSURANCE_PLANS_DATA.slice(0, 4).map((plan) => <Link href="/insurance" key={plan.id} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 font-extrabold hover:bg-white/10 transition-colors">{plan.provider}</Link>)}</div></section>;

export const HomeCta = () => <section className="rounded-3xl border border-[#157BFF]/25 bg-gradient-to-br from-[#157BFF]/15 to-emerald-500/10 p-8 sm:p-12 text-center"><h2 className="text-3xl sm:text-4xl font-extrabold font-heading">Health decisions, made clearer.</h2><p className="mt-3 max-w-2xl mx-auto text-slate-600 dark:text-slate-300">Start with AI-guided care, then move confidently through hospitals, treatment planning and family support.</p><Link href="/ai-assistant" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#157BFF] px-6 py-3 text-sm font-bold text-white shadow-lg">Explore Uddaann Health <ArrowRight className="w-4 h-4" /></Link></section>;
