"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CalendarCheck2, CheckCircle2, Clock, MapPin } from "lucide-react";
import { getAppointmentDoctor } from "@/lib/appointment";

export const AppointmentSuccess = () => {
  const params = useSearchParams();
  const doctor = getAppointmentDoctor(params.get("doctor"));
  const bookingId = params.get("booking") ?? "UH-CONFIRMED";
  const details = [["Doctor", doctor.name], ["Hospital", doctor.hospital], ["Date", params.get("date") ?? "Today"], ["Time", params.get("slot") ?? doctor.availableSlots[0]], ["Booking ID", bookingId], ["Estimated waiting time", "10–15 minutes"]];
  return <div className="mx-auto max-w-2xl text-center"><div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500"><span className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping" /><CheckCircle2 className="h-14 w-14" /></div><h1 className="mt-7 text-4xl font-extrabold font-heading">Appointment confirmed</h1><p className="mt-3 text-slate-600 dark:text-slate-300">Your payment acknowledgement has been recorded and your consultation is reserved.</p><div className="mt-8 glass-card rounded-3xl p-6 text-left border border-slate-200/80 dark:border-slate-800"><div className="flex items-center gap-3 border-b border-slate-200 pb-4 dark:border-slate-800"><CalendarCheck2 className="w-6 h-6 text-[#157BFF]" /><div><h2 className="font-extrabold">Your appointment</h2><p className="text-sm text-slate-500">{params.get("type") ?? "Video Consult"}</p></div></div><dl className="divide-y divide-slate-200 dark:divide-slate-800">{details.map(([label, value]) => <div key={label} className="flex justify-between gap-4 py-3 text-sm"><dt className="text-slate-500">{label}</dt><dd className="text-right font-bold">{value}</dd></div>)}</dl></div><div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3"><Link href="/family" className="rounded-xl bg-[#157BFF] py-3 text-sm font-bold text-white">View Appointment</Link><Link href="/family" className="rounded-xl bg-slate-100 py-3 text-sm font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">Back to Dashboard</Link><Link href="/hospitals#appointment" className="rounded-xl border border-[#157BFF] py-3 text-sm font-bold text-[#157BFF]">Book Another Appointment</Link></div></div>;
};
