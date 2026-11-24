"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { EmergencySosModal } from "./emergency-sos";
import { AuthModal } from "./auth-modal";

export const SiteShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [showSosModal, setShowSosModal] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<"login" | "signup" | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1220] text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-[#157BFF] selection:text-white">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenSosModal={() => {
  window.scrollTo({ top: 0, behavior: "instant" });
  setShowSosModal(true);
}}

onOpenAuthModal={(mode) => {
  window.scrollTo({ top: 0, behavior: "instant" });
  setAuthModalMode(mode);
}}
      />
      <main>{children}</main>
      <Footer />
      {showSosModal && (
        <EmergencySosModal onClose={() => setShowSosModal(false)} />
      )}
      {authModalMode && (
        <AuthModal
          mode={authModalMode}
          onClose={() => setAuthModalMode(null)}
        />
      )}
    </div>
  );
};