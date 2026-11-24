"use client";

import React, { useState } from "react";
import { AlertTriangle, PhoneCall, ShieldAlert, MapPin, CheckCircle, Navigation, Radio } from "lucide-react";

interface EmergencySosProps {
  onClose?: () => void;
}

export const EmergencySosModal: React.FC<EmergencySosProps> = ({ onClose }) => {
  const [activated, setActivated] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handleActivate = () => {
    setActivated(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-xl rounded-3xl p-6 sm:p-8 border-2 border-red-500/50 bg-slate-900 text-white space-y-6 shadow-2xl relative animate-fadeIn">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-xs font-bold px-3 py-1 bg-slate-800 rounded-lg hover:bg-slate-700 text-slate-300"
          >
            Close Window
          </button>
        )}

        <div className="flex items-center gap-3">
          <div className="p-3.5 rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/40 animate-pulse">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold font-heading text-white">1-Click Emergency SOS Broadcast</h3>
            <p className="text-xs text-red-400 font-mono mt-0.5">HIGH PRIORITY MEDICAL DISPATCH SYSTEM</p>
          </div>
        </div>

        {!activated ? (
          <div className="space-y-6 text-center py-4">
            <p className="text-sm text-slate-300">
              Pressing the button below will immediately transmit your real-time GPS coordinates, blood group, medical vault summary, and emergency contact list to the nearest hospital command center and ACLS Ambulance unit.
            </p>

            <button
              onClick={handleActivate}
              className="w-48 h-48 rounded-full bg-gradient-to-tr from-red-700 via-red-600 to-rose-500 text-white font-extrabold font-heading text-xl shadow-2xl shadow-red-600/50 hover:scale-105 active:scale-95 transition-transform duration-200 mx-auto flex flex-col items-center justify-center gap-2 border-4 border-white/20 animate-pulse"
            >
              <Radio className="w-10 h-10 animate-bounce" />
              <span>TAP TO BROADCAST SOS</span>
            </button>

            <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-red-400" /> GPS Tracked</span>
              <span>•</span>
              <span className="flex items-center gap-1"><PhoneCall className="w-3.5 h-3.5 text-emerald-400" /> 108 Hotline Sync</span>
            </div>
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-red-950/60 border border-red-500/40 space-y-5 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-red-500/30">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle className="w-5 h-5" />
                <span>SOS SIGNAL TRANSMITTED SUCCESSFULLY</span>
              </div>
              <span className="px-2.5 py-0.5 text-[10px] font-mono bg-red-600 text-white rounded-md">LIVE ALERT</span>
            </div>

            <div className="space-y-3 font-mono text-xs text-slate-200">
              <div className="flex justify-between">
                <span>Dispatched Unit:</span>
                <span className="text-emerald-400 font-bold">Apollo ACLS Unit #09</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Ambulance Arrival:</span>
                <span className="text-amber-400 font-bold">4 Mins (En Route)</span>
              </div>
              <div className="flex justify-between">
                <span>Hospital ER Alerted:</span>
                <span className="text-white font-bold">Apollo Hospitals ER Desk</span>
              </div>
              <div className="flex justify-between">
                <span>Family Contacts Notified:</span>
                <span className="text-emerald-400 font-bold">SMS & Call Triggered (2/2)</span>
              </div>
            </div>

            <div className="pt-3 flex gap-2">
              <a
                href="tel:108"
                className="flex-1 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl shadow-lg text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Emergency 108 Direct</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
