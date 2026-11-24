"use client";

import React, { useState } from "react";
import { FolderLock, Upload, FileText, ShieldCheck, Download, Trash2, Eye, Lock, Sparkles, Check } from "lucide-react";

interface MedicalDoc {
  id: string;
  title: string;
  category: "Prescription" | "Blood Report" | "MRI Scan" | "CT Scan" | "Insurance" | "Bill";
  date: string;
  size: string;
  status: "Encrypted & Verified";
}

export const DocumentVault: React.FC = () => {
  const [docs, setDocs] = useState<MedicalDoc[]>([
    {
      id: "doc-1",
      title: "Cardiac Angiogram & Lipid Panel Report",
      category: "Blood Report",
      date: "14 Jul 2026",
      size: "2.4 MB",
      status: "Encrypted & Verified"
    },
    {
      id: "doc-2",
      title: "Lumbar Spine MRI Scan High-Res DICOM",
      category: "MRI Scan",
      date: "02 Jun 2026",
      size: "45.1 MB",
      status: "Encrypted & Verified"
    },
    {
      id: "doc-3",
      title: "Star Health Comprehensive Policy Certificate",
      category: "Insurance",
      date: "10 Jan 2026",
      size: "1.1 MB",
      status: "Encrypted & Verified"
    }
  ]);

  const [uploadedTitle, setUploadedTitle] = useState("");
  const [category, setCategory] = useState<MedicalDoc["category"]>("Prescription");

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedTitle.trim()) return;

    setDocs([
      {
        id: `doc-${Date.now()}`,
        title: uploadedTitle,
        category,
        date: "Today",
        size: "3.2 MB",
        status: "Encrypted & Verified"
      },
      ...docs
    ]);
    setUploadedTitle("");
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
          <FolderLock className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
            <span>Encrypted Medical Document Vault</span>
            <span className="px-2.5 py-0.5 text-xs bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold rounded-full border border-indigo-500/20 flex items-center gap-1">
              <Lock className="w-3 h-3" /> AES-256 Encrypted
            </span>
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Secure cloud repository for prescriptions, lab results, DICOM scans, and insurance policies.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Document Upload Area */}
        <div className="lg:col-span-5">
          <form onSubmit={handleUpload} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-800 text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#157BFF]/10 text-[#157BFF] mx-auto flex items-center justify-center">
              <Upload className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Upload New Health File</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Supports PDF, PNG, JPG, DICOM up to 100MB</p>
            </div>

            <div className="text-left space-y-3 pt-2">
              <input
                type="text"
                value={uploadedTitle}
                onChange={(e) => setUploadedTitle(e.target.value)}
                placeholder="Document Title (e.g. Apollo Blood Test)"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#157BFF]"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as MedicalDoc["category"])}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-[#157BFF]"
              >
                <option value="Prescription">Prescription</option>
                <option value="Blood Report">Blood Report</option>
                <option value="MRI Scan">MRI Scan</option>
                <option value="CT Scan">CT Scan</option>
                <option value="Insurance">Insurance Document</option>
                <option value="Bill">Hospital Bill</option>
              </select>

              <button
                type="submit"
                className="w-full py-3 bg-[#157BFF] text-white font-bold text-xs rounded-xl shadow-md hover:bg-blue-600 transition-colors flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-4 h-4" />
                <span>Upload & Encrypt File</span>
              </button>
            </div>
          </form>
        </div>

        {/* Saved Files List */}
        <div className="lg:col-span-7 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Stored Documents ({docs.length})
          </h4>

          {docs.map((doc) => (
            <div
              key={doc.id}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 hover:border-indigo-500/40 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white truncate">{doc.title}</h5>
                  <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-0.5">
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">{doc.category}</span>
                    <span>•</span>
                    <span>{doc.date}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => window.alert(`Opening secure preview for ${doc.title}.`)} aria-label={`Preview ${doc.title}`} className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300">
                  <Eye className="w-4 h-4" />
                </button>
                <button onClick={() => window.alert(`Preparing encrypted download for ${doc.title}.`)} aria-label={`Download ${doc.title}`} className="p-2 rounded-xl bg-[#157BFF]/10 text-[#157BFF] hover:bg-[#157BFF]/20">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
