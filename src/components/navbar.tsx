"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { Moon, Sun, Menu, X, AlertTriangle, ShieldCheck, Sparkles } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenSosModal: () => void;
  onOpenAuthModal: (mode: "login" | "signup") => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenSosModal,
  onOpenAuthModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/hospitals", label: "Hospitals" },
    { href: "/treatment-cost", label: "Treatment Cost" },
    { href: "/insurance", label: "Insurance" },
    { href: "/ai-assistant", label: "AI Assistant" },
    { href: "/family", label: "Family" },
    { href: "/emergency", label: "Emergency" },
    { href: "/about", label: "About" },
    { href: "/support", label: "Support" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-900/5 dark:bg-slate-100/5 backdrop-blur-md p-1.5 rounded-full border border-slate-200/50 dark:border-slate-800/50">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 whitespace-nowrap text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#157BFF] text-white shadow-md shadow-[#157BFF]/30"
                    : "text-slate-600 dark:text-slate-300 hover:text-[#157BFF] dark:hover:text-white hover:bg-slate-200/40 dark:hover:bg-slate-800/40"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden xl:flex items-center gap-2">
          {/* Emergency SOS Pill */}
          <button
            onClick={onOpenSosModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-500 rounded-full shadow-md shadow-red-500/30 hover:scale-105 active:scale-95 transition-all duration-200 animate-pulse"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>SOS Emergency</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Login Button */}
          <button
            onClick={() => onOpenAuthModal("login")}
            className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-[#157BFF] dark:hover:text-[#157BFF] transition-colors"
          >
            Login
          </button>

          {/* Get Started Button */}
          <button
            onClick={() => onOpenAuthModal("signup")}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#157BFF] to-[#0284C7] rounded-full shadow-md shadow-[#157BFF]/25 hover:shadow-lg hover:shadow-[#157BFF]/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Sparkles className="w-4 h-4" />
            <span>Get Started</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card mt-3 mx-4 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col gap-3 shadow-2xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              className={`text-left px-4 py-2.5 rounded-xl font-medium text-sm ${
                pathname === item.href
                  ? "bg-[#157BFF] text-white"
                  : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                onOpenSosModal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-3 bg-red-600 text-white font-bold rounded-xl text-sm shadow-md"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>SOS Emergency Broadcast</span>
            </button>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <button
                onClick={() => {
                  onOpenAuthModal("login");
                  setMobileMenuOpen(false);
                }}
                className="py-2.5 text-center font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-xl text-sm"
              >
                Login
              </button>
              <button
                onClick={() => {
                  onOpenAuthModal("signup");
                  setMobileMenuOpen(false);
                }}
                className="py-2.5 text-center font-bold text-white bg-[#157BFF] rounded-xl text-sm shadow-md"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
