"use client";

import React from "react";
import { Users, Activity, Heart, ShieldCheck, Clock, FileText, Bell, CheckCircle, AlertCircle } from "lucide-react";

export const FamilyDashboard: React.FC = () => {
  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <span>Family & Caregiver Remote Command Center</span>
              <span className="px-2.5 py-0.5 text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold rounded-full border border-emerald-500/20">
                Live Multi-User Sync
              </span>
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Active Patient: <strong>Rajesh Saha (Father)</strong> • Admitted at Apollo Hospitals, Room #408
            </p>
          </div>
        </div>

        <button onClick={() => window.alert("You have 3 active updates: doctor rounds completed, recovery stable, and medication reminder due.")} className="px-4 py-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs rounded-xl border border-amber-500/20 flex items-center gap-1.5 self-start sm:self-auto">
          <Bell className="w-4 h-4" />
          <span>Notifications (3 Active)</span>
        </button>
      </div>

      {/* Grid of Family Caregiver Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Admission & Recovery Timeline */}
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Care Timeline</span>
            <span className="text-xs font-bold text-emerald-500 font-mono">Day 3 of 5</span>
          </div>

          <div className="space-y-3 relative pl-4 border-l-2 border-[#157BFF]">
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Post-Op Recovery Stable</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Today at 11:30 AM</div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Doctor Morning Rounds Completed</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">Today at 09:15 AM</div>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">Admitted to Room #408</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">20 Jul 2026</div>
            </div>
          </div>
        </div>

        {/* Card 2: Live Doctor Notes */}
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Doctor's Latest Note</span>
            <span className="text-[10px] bg-blue-500/10 text-[#157BFF] font-mono px-2 py-0.5 rounded-md">Dr. V. K. Sharma</span>
          </div>

          <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
            "Patient is recovering exceptionally well post-stent placement. Blood pressure normalized at 120/80. Discharge planned for Thursday morning."
          </p>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
            <span>Next Round: 06:00 PM</span>
            <span className="text-emerald-500 font-bold">Discharge Approved</span>
          </div>
        </div>

        {/* Card 3: Caregiver Permissions */}
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Family Access Circle</span>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-white">Uday Saha (Son)</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-500 px-2 py-0.5 rounded-md font-mono">Primary Admin</span>
            </div>

            <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
              <span className="font-bold text-slate-900 dark:text-white">Riya Saha (Daughter)</span>
              <span className="text-[10px] bg-blue-500/20 text-[#157BFF] px-2 py-0.5 rounded-md font-mono">Viewer Access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
