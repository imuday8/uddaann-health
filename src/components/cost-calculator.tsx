"use client";

import React, { useState } from "react";
import { HOSPITALS_DATA } from "../data/hospitals";
import { INSURANCE_PLANS_DATA } from "../data/insurance";
import { Calculator, ShieldCheck, DollarSign, PieChart, Info, Download, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

const TREATMENTS = [
  { name: "Coronary Angioplasty (Stent)", baseCost: 240000, duration: "3 Days" },
  { name: "Total Knee Replacement", baseCost: 320000, duration: "5 Days" },
  { name: "Cataract Phaco Surgery", baseCost: 45000, duration: "1 Day (Day Care)" },
  { name: "Maternity Normal Delivery", baseCost: 85000, duration: "3 Days" },
  { name: "Laparoscopic Appendectomy", baseCost: 110000, duration: "2 Days" },
  { name: "Chemotherapy Protocol Cycle", baseCost: 95000, duration: "1 Day" },
  { name: "Renal Kidney Transplant", baseCost: 850000, duration: "14 Days" }
];

const ROOM_TYPES = [
  { name: "General Ward (Multi-bed)", multiplier: 1.0 },
  { name: "Semi-Private Twin Room", multiplier: 1.25 },
  { name: "Deluxe Single Private Room", multiplier: 1.5 },
  { name: "Super Deluxe Executive Suite", multiplier: 2.0 }
];

export const CostCalculator: React.FC = () => {
  const [selectedHospitalId, setSelectedHospitalId] = useState(HOSPITALS_DATA[0].id);
  const [selectedTreatmentIndex, setSelectedTreatmentIndex] = useState(0);
  const [selectedInsuranceId, setSelectedInsuranceId] = useState(INSURANCE_PLANS_DATA[0].id);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(1);

  // Calculation logic
  const treatment = TREATMENTS[selectedTreatmentIndex];
  const room = ROOM_TYPES[selectedRoomIndex];
  const insurance = INSURANCE_PLANS_DATA.find((i) => i.id === selectedInsuranceId);

  const baseCharge = Math.round(treatment.baseCost * room.multiplier);
  const medicineCost = Math.round(baseCharge * 0.18);
  const taxCost = Math.round(baseCharge * 0.08);
  const totalGrossCost = baseCharge + medicineCost + taxCost;

  // Insurance calculation
  const coveragePercent = insurance ? 0.85 : 0.0;
  const insuranceCoverage = Math.round(totalGrossCost * coveragePercent);
  const patientPays = Math.max(0, totalGrossCost - insuranceCoverage);

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
            <span>AI Estimated Treatment Cost Calculator</span>
            <span className="px-2.5 py-0.5 text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold rounded-full border border-emerald-500/20">
              Instant Quote
            </span>
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Select your hospital, procedure, and insurance policy to estimate exact out-of-pocket expenses before admission.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Selector Inputs */}
        <div className="lg:col-span-7 space-y-5">
          {/* Select Hospital */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              1. Select Target Hospital
            </label>
            <select
              value={selectedHospitalId}
              onChange={(e) => setSelectedHospitalId(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#157BFF]"
            >
              {HOSPITALS_DATA.map((h) => (
                <option key={h.id} value={h.id}>
                  {h.name} ({h.city}, {h.state})
                </option>
              ))}
            </select>
          </div>

          {/* Select Treatment */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              2. Select Medical Procedure / Treatment
            </label>
            <select
              value={selectedTreatmentIndex}
              onChange={(e) => setSelectedTreatmentIndex(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#157BFF]"
            >
              {TREATMENTS.map((t, idx) => (
                <option key={idx} value={idx}>
                  {t.name} (Avg. {t.duration})
                </option>
              ))}
            </select>
          </div>

          {/* Select Insurance Provider */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              3. Select Active Insurance Plan
            </label>
            <select
              value={selectedInsuranceId}
              onChange={(e) => setSelectedInsuranceId(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#157BFF]"
            >
              {INSURANCE_PLANS_DATA.map((i) => (
                <option key={i.id} value={i.id}>
                  {i.provider} - {i.name} ({i.coverageAmount} Cover)
                </option>
              ))}
            </select>
          </div>

          {/* Select Room Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              4. Choose Hospital Room Preference
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {ROOM_TYPES.map((r, idx) => {
                const isSelected = selectedRoomIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedRoomIndex(idx)}
                    className={`p-3 rounded-2xl text-left border text-xs font-semibold transition-all ${
                      isSelected
                        ? "bg-[#157BFF]/10 text-[#157BFF] border-[#157BFF] shadow-sm"
                        : "bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300"
                    }`}
                  >
                    <div className="font-bold text-slate-900 dark:text-white">{r.name}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Multiplier: {r.multiplier}x</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Cost Breakdown Summary */}
        <div className="lg:col-span-5">
          <div className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 bg-slate-900 text-white space-y-5 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Cost Estimation Card</span>
              <span className="px-2.5 py-0.5 text-[10px] bg-emerald-500/20 text-emerald-400 font-bold rounded-full border border-emerald-500/30">
                85% Cashless Covered
              </span>
            </div>

            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between items-center text-slate-300">
                <span>Base Procedure Fee:</span>
                <span>₹{baseCharge.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span>Medicines & Consumables:</span>
                <span>₹{medicineCost.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span>Taxes & Administrative:</span>
                <span>₹{taxCost.toLocaleString("en-IN")}</span>
              </div>

              <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-base font-bold text-white">
                <span>Total Gross Estimated Cost:</span>
                <span>₹{totalGrossCost.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex justify-between items-center text-emerald-400 font-bold">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Insurance Coverage ({insurance?.provider}):
                </span>
                <span>- ₹{insuranceCoverage.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Out of pocket box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#157BFF] to-[#0284C7] text-white space-y-1 shadow-lg">
              <div className="text-xs font-medium text-blue-100">Estimated Patient Net Out-of-Pocket:</div>
              <div className="text-3xl font-extrabold font-mono">₹{patientPays.toLocaleString("en-IN")}</div>
              <div className="text-[11px] text-blue-100/90 pt-1">
                You save <strong>₹{insuranceCoverage.toLocaleString("en-IN")}</strong> with cashless pre-authorization.
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center gap-2">
              <button onClick={() => window.alert(`Cashless pre-approval request started for ${treatment.name} at ${HOSPITALS_DATA.find((hospital) => hospital.id === selectedHospitalId)?.name}. Estimated patient payment: ₹${patientPays.toLocaleString("en-IN")}.`)} className="flex-1 py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Pre-Approve Cashless</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
