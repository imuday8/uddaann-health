"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { DOCTORS_DATA, Doctor } from "../data/doctors";
import { Calendar, Video, Star, MapPin, Sparkles } from "lucide-react";
import { formatAppointmentDate } from "@/lib/appointment";

export const AppointmentBooking: React.FC<{ initialSpecialty?: string }> = ({ initialSpecialty }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(DOCTORS_DATA[0]);
  const [selectedSlot, setSelectedSlot] = useState(DOCTORS_DATA[0].availableSlots[0]);
  const [consultType, setConsultType] = useState<"In-Person" | "Video Consult">("Video Consult");
  const [validationMessage, setValidationMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleBook = () => {
    if (!selectedDoctor) return setValidationMessage("Please select a doctor before continuing to payment.");
    if (!consultType) return setValidationMessage("Please choose a consultation type before continuing.");
    if (!selectedSlot) return setValidationMessage("Please choose an available time slot before continuing.");

    const params = new URLSearchParams({
      doctor: selectedDoctor.id,
      type: consultType,
      slot: selectedSlot,
      date: formatAppointmentDate(),
    });
    router.push(`/appointment/checkout?${params.toString()}`);
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-2xl bg-[#157BFF]/10 text-[#157BFF] border border-[#157BFF]/20">
          <Calendar className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
            <span>Instant Doctor Appointment & Teleconsult Booking</span>
            <span className="px-2.5 py-0.5 text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold rounded-full border border-emerald-500/20">
              HD Video Ready
            </span>
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Book top specialists for in-clinic visits or instant encrypted HD tele-consultations.
          </p>
        </div>
      </div>

      {validationMessage && (
        <div role="alert" className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 font-bold text-sm animate-fadeIn">
          {validationMessage}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Doctor Selection */}
        <div className="lg:col-span-7 space-y-4 max-h-[500px] overflow-y-auto pr-1">
          {DOCTORS_DATA.map((doc) => {
            const isSelected = selectedDoctor.id === doc.id;
            return (
              <div
                key={doc.id}
                onClick={() => {
                  setSelectedDoctor(doc);
                  setSelectedSlot(doc.availableSlots[0]);
                  setValidationMessage(null);
                }}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                  isSelected
                    ? "bg-[#157BFF]/10 border-[#157BFF] ring-2 ring-[#157BFF]/30 shadow-md"
                    : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-14 h-14 rounded-2xl object-cover shrink-0 border border-slate-300 dark:border-slate-700"
                  />
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{doc.name}</h4>
                    <p className="text-xs font-semibold text-[#157BFF]">{doc.specialty} • {doc.experienceYears} yrs exp</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{doc.hospital}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-sm font-extrabold font-mono text-emerald-600 dark:text-emerald-400">
                    ₹{doc.consultationFee}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mt-0.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{doc.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Slot Picker & Confirmation */}
        <div className="lg:col-span-5">
          <div className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 bg-slate-900 text-white space-y-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Slot Picker</span>
              <span className="text-xs text-emerald-400 font-mono">NEXT AVAILABLE TODAY</span>
            </div>

            {/* Mode selection */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setConsultType("Video Consult")}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                  consultType === "Video Consult"
                    ? "bg-[#157BFF] text-white border-[#157BFF]"
                    : "bg-slate-950 text-slate-400 border-slate-800"
                }`}
              >
                <Video className="w-3.5 h-3.5" /> Video Consult
              </button>

              <button
                type="button"
                onClick={() => setConsultType("In-Person")}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                  consultType === "In-Person"
                    ? "bg-[#157BFF] text-white border-[#157BFF]"
                    : "bg-slate-950 text-slate-400 border-slate-800"
                }`}
              >
                <MapPin className="w-3.5 h-3.5" /> In-Clinic Visit
              </button>
            </div>

            {/* Time Slot Picker */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">Available Slots</label>
              <div className="grid grid-cols-2 gap-2">
                {selectedDoctor.availableSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold font-mono transition-all border ${
                      selectedSlot === slot
                        ? "bg-emerald-500 text-white border-emerald-500 shadow-md"
                        : "bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleBook}
              className="w-full py-3.5 bg-gradient-to-r from-[#157BFF] to-[#0284C7] text-white font-bold text-sm rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Confirm & Pay ₹{selectedDoctor.consultationFee}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
