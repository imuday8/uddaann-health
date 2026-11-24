"use client";

import React from "react";
import { ShieldCheck, Award, Sparkles, Building2, Lock, Cpu, Globe, CheckCircle2 } from "lucide-react";

export const AboutFounder: React.FC = () => {
  return (
    <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800 shadow-2xl relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Mission & Vision */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#157BFF]/10 border border-[#157BFF]/20 text-xs font-bold text-[#157BFF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Founded by Uday Saha</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white leading-tight">
            Building India’s Premier <br />
            <span className="text-gradient">AI Healthcare Infrastructure.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Under the leadership of founder <strong>Uday Saha</strong>, Uddaann Health was created with a single vision: to eliminate the friction between patients, hospital networks, ICU beds, emergency response teams, and insurance providers.
          </p>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            By deploying clinical neural network models trained on over 2.4 million health records, Uddaann Health brings real-time transparency, automated pre-authorizations, and instant emergency dispatch across top medical institutes nationwide.
          </p>

          {/* Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-1">
              <div className="text-xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#157BFF]" />
                <span>HIPAA Verified</span>
              </div>
              <p className="text-xs text-slate-500">256-Bit Data Encryption</p>
            </div>

            <div className="space-y-1">
              <div className="text-xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>ABDM Integrated</span>
              </div>
              <p className="text-xs text-slate-500">Ayushman Bharat Ready</p>
            </div>

            <div className="space-y-1">
              <div className="text-xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" />
                <span>ISO 27001</span>
              </div>
              <p className="text-xs text-slate-500">Global Security Standard</p>
            </div>
          </div>
        </div>

        {/* Right Column: Founder Quote & Card */}
        <div className="lg:col-span-5">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-slate-800 shadow-2xl relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#157BFF] to-[#22C55E] p-0.5 mb-6">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-bold font-heading text-xl text-white">
                US
              </div>
            </div>

            <blockquote className="text-sm font-medium text-slate-200 italic leading-relaxed">
              "Healthcare is not just about medical treatment — it is about time, trust, and connection when every second counts. With Uddaann Health, we are giving families and doctors the AI-powered precision they deserve."
            </blockquote>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-white">Uday Saha</h4>
                <p className="text-xs text-[#157BFF] font-semibold">Founder & Chief Executive Officer</p>
              </div>

              <span className="text-[10px] font-mono px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                Uddaann Health
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
