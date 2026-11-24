"use client";

import React, { useState, useEffect } from "react";
import { Activity, Heart, ShieldCheck, Bell, Pill, Users, Hospital, Play, RefreshCw, CheckCircle2, Zap } from "lucide-react";

export const EcgMonitorCard: React.FC = () => {
  const [bpm, setBpm] = useState(72);
  const [spo2, setSpo2] = useState(99);
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);

  // Dynamic heartbeat simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setBpm(Math.floor(70 + Math.random() * 6));
      setSpo2(Math.random() > 0.5 ? 99 : 98);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Outer ambient glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#157BFF] via-emerald-500 to-sky-400 rounded-3xl blur-xl opacity-35 dark:opacity-50 animate-pulse-glow" />

      {/* Main Glassmorphism Dashboard Container */}
      <div className="relative glass-card rounded-3xl p-5 border border-slate-200/60 dark:border-slate-800/80 shadow-2xl backdrop-blur-2xl">
        {/* Top Bar Status */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/50 dark:border-slate-800/60">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1">
              <span>Uddaann AI Live Monitor</span>
              <span className="px-2 py-0.5 text-[10px] bg-blue-500/10 text-[#157BFF] font-mono rounded-md border border-[#157BFF]/20">
                PATIENT #UD-9482
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <Activity className="w-3.5 h-3.5 text-[#157BFF] animate-pulse" />
            <span>STREAMING LIVE</span>
          </div>
        </div>

        {/* Dynamic Animated ECG Waveform Canvas */}
        <div className="mt-4 p-4 rounded-2xl bg-slate-950 text-white relative overflow-hidden border border-slate-800 shadow-inner">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-bounce" />
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Cardiac Rhythm</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-extrabold font-mono text-emerald-400 tracking-tight">{bpm}</span>
              <span className="text-xs text-slate-400 font-mono">BPM</span>
            </div>
          </div>

          {/* SVG Animated Pulse Line */}
          <div className="h-16 w-full relative">
            <svg viewBox="0 0 500 100" className="w-full h-full preserve-3d" preserveAspectRatio="none">
              {/* Grid Background */}
              <defs>
                <pattern id="ecgGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(34, 197, 94, 0.08)" strokeWidth="0.5" />
                </pattern>
                <linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#157BFF" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#22C55E" stopOpacity="1" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <rect width="500" height="100" fill="url(#ecgGrid)" />

              {/* Glowing Line */}
              <path
                d="M 0 50 L 50 50 L 60 20 L 70 80 L 80 10 L 95 90 L 105 50 L 170 50 L 180 25 L 190 75 L 200 15 L 215 85 L 225 50 L 300 50 L 310 20 L 320 80 L 330 10 L 345 90 L 355 50 L 500 50"
                fill="none"
                stroke="url(#ecgGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ecg-path"
              />
            </svg>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
            <span>SpO2: <strong className="text-sky-400">{spo2}%</strong></span>
            <span>BP: <strong className="text-emerald-400">120 / 80</strong></span>
            <span>TEMP: <strong className="text-amber-400">98.6°F</strong></span>
          </div>
        </div>

        {/* Embedded Glassmorphic AI Healthcare Video / Dynamic Monitor Loop */}
        <div className="mt-4 relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 group">
          <div className="relative aspect-video w-full flex items-center justify-center bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950">
            {/* Animated Canvas / Medical Video Simulation */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              {/* Pulsing AI Neural Ring */}
              <div className="w-16 h-16 rounded-full border-2 border-[#157BFF] border-t-transparent animate-spin mb-3 flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#22C55E] animate-pulse" />
              </div>
              <span className="text-sm font-bold text-white tracking-wide">Uddaann Neural AI Diagnostic Engine</span>
              <span className="text-xs text-slate-400 mt-1 max-w-xs">
                Real-time multi-modal patient data synthesis & hospital route optimization
              </span>
              <div className="mt-3 flex items-center gap-2">
                <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Zero Anomalies Detected
                </span>
                <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  AUTOPLAY SILENT
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of Micro Glass Widgets */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {/* Hospital Status Widget */}
          <div className="p-3 rounded-2xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/15 flex items-start gap-2.5">
            <div className="p-2 rounded-xl bg-blue-500/20 text-[#157BFF] shrink-0">
              <Hospital className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Hospital Status</span>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-100 mt-0.5">Apollo Hospitals</p>
              <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                9 ICU Beds Reserved
              </span>
            </div>
          </div>

          {/* Insurance Status Widget */}
          <div className="p-3 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/15 flex items-start gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-500 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Insurance Active</span>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-100 mt-0.5">Star Health Optima</p>
              <span className="text-[11px] font-medium text-blue-600 dark:text-blue-400">
                100% Cashless Verified
              </span>
            </div>
          </div>

          {/* Medicine Reminder Widget */}
          <div className="p-3 rounded-2xl bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/15 flex items-start gap-2.5">
            <div className="p-2 rounded-xl bg-purple-500/20 text-purple-500 shrink-0">
              <Pill className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Medicine Alert</span>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-100 mt-0.5">Metformin 500mg</p>
              <span className="text-[11px] text-purple-600 dark:text-purple-400">
                Due Today at 08:00 PM
              </span>
            </div>
          </div>

          {/* Family Notification Widget */}
          <div className="p-3 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/15 flex items-start gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-500 shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Family Care</span>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-100 mt-0.5">Sister Riya</p>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">
                Viewed Vitals 4m ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
