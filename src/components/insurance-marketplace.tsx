"use client";

import React, { useState } from "react";
import { INSURANCE_PLANS_DATA, InsurancePlan } from "../data/insurance";
import { ShieldCheck, Hospital, Check, Star, ArrowRight, Award, Zap, SlidersHorizontal } from "lucide-react";

export const InsuranceMarketplace: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Popular" | "1 Crore">("All");
  const [comparedPlanIds, setComparedPlanIds] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const toggleCompare = (planId: string) => {
    if (comparedPlanIds.includes(planId)) {
      setComparedPlanIds(comparedPlanIds.filter((id) => id !== planId));
    } else {
      if (comparedPlanIds.length >= 3) {
        alert("You can compare up to 3 insurance plans at a time.");
        return;
      }
      setComparedPlanIds([...comparedPlanIds, planId]);
    }
  };

  const comparedPlans = INSURANCE_PLANS_DATA.filter((p) => comparedPlanIds.includes(p.id));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <span>Verified Health Insurance Marketplace</span>
              <span className="px-3 py-1 text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold rounded-full border border-emerald-500/20">
                10 Insurers Cashless Integrated
              </span>
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Compare 100% cashless plans with instant AI approval, zero paper filing, and 24-hour claim guarantee.
            </p>
          </div>

          {/* Comparison Trigger Counter */}
          {comparedPlanIds.length > 0 && (
            <button
              onClick={() => setShowCompareModal(true)}
              className="px-5 py-2.5 bg-gradient-to-r from-[#157BFF] to-[#0284C7] text-white font-bold text-xs rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Compare Selected ({comparedPlanIds.length})</span>
            </button>
          )}
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {INSURANCE_PLANS_DATA.map((plan) => {
          const isCompared = comparedPlanIds.includes(plan.id);

          return (
            <div
              key={plan.id}
              className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 hover:border-[#157BFF] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Badge if present */}
              {plan.badge && (
                <span className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-gradient-to-r from-[#157BFF] to-emerald-500 text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                  {plan.badge}
                </span>
              )}

              <div className="space-y-4">
                {/* Logo & Header */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${plan.logoBg} text-white font-extrabold font-heading text-xs flex items-center justify-center shadow-md shrink-0`}>
                    {plan.logoText}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#157BFF] transition-colors">
                      {plan.provider}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{plan.name}</p>
                  </div>
                </div>

                {/* Pricing & Coverage info */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Sum Insured Coverage:</span>
                    <span className="text-base font-extrabold font-mono text-emerald-600 dark:text-emerald-400">
                      {plan.coverageAmount}
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline pt-1 border-t border-slate-200/60 dark:border-slate-800">
                    <span className="text-xs text-slate-500 dark:text-slate-400">Monthly Premium:</span>
                    <div className="text-right">
                      <span className="text-xl font-extrabold font-mono text-slate-900 dark:text-white">
                        ₹{plan.monthlyPremium}
                      </span>
                      <span className="text-[10px] text-slate-400 font-normal"> /mo</span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10">
                    <div className="text-[10px] text-slate-400 font-medium">Claim Ratio</div>
                    <div className="font-extrabold text-[#157BFF] font-mono">{plan.claimSettlementRatio}</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10">
                    <div className="text-[10px] text-slate-400 font-medium">Cashless Network</div>
                    <div className="font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                      {plan.cashlessHospitalsCount.toLocaleString()} Hosp.
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-1.5 pt-1">
                  {plan.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-2 mt-4">
                <button
                  onClick={() => toggleCompare(plan.id)}
                  className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                    isCompared
                      ? "bg-[#157BFF] text-white border-[#157BFF]"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {isCompared ? "Added to Compare" : "+ Compare"}
                </button>

                <button onClick={() => window.alert(`${plan.name} has been selected. Continue with the policy application through Uddaann Health support.`)} className="flex-1 py-2.5 px-3 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1">
                  <span>Buy Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison Modal */}
      {showCompareModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-card w-full max-w-4xl rounded-3xl p-6 border border-slate-800 bg-slate-900 text-white space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <h4 className="text-xl font-bold font-heading">Side-by-Side Insurance Comparison</h4>
              <button
                onClick={() => setShowCompareModal(false)}
                className="px-3 py-1 bg-slate-800 text-xs font-bold rounded-lg hover:bg-slate-700"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {comparedPlans.map((p) => (
                <div key={p.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="font-bold text-lg text-[#157BFF]">{p.provider}</div>
                  <div className="text-xs text-slate-400">{p.name}</div>
                  <div className="text-2xl font-mono font-extrabold text-emerald-400">₹{p.annualPremium}/yr</div>
                  <div className="text-xs space-y-1 text-slate-300 pt-2 border-t border-slate-800">
                    <div>Coverage: <strong>{p.coverageAmount}</strong></div>
                    <div>Claim Ratio: <strong>{p.claimSettlementRatio}</strong></div>
                    <div>Hospitals: <strong>{p.cashlessHospitalsCount.toLocaleString()}</strong></div>
                  </div>
                  <button onClick={() => window.alert(`${p.name} selected. A policy application is ready to begin.`)} className="w-full py-2 bg-emerald-600 font-bold text-xs rounded-xl text-white">
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
