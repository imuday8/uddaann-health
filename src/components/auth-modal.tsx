"use client";

import React, { useState } from "react";
import { X, Sparkles, Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { Logo } from "./logo";

interface AuthModalProps {
  mode: "login" | "signup";
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ mode: initialMode, onClose }) => {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [role, setRole] = useState<"Patient" | "Doctor" | "Hospital Admin">("Patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass-card w-full max-w-md rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 bg-slate-900 text-white space-y-6 shadow-2xl relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center space-y-2">
          <Logo className="justify-center" />
          <h3 className="text-xl font-bold font-heading pt-2">
            {mode === "login" ? "Welcome Back to Uddaann" : "Create Enterprise Health Account"}
          </h3>
          <p className="text-xs text-slate-400">
            {mode === "login"
              ? "Access your AI health portal, appointments, and vitals."
              : "Join over 2.4 million users on India's premier AI healthcare ecosystem."}
          </p>
        </div>

        {isSuccess ? (
          <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-center space-y-2">
            <ShieldCheck className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
            <h4 className="font-bold text-emerald-400 text-base">Authentication Successful!</h4>
            <p className="text-xs text-slate-300">Redirecting to your verified {role} dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Role selector */}
            <div className="space-y-1">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Select Portal Role</label>
              <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
                {(["Patient", "Doctor", "Hospital Admin"] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`py-1.5 text-[11px] font-bold rounded-lg transition-colors ${
                      role === r ? "bg-[#157BFF] text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#157BFF]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#157BFF]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#157BFF] to-[#0284C7] text-white font-bold text-xs rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <span>{mode === "login" ? "Sign In to Dashboard" : "Create Account"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setMode(mode === "login" ? "signup" : "login")}
                className="text-xs text-slate-400 hover:text-[#157BFF] transition-colors"
              >
                {mode === "login" ? "Don't have an account? Sign up" : "Already registered? Log in"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
