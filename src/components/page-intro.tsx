import React from "react";

export const PageIntro: React.FC<{ eyebrow: string; title: string; description: string }> = ({ eyebrow, title, description }) => (
  <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-20">
    <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top,rgba(21,123,255,0.16),transparent_52%)] pointer-events-none" />
    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
      <span className="inline-flex rounded-full border border-[#157BFF]/25 bg-[#157BFF]/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#157BFF]">{eyebrow}</span>
      <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight text-slate-900 dark:text-white">{title}</h1>
      <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  </section>
);
