"use client";

import React from "react";
import Link from "next/link";
import { EcgMonitorCard } from "./ecg-monitor";
import { Sparkles, ArrowRight, ShieldCheck, Award, Users, ChevronRight, Play } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Dynamic Ambient Background Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#157BFF]/20 via-sky-400/15 to-emerald-400/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            {/* Startup Funding & Compliance Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-[#157BFF]/30 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm hover:border-[#157BFF] transition-all">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[#157BFF] font-bold">Series A Funded ($12.5M)</span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="text-slate-600 dark:text-slate-300">HIPAA & ABDM Certified</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Healthcare, <br className="hidden sm:inline" />
                <span className="text-gradient">Connected by AI.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed">
                Uddaann Health is an AI-powered healthcare ecosystem connecting patients, hospitals, families and insurance providers through one intelligent platform.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/ai-assistant"
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#157BFF] to-[#0284C7] rounded-2xl shadow-xl shadow-[#157BFF]/30 hover:shadow-2xl hover:shadow-[#157BFF]/50 hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-3 group"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#features"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-800 dark:text-slate-100 glass-card rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-[#157BFF] dark:hover:border-[#157BFF] hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Explore Platform</span>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </a>
            </div>

            {/* Social Proof Stats */}
            <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 dark:text-white">2.4M+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Patients Covered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#157BFF]">150+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Partner Hospitals</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-emerald-500">99.4%</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Claim Accuracy</div>
              </div>
            </div>
          </div>

          {/* Right Column Interactive Animated Dashboard */}
          <div className="lg:col-span-6">
            <EcgMonitorCard />
          </div>
        </div>
      </div>
    </section>
  );
};
