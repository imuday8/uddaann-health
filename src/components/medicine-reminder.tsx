"use client";

import React, { useState } from "react";
import { Pill, CheckCircle2, Clock, AlertCircle, Plus, Bell, Calendar, Sparkles } from "lucide-react";

interface Medicine {
  id: string;
  name: string;
  dosage: string;
  time: string;
  meal: "Before Meal" | "After Meal";
  taken: boolean;
  frequency: string;
}

export const MedicineReminder: React.FC = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([
    {
      id: "med-1",
      name: "Metformin ER",
      dosage: "500 mg",
      time: "08:00 AM",
      meal: "After Meal",
      taken: true,
      frequency: "Daily"
    },
    {
      id: "med-2",
      name: "Atorvastatin",
      dosage: "10 mg",
      time: "02:00 PM",
      meal: "After Meal",
      taken: false,
      frequency: "Daily"
    },
    {
      id: "med-3",
      name: "Telmisartan",
      dosage: "40 mg",
      time: "08:00 PM",
      meal: "Before Meal",
      taken: false,
      frequency: "Daily"
    }
  ]);

  const [newMedName, setNewMedName] = useState("");
  const [newDosage, setNewDosage] = useState("");
  const [newTime, setNewTime] = useState("09:00 AM");

  const toggleTaken = (id: string) => {
    setMedicines(
      medicines.map((m) => (m.id === id ? { ...m, taken: !m.taken } : m))
    );
  };

  const handleAddMedicine = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMedName.trim() || !newDosage.trim()) return;

    setMedicines([
      ...medicines,
      {
        id: `med-${Date.now()}`,
        name: newMedName,
        dosage: newDosage,
        time: newTime,
        meal: "After Meal",
        taken: false,
        frequency: "Daily"
      }
    ]);
    setNewMedName("");
    setNewDosage("");
  };

  const takenCount = medicines.filter((m) => m.taken).length;
  const progressPercent = Math.round((takenCount / medicines.length) * 100);

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
          <Pill className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
            <span>AI Medicine & Dosage Tracker</span>
            <span className="px-2.5 py-0.5 text-xs bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold rounded-full border border-purple-500/20">
              Active Sync
            </span>
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Never miss a dose. Real-time pill reminders with automated SMS/WhatsApp alerts for family caregivers.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Pill Schedule */}
        <div className="lg:col-span-7 space-y-5">
          {/* Progress bar */}
          <div className="p-4 rounded-2xl bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/20 space-y-2">
            <div className="flex justify-between items-center text-xs font-bold text-slate-900 dark:text-white">
              <span>Today's Adherence Score</span>
              <span className="font-mono text-purple-600 dark:text-purple-400">{progressPercent}% Completed</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div className="bg-purple-500 h-full rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>

          {/* List of Medicines */}
          <div className="space-y-3">
            {medicines.map((med) => (
              <div
                key={med.id}
                onClick={() => toggleTaken(med.id)}
                className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                  med.taken
                    ? "bg-emerald-500/10 border-emerald-500/30 text-slate-900 dark:text-white"
                    : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-purple-500/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleTaken(med.id);
                    }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
                      med.taken ? "bg-emerald-500 text-white border-emerald-500" : "border-slate-400"
                    }`}
                  >
                    {med.taken && <CheckCircle2 className="w-4 h-4" />}
                  </button>

                  <div>
                    <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                      <span className={med.taken ? "line-through text-slate-500 dark:text-slate-400" : ""}>{med.name}</span>
                      <span className="text-xs font-mono px-2 py-0.5 bg-slate-200 dark:bg-slate-800 rounded-md text-slate-600 dark:text-slate-300">
                        {med.dosage}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-0.5">
                      <Clock className="w-3 h-3 text-purple-500" />
                      <span>{med.time}</span>
                      <span>•</span>
                      <span>{med.meal}</span>
                    </div>
                  </div>
                </div>

                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${
                    med.taken
                      ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                      : "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                  }`}
                >
                  {med.taken ? "Dose Taken" : "Pending"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Add New Medicine Form */}
        <div className="lg:col-span-5">
          <form onSubmit={handleAddMedicine} className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-2">
              <Plus className="w-4 h-4 text-[#157BFF]" /> Add New Prescription Pill
            </h4>

            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Medicine Name</label>
              <input
                type="text"
                value={newMedName}
                onChange={(e) => setNewMedName(e.target.value)}
                placeholder="e.g. Paracetamol / Amoxicillin"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#157BFF]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Dosage</label>
                <input
                  type="text"
                  value={newDosage}
                  onChange={(e) => setNewDosage(e.target.value)}
                  placeholder="e.g. 500mg"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#157BFF]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Time</label>
                <input
                  type="text"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  placeholder="08:00 PM"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#157BFF]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#157BFF] text-white font-bold text-xs rounded-xl hover:bg-blue-600 transition-colors shadow-md flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Save Pill Schedule</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
