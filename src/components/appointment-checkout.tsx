"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Check, Copy, ExternalLink, MessageSquare, Phone, ShieldCheck, Smartphone } from "lucide-react";
import { useState } from "react";
import { ConsultationType, createBookingId, getAppointmentDoctor, PLATFORM_FEE } from "@/lib/appointment";

const UPI_ID = "sahagita087@okicici";
const PHONE = "+91 9679604282";
const RAW_PHONE = "9679604282";

export const AppointmentCheckout = () => {
  const params = useSearchParams();
  const router = useRouter();
  const doctor = getAppointmentDoctor(params.get("doctor"));
  const consultationType = (params.get("type") === "In-Person" ? "In-Person" : "Video Consult") as ConsultationType;
  const slot = params.get("slot") ?? doctor.availableSlots[0];
  const date = params.get("date") ?? "Today";
  const [copied, setCopied] = useState<"upi" | "phone" | null>(null);
  const [confirming, setConfirming] = useState(false);
  const total = doctor.consultationFee + PLATFORM_FEE;
  const upiIntent = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent("Uddaann Health")}&am=${total}&cu=INR`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(upiIntent)}`;

  const copy = async (value: string, type: "upi" | "phone") => {
    await navigator.clipboard.writeText(value);
    setCopied(type);
    window.setTimeout(() => setCopied(null), 1800);
  };

  const confirmPayment = () => {
    const success = new URLSearchParams({ doctor: doctor.id, type: consultationType, slot, date, booking: createBookingId() });
    router.push(`/appointment/success?${success.toString()}`);
  };

  return <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
    <section className="xl:col-span-3 space-y-6">
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl">
        <div className="flex items-center gap-3"><span className="p-3 rounded-2xl bg-[#157BFF]/10 text-[#157BFF]"><ShieldCheck className="w-6 h-6" /></span><div><h2 className="text-xl font-extrabold">Appointment summary</h2><p className="text-sm text-slate-500">Review your consultation before payment.</p></div></div>
        <dl className="mt-7 divide-y divide-slate-200 dark:divide-slate-800 text-sm">
          {[["Doctor", doctor.name], ["Hospital", doctor.hospital], ["Consultation type", consultationType], ["Date", date], ["Time", slot], ["Consultation fee", `₹${doctor.consultationFee}`], ["Platform fee", `₹${PLATFORM_FEE}`]].map(([label, value]) => <div key={label} className="flex justify-between gap-5 py-3"><dt className="text-slate-500">{label}</dt><dd className="text-right font-bold text-slate-900 dark:text-white">{value}</dd></div>)}
          <div className="flex justify-between gap-5 pt-4 text-base"><dt className="font-extrabold">Total amount</dt><dd className="font-extrabold text-[#157BFF]">₹{total}</dd></div>
        </dl>
      </div>
      <Link href="/hospitals#appointment" className="inline-flex text-sm font-bold text-[#157BFF] hover:underline">← Change appointment details</Link>
    </section>
    <section className="xl:col-span-2 rounded-3xl bg-slate-950 p-6 sm:p-8 text-white shadow-2xl space-y-6">
      <div><span className="text-xs font-bold uppercase tracking-widest text-emerald-400">UPI payment only</span><h2 className="mt-2 text-xl font-extrabold">Complete your payment</h2><p className="mt-1 text-sm text-slate-400">No card details or payment gateway required.</p></div>
      <div className="rounded-2xl bg-white p-3 text-center"><img src={qrCodeUrl} alt="UPI payment QR code" className="mx-auto h-48 w-48 rounded-xl" /><p className="mt-2 text-xs font-bold text-slate-700">Scan with any UPI app</p></div>
      <div className="space-y-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-3"><span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">UPI ID</span><div className="mt-1 flex items-center justify-between gap-2"><span className="font-mono text-sm font-bold text-emerald-400">{UPI_ID}</span><button onClick={() => copy(UPI_ID, "upi")} className="inline-flex items-center gap-1 text-xs font-bold text-slate-200">{copied === "upi" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />} {copied === "upi" ? "Copied" : "Copy UPI"}</button></div></div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-3"><span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone number</span><div className="mt-1 flex items-center justify-between gap-2"><span className="font-mono text-sm font-bold text-blue-300">{PHONE}</span><button onClick={() => copy(PHONE, "phone")} className="inline-flex items-center gap-1 text-xs font-bold text-slate-200">{copied === "phone" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />} {copied === "phone" ? "Copied" : "Copy Phone"}</button></div></div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-xs font-bold"><a href={upiIntent} className="rounded-xl bg-emerald-500 px-3 py-3 text-center text-white flex items-center justify-center gap-1"><Smartphone className="w-4 h-4" /> Open UPI App <ExternalLink className="w-3 h-3" /></a><a href={`https://wa.me/91${RAW_PHONE}?text=${encodeURIComponent("Hello Uddaann Health, I need help with my appointment payment.")}`} target="_blank" rel="noreferrer" className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-3 text-center text-emerald-400 flex items-center justify-center gap-1"><MessageSquare className="w-4 h-4" /> WhatsApp</a><a href={`tel:${RAW_PHONE}`} className="col-span-2 rounded-xl border border-slate-700 px-3 py-3 text-center text-slate-200 flex items-center justify-center gap-1"><Phone className="w-4 h-4" /> Call Support</a></div>
      <button onClick={() => setConfirming(true)} className="w-full rounded-xl bg-gradient-to-r from-[#157BFF] to-[#0284C7] py-3.5 text-sm font-extrabold shadow-lg">I Have Completed Payment</button>
    </section>
    {confirming && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"><div role="dialog" aria-modal="true" className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl dark:bg-slate-900"><h2 className="text-xl font-extrabold">Have you completed your payment?</h2><p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Please confirm only after completing the UPI payment of ₹{total}.</p><div className="mt-6 grid grid-cols-2 gap-3"><button onClick={() => setConfirming(false)} className="rounded-xl bg-slate-100 py-3 text-sm font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">No</button><button onClick={confirmPayment} className="rounded-xl bg-[#157BFF] py-3 text-sm font-bold text-white">Yes</button></div></div></div>}
  </div>;
};
