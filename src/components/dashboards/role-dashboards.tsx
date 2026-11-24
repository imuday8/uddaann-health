"use client";

import React, { useState } from "react";
import {
  UserCheck,
  Stethoscope,
  Hospital as HospitalIcon,
  Shield,
  Activity,
  Heart,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  AlertTriangle,
  Bed,
  PhoneCall,
  CheckCircle2,
  Clock,
  Sparkles
} from "lucide-react";

type Role = "patient" | "doctor" | "hospital" | "admin";

export const RoleDashboardsSwitcher: React.FC = () => {
  const [activeRole, setActiveRole] = useState<Role>("patient");

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-8">
      {/* Header & Role Selector Pills */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
            <span>Uddaann Multi-Role Portal Workspace</span>
            <span className="px-3 py-1 text-xs bg-[#157BFF]/10 text-[#157BFF] font-semibold rounded-full border border-[#157BFF]/20">
              Role Switcher
            </span>
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Experience role-tailored dashboards for Patients, Medical Doctors, Hospital Admins, and Enterprise Executives.
          </p>
        </div>

        {/* Pill Selector */}
        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 self-start md:self-auto overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveRole("patient")}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeRole === "patient"
                ? "bg-[#157BFF] text-white shadow-md"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" /> Patient Portal
          </button>

          <button
            onClick={() => setActiveRole("doctor")}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeRole === "doctor"
                ? "bg-[#157BFF] text-white shadow-md"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5" /> Doctor EMR
          </button>

          <button
            onClick={() => setActiveRole("hospital")}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeRole === "hospital"
                ? "bg-[#157BFF] text-white shadow-md"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
            }`}
          >
            <HospitalIcon className="w-3.5 h-3.5" /> Hospital Operations
          </button>

          <button
            onClick={() => setActiveRole("admin")}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeRole === "admin"
                ? "bg-[#157BFF] text-white shadow-md"
                : "text-slate-600 dark:text-slate-300 hover:text-slate-900"
            }`}
          >
            <Shield className="w-3.5 h-3.5" /> Admin Analytics
          </button>
        </div>
      </div>

      {/* PATIENT DASHBOARD */}
      {activeRole === "patient" && (
        <div className="space-y-6 animate-fadeIn">
          {/* Top Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 space-y-1">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Health Score</span>
              <div className="text-3xl font-extrabold font-mono text-[#157BFF]">94/100</div>
              <span className="text-[10px] text-emerald-500 font-bold">Optimal Vitals</span>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Active Insurance</span>
              <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400">Star Health</div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">₹10 Lakh Cover</span>
            </div>

            <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 space-y-1">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Next Appointment</span>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Dr. Vijay Sharma</div>
              <span className="text-[10px] text-purple-500 font-bold">Today 05:00 PM</span>
            </div>

            <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-1">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Heart Rate</span>
              <div className="text-3xl font-extrabold font-mono text-rose-500">72 BPM</div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">Normal Rhythm</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Patient Timeline & Prescriptions</h4>
            <div className="text-xs text-slate-600 dark:text-slate-300 space-y-2">
              <div className="flex justify-between p-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span>Metformin 500mg • After Meal</span>
                <span className="text-emerald-500 font-bold">Dose Taken at 08:00 AM</span>
              </div>
              <div className="flex justify-between p-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span>Blood Pressure Log: 120/80 mmHg</span>
                <span className="text-blue-500 font-bold">Synced from SmartWatch</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DOCTOR DASHBOARD */}
      {activeRole === "doctor" && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500">Today's Patient Queue</span>
              <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white">18 Patients</div>
              <span className="text-[10px] text-emerald-500 font-bold">6 Consultations Completed</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500">Emergency Queue</span>
              <div className="text-2xl font-bold font-mono text-red-500">2 Critical Triage</div>
              <span className="text-[10px] text-slate-400">Apollo ER Ward</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500">Digital E-Prescriptions Issued</span>
              <div className="text-2xl font-bold font-mono text-[#157BFF]">14 Prescriptions</div>
              <span className="text-[10px] text-slate-400">100% ABDM Linked</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Active Patient Queue (EHR)</h4>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">Patient #UD-9482 (Rajesh Saha)</span>
                  <p className="text-[11px] text-slate-500">Symptoms: Post-Angioplasty Follow Up</p>
                </div>
                <button onClick={() => window.alert("Opening the secure EHR record is restricted to authorized clinical users.")} className="px-3 py-1.5 bg-[#157BFF] text-white font-bold rounded-lg text-[11px]">
                  Open EHR Record
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HOSPITAL DASHBOARD */}
      {activeRole === "hospital" && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500">ICU Bed Capacity</span>
              <div className="text-2xl font-bold font-mono text-emerald-500">14 / 50 Free</div>
              <span className="text-[10px] text-slate-400">Real-time Telemetry</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500">Active Ventilators</span>
              <div className="text-2xl font-bold font-mono text-[#157BFF]">8 Available</div>
              <span className="text-[10px] text-slate-400">Ready for Dispatch</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500">ACLS Ambulances</span>
              <div className="text-2xl font-bold font-mono text-amber-500">4 Active Fleet</div>
              <span className="text-[10px] text-slate-400">GPS Live Tracked</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500">Emergency Requests</span>
              <div className="text-2xl font-bold font-mono text-red-500">3 Pending SOS</div>
              <span className="text-[10px] text-slate-400">Priority 1 Dispatch</span>
            </div>
          </div>
        </div>
      )}

      {/* ADMIN DASHBOARD */}
      {activeRole === "admin" && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500">Total ARR Revenue</span>
              <div className="text-2xl font-bold font-mono text-emerald-500">$14.2M</div>
              <span className="text-[10px] text-emerald-500 font-bold">+28% YoY Growth</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500">Total Patients</span>
              <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white">2,410,500</div>
              <span className="text-[10px] text-slate-400">Active Across India</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500">Network Hospitals</span>
              <div className="text-2xl font-bold font-mono text-[#157BFF]">150+ Top Chains</div>
              <span className="text-[10px] text-slate-400">20 Primary Partners</span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500">Insurance Sales</span>
              <div className="text-2xl font-bold font-mono text-purple-500">₹42.8 Crore</div>
              <span className="text-[10px] text-slate-400">Policy Volume</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
