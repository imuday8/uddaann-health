"use client";

import React, { useState } from "react";
import { FAQ_DATA, FAQItem } from "../data/faq";
import { ChevronDown, Search, HelpCircle } from "lucide-react";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = FAQ_DATA.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#157BFF] bg-[#157BFF]/10 rounded-full border border-[#157BFF]/20">
          Knowledge Base
        </span>
        <h2 className="text-3xl font-extrabold font-heading text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Everything you need to know about Uddaann Health platform, privacy, insurance, and emergency protocols.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md mx-auto">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search question or topic..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#157BFF]"
        />
      </div>

      {/* Accordion items */}
      <div className="space-y-3 max-w-3xl mx-auto pt-2">
        {filteredFaqs.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full p-4 sm:p-5 text-left font-bold text-sm text-slate-900 dark:text-white flex justify-between items-center gap-4"
              >
                <span>{item.question}</span>
                <ChevronDown className={`w-4 h-4 text-[#157BFF] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/50 dark:border-slate-800/50 pt-3">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
