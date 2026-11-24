"use client";

import { useState } from "react";
import { Ambulance, AlertTriangle, MapPin, PhoneCall, Radio, ShieldCheck } from "lucide-react";
import { EmergencySosModal } from "./emergency-sos";

const responseCards = [
  { icon: MapPin, title: "Nearby emergency hospitals", text: "Live emergency and ICU availability." },
  { icon: PhoneCall, title: "Emergency contacts", text: "Keep your care circle reachable." },
  { icon: Radio, title: "Response tracking", text: "Follow dispatch and arrival status." },
];

export const EmergencyWorkspace = () => {
  const [open, setOpen] = useState(false);

  return <>
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <section className="lg:col-span-3 rounded-3xl bg-gradient-to-br from-red-700 to-rose-600 p-8 sm:p-10 text-white shadow-2xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold"><Radio className="w-3.5 h-3.5 animate-pulse" /> LIVE EMERGENCY NETWORK</div>
        <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold">Emergency help, one tap away.</h2>
        <p className="mt-3 max-w-xl text-red-100">Activate an SOS broadcast with your location, care context and emergency contacts, then coordinate the response in real time.</p>
        <button onClick={() => setOpen(true)} className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-red-700 shadow-lg hover:-translate-y-0.5 transition-transform"><AlertTriangle className="w-5 h-5" /> Activate SOS</button>
      </section>
      <aside className="lg:col-span-2 glass-card rounded-3xl p-7 border border-slate-200/80 dark:border-slate-800 space-y-5">
        <h3 className="font-extrabold text-lg">Live response status</h3>
        <div className="flex gap-3"><span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500"><ShieldCheck className="w-5 h-5" /></span><p className="text-sm text-slate-600 dark:text-slate-300"><strong className="block text-slate-900 dark:text-white">Emergency network ready</strong>Nearest verified care teams are monitored.</p></div>
        <div className="flex gap-3"><span className="p-2 rounded-xl bg-blue-500/10 text-blue-500"><Ambulance className="w-5 h-5" /></span><p className="text-sm text-slate-600 dark:text-slate-300"><strong className="block text-slate-900 dark:text-white">Ambulance request</strong>Available after activating SOS.</p></div>
      </aside>
    </div>
    <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
      {responseCards.map(({ icon: Icon, title, text }) => <div key={title} className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800"><Icon className="w-6 h-6 text-red-500" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm text-slate-500">{text}</p></div>)}
    </section>
    {open && <EmergencySosModal onClose={() => setOpen(false)} />}
  </>;
};
