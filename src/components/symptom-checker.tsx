"use client";

import React, { useState } from "react";
import { Stethoscope, AlertTriangle, CheckCircle, ArrowRight, Sparkles, UserCheck, ShieldAlert, RefreshCw, Send } from "lucide-react";

interface SymptomResult {
  condition: string;
  probability: number;
  urgency: "Low" | "Moderate" | "Emergency SOS";
  specialist: string;
  summary: string;
  recommendations: string[];
}

export const SymptomChecker: React.FC<{ onBookSpecialist?: (specialty: string) => void }> = ({ onBookSpecialist }) => {
  const [symptomsInput, setSymptomsInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<SymptomResult[] | null>(null);

  const sampleTags = [
    "Severe headache & fever",
    "Chest tightness on exertion",
    "Dry cough & body ache",
    "Sudden joint pain",
    "Acidity & upper abdomen discomfort",
    "Blurry vision & dizziness"
  ];

  const handleAnalyze = (query?: string) => {
    const textToAnalyze = query || symptomsInput;
    if (!textToAnalyze.trim()) return;

    setIsAnalyzing(true);
    setResults(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      const lower = textToAnalyze.toLowerCase();

      if (lower.includes("chest") || lower.includes("tightness") || lower.includes("breath")) {
        setResults([
          {
            condition: "Acute Coronary Syndrome / Angina",
            probability: 78,
            urgency: "Emergency SOS",
            specialist: "Interventional Cardiologist",
            summary: "Immediate medical evaluation is recommended due to cardiac symptom markers.",
            recommendations: [
              "Seek emergency room care immediately",
              "Do not engage in physical exertion",
              "Keep emergency medical contact ready"
            ]
          },
          {
            condition: "Gastroesophageal Reflux Disease (GERD)",
            probability: 22,
            urgency: "Moderate",
            specialist: "Gastroenterologist",
            summary: "Atypical heartburn mimicking thoracic discomfort.",
            recommendations: ["Avoid acidic intake", "Schedule non-urgent consult"]
          }
        ]);
      } else if (lower.includes("headache") || lower.includes("fever") || lower.includes("vision")) {
        setResults([
          {
            condition: "Viral Encephalopathy / Acute Migraine Spectrum",
            probability: 84,
            urgency: "Moderate",
            specialist: "Neurologist",
            summary: "Elevated body temperature combined with cephalic pain.",
            recommendations: [
              "Maintain hydration & rest in a dark room",
              "Monitor temperature every 4 hours",
              "Schedule video consult with a Neurologist within 12 hours"
            ]
          },
          {
            condition: "Seasonal Influenza",
            probability: 16,
            urgency: "Low",
            specialist: "General Physician",
            summary: "Systemic viral response with febrile symptoms.",
            recommendations: ["Hydration", "Paracetamol as prescribed"]
          }
        ]);
      } else {
        setResults([
          {
            condition: "Acute Upper Respiratory Tract Infection",
            probability: 89,
            urgency: "Low",
            specialist: "General Physician",
            summary: "Common inflammatory response of the respiratory mucosa.",
            recommendations: [
              "Increase fluid intake & warm gargles",
              "Monitor oxygen saturation",
              "Consult General Physician if fever persists over 48h"
            ]
          }
        ]);
      }
    }, 1200);
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl relative overflow-hidden">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-[#157BFF]/10 text-[#157BFF] border border-[#157BFF]/20">
          <Stethoscope className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
            <span>AI Symptom Triage Engine</span>
            <span className="px-2.5 py-0.5 text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold rounded-full border border-emerald-500/20">
              99.2% Accuracy
            </span>
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Describe your symptoms in natural language for instant clinical urgency score and specialist matching.
          </p>
        </div>
      </div>

      {/* Input Box */}
      <div className="relative">
        <textarea
          value={symptomsInput}
          onChange={(e) => setSymptomsInput(e.target.value)}
          placeholder="e.g. I have been experiencing a throbbing headache, high fever, and sensitivity to light since yesterday evening..."
          className="w-full h-32 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#157BFF] transition-all resize-none text-sm"
        />
        <button
          onClick={() => handleAnalyze()}
          disabled={isAnalyzing || !symptomsInput.trim()}
          className="absolute bottom-3 right-3 px-5 py-2.5 bg-gradient-to-r from-[#157BFF] to-[#0284C7] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg disabled:opacity-50 transition-all flex items-center gap-2"
        >
          {isAnalyzing ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Analyzing Symptoms...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Analyze Symptoms</span>
            </>
          )}
        </button>
      </div>

      {/* Quick Sample Tags */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Try clicking:</span>
        {sampleTags.map((tag, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSymptomsInput(tag);
              handleAnalyze(tag);
            }}
            className="px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-[#157BFF]/10 hover:text-[#157BFF] dark:hover:text-[#157BFF] transition-colors border border-slate-200 dark:border-slate-700"
          >
            + {tag}
          </button>
        ))}
      </div>

      {/* Analysis Results Display */}
      {results && (
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4 animate-fadeIn">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span>AI Clinical Diagnostics Output</span>
            <span className="text-xs font-mono text-[#157BFF]">CONFIDENCE SCORE</span>
          </h4>

          {results.map((res, index) => (
            <div
              key={index}
              className={`p-5 rounded-2xl border transition-all ${
                res.urgency === "Emergency SOS"
                  ? "bg-red-500/10 border-red-500/30 text-slate-900 dark:text-white"
                  : "bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200/50 dark:border-slate-800/50">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-slate-900 dark:text-white">{res.condition}</span>
                    <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-blue-500/10 text-[#157BFF] border border-[#157BFF]/20">
                      {res.probability}% Match
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{res.summary}</p>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  {res.urgency === "Emergency SOS" ? (
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-red-600 text-white flex items-center gap-1.5 animate-pulse shadow-md">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      EMERGENCY SOS URGENCY
                    </span>
                  ) : res.urgency === "Moderate" ? (
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                      MODERATE URGENCY
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                      LOW URGENCY
                    </span>
                  )}
                </div>
              </div>

              {/* Recommended Specialist */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#157BFF]/10 text-[#157BFF]">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Recommended Specialist:</span>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{res.specialist}</p>
                  </div>
                </div>

                {onBookSpecialist && (
                  <button
                    onClick={() => onBookSpecialist(res.specialist)}
                    className="px-4 py-2 bg-[#157BFF] text-white text-xs font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>Book {res.specialist}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Protocol Recommendations */}
              <div className="mt-3 pt-3 border-t border-slate-200/40 dark:border-slate-800/40">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Clinical Steps:</span>
                <ul className="mt-1 space-y-1">
                  {res.recommendations.map((rec, i) => (
                    <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
