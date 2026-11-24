"use client";

import React, { useState } from "react";
import { Sliders, Shield, User, Heart, Sparkles, CheckCircle2, DollarSign, TrendingUp } from "lucide-react";

export const PremiumCalculator: React.FC = () => {
  const [age, setAge] = useState(32);
  const [bmi, setBmi] = useState(23);
  const [isSmoker, setIsSmoker] = useState(false);
  const [hasMedicalHistory, setHasMedicalHistory] = useState(false);
  const [familyMembersCount, setFamilyMembersCount] = useState(2);

  // Dynamic Premium Calculation logic
  const baseAgeRate = age < 30 ? 6500 : age < 45 ? 9500 : age < 60 ? 16500 : 28000;
  const bmiMultiplier = bmi > 28 ? 1.2 : 1.0;
  const smokerMultiplier = isSmoker ? 1.35 : 1.0;
  const medicalMultiplier = hasMedicalHistory ? 1.25 : 1.0;
  const familyMultiplier = 1 + (familyMembersCount - 1) * 0.45;

  const estimatedAnnualPremium = Math.round(
    baseAgeRate * bmiMultiplier * smokerMultiplier * medicalMultiplier * familyMultiplier
  );

  const estimatedMonthly = Math.round(estimatedAnnualPremium / 12);
  const claimScore = Math.max(92, 99.8 - (age > 50 ? 2 : 0) - (isSmoker ? 3 : 0)).toFixed(1);

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-blue-500/10 text-[#157BFF] border border-[#157BFF]/20">
          <Sliders className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
            <span>AI Insurance Premium & Claim Score Estimator</span>
            <span className="px-2.5 py-0.5 text-xs bg-blue-500/10 text-[#157BFF] font-semibold rounded-full border border-[#157BFF]/20">
              Interactive Risk Model
            </span>
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Adjust your age, BMI, family size, and health history parameters to view real-time customized premium quotes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Age Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-bold text-slate-900 dark:text-white">
              <span>Primary Insured Age:</span>
              <span className="font-mono text-[#157BFF] text-base">{age} Years Old</span>
            </div>
            <input
              type="range"
              min="18"
              max="75"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#157BFF]"
            />
          </div>

          {/* BMI Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-bold text-slate-900 dark:text-white">
              <span>Body Mass Index (BMI):</span>
              <span className="font-mono text-emerald-500 text-base">{bmi} (Normal)</span>
            </div>
            <input
              type="range"
              min="16"
              max="40"
              value={bmi}
              onChange={(e) => setBmi(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          {/* Family Members Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Covered Family Members
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setFamilyMembersCount(num)}
                  className={`py-3 rounded-2xl text-xs font-bold transition-all border ${
                    familyMembersCount === num
                      ? "bg-[#157BFF] text-white border-[#157BFF] shadow-md"
                      : "bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800"
                  }`}
                >
                  {num === 1 ? "Self Only" : `${num} Members`}
                </button>
              ))}
            </div>
          </div>

          {/* Toggles: Smoker & Pre-existing conditions */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setIsSmoker(!isSmoker)}
              className={`p-4 rounded-2xl text-left border transition-all ${
                isSmoker
                  ? "bg-amber-500/10 border-amber-500 text-amber-600 dark:text-amber-400 font-bold"
                  : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              }`}
            >
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Tobacco / Smoking</div>
              <div className="text-sm font-extrabold mt-1">{isSmoker ? "Active User (+35%)" : "Non-Smoker"}</div>
            </button>

            <button
              type="button"
              onClick={() => setHasMedicalHistory(!hasMedicalHistory)}
              className={`p-4 rounded-2xl text-left border transition-all ${
                hasMedicalHistory
                  ? "bg-purple-500/10 border-purple-500 text-purple-600 dark:text-purple-400 font-bold"
                  : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              }`}
            >
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400">Medical History</div>
              <div className="text-sm font-extrabold mt-1">{hasMedicalHistory ? "Pre-Existing (+25%)" : "Clean History"}</div>
            </button>
          </div>
        </div>

        {/* Right Column Output Display */}
        <div className="lg:col-span-5">
          <div className="glass-card rounded-3xl p-6 border border-slate-200 dark:border-slate-800 bg-slate-950 text-white space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Calculated Insurance Quote</span>
              <span className="px-2.5 py-0.5 text-[10px] bg-[#157BFF]/20 text-[#157BFF] font-bold rounded-full border border-[#157BFF]/30">
                100% Tax Benefit (Sec 80D)
              </span>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-slate-400 font-medium">Estimated Annual Premium:</div>
              <div className="text-4xl font-extrabold font-mono text-emerald-400">
                ₹{estimatedAnnualPremium.toLocaleString("en-IN")}
                <span className="text-sm text-slate-400 font-normal"> / year</span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Just <strong>₹{estimatedMonthly.toLocaleString("en-IN")}</strong> per month
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs text-slate-300">
                <span>AI Claim Success Confidence:</span>
                <span className="font-mono text-emerald-400 font-bold">{claimScore}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${claimScore}%` }} />
              </div>
            </div>

            <button onClick={() => window.alert(`Your estimated premium is ₹${estimatedAnnualPremium.toLocaleString("en-IN")} per year. A policy specialist will help you complete the application.`)} className="w-full py-4 bg-gradient-to-r from-[#157BFF] to-[#0284C7] text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Apply for Instant Policy</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
