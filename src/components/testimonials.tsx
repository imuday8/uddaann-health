"use client";

import React from "react";
import { TESTIMONIALS_DATA } from "../data/testimonials";
import { Star, Quote, Award, CheckCircle } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#157BFF] bg-[#157BFF]/10 rounded-full border border-[#157BFF]/20">
          Trusted Nationwide
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
          What Healthcare Leaders & Patients Say
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Over 2.4 million families and 150+ hospital networks trust Uddaann Health for critical care intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS_DATA.map((t) => (
          <div
            key={t.id}
            className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-6 hover:border-[#157BFF] transition-colors group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                {t.badge && (
                  <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-blue-500/10 text-[#157BFF] border border-[#157BFF]/20">
                    {t.badge}
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "{t.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-800">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-11 h-11 rounded-full object-cover border border-slate-300 dark:border-slate-700"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#157BFF] transition-colors">
                  {t.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.role} • {t.organization}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
