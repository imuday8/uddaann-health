"use client";

import React, { useState } from "react";
import {
  Copy,
  Check,
  ExternalLink,
  Phone,
  Mail,
  MessageSquare,
  ShieldCheck,
  Heart,
  Smartphone,
  Info
} from "lucide-react";

interface SupportPaymentProps {
  standalone?: boolean;
}

export const SupportPaymentSection: React.FC<SupportPaymentProps> = ({ standalone = true }) => {
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const upiId = "sahagita087@okicici";
  const phoneNumber = "+91 9679604282";
  const rawPhoneNumber = "9679604282";
  const supportEmail = "support@uddaannhealth.com";

  const upiIntentUrl = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent("Uddaann Health")}&cu=INR`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiIntentUrl)}`;
  const whatsappUrl = `https://wa.me/91${rawPhoneNumber}?text=${encodeURIComponent("Hello Uddaann Health Team, I would like to make an enquiry regarding support / partnership.")}`;

  const copyToClipboard = (text: string, type: "upi" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "upi") {
      setCopiedUpi(true);
      setTimeout(() => setCopiedUpi(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <div className={`glass-card rounded-3xl ${standalone ? "p-6 sm:p-10" : "p-6"} border border-slate-200/80 dark:border-slate-800 shadow-2xl relative overflow-hidden space-y-8`}>
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#157BFF]/15 via-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#157BFF]/10 text-[#157BFF] border border-[#157BFF]/20 text-xs font-bold">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>Support & Enquiries</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white">
          Support Uddaann Health
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          Contribute directly to power AI clinical research, hospital telemetry integration, and emergency dispatch systems across India.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct UPI Payment Card */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct UPI Payment</h3>
                  <p className="text-[11px] text-slate-400 font-mono">100% SECURE DIRECT CONTRIBUTION</p>
                </div>
              </div>

              <span className="px-3 py-1 text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30 uppercase tracking-wider">
                Instant UPI
              </span>
            </div>

            {/* QR Code & Identifiers Split */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Generated QR Code Card */}
              <div className="p-3 bg-white rounded-2xl shadow-xl shrink-0 text-center border-2 border-emerald-500/40">
                <img
                  src={qrCodeUrl}
                  alt="UPI QR Code - sahagita087@okicici"
                  className="w-44 h-44 object-contain rounded-lg"
                />
                <span className="block text-[10px] font-bold text-slate-700 font-mono mt-1.5">
                  Scan with GPay / PhonePe / Paytm
                </span>
              </div>

              {/* Identifier Fields */}
              <div className="flex-1 w-full space-y-4">
                {/* UPI ID Field */}
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Primary UPI ID</span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-sm sm:text-base font-extrabold text-emerald-400 truncate">
                      {upiId}
                    </span>
                    <button
                      onClick={() => copyToClipboard(upiId, "upi")}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors shrink-0 flex items-center gap-1.5"
                    >
                      {copiedUpi ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedUpi ? "Copied!" : "Copy UPI"}</span>
                    </button>
                  </div>
                </div>

                {/* Mobile Number for UPI */}
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Mobile Number for UPI</span>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-sm sm:text-base font-extrabold text-blue-400 truncate">
                      {phoneNumber}
                    </span>
                    <button
                      onClick={() => copyToClipboard(phoneNumber, "phone")}
                      className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors shrink-0 flex items-center gap-1.5"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedPhone ? "Copied!" : "Copy Phone"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons Grid */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={upiIntentUrl}
                className="py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-extrabold text-xs shadow-lg transition-all text-center flex items-center justify-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                <span>Open UPI App (GPay/Paytm)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 font-bold text-xs transition-all text-center flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Support</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact & Enquiry Card */}
        <div className="lg:col-span-5 space-y-5">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6">
            <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#157BFF]" />
              <span>Direct Support & Enquiries</span>
            </h3>

            <div className="space-y-3">
              {/* Phone Call Button */}
              <a
                href={`tel:${rawPhoneNumber}`}
                className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-[#157BFF] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#157BFF]/10 text-[#157BFF] group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Phone Line</span>
                    <span className="text-sm font-extrabold font-mono text-slate-900 dark:text-white">{phoneNumber}</span>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-bold bg-[#157BFF] text-white rounded-xl shadow-md">Call Now</span>
              </a>

              {/* Email Support Button */}
              <a
                href={`mailto:${supportEmail}`}
                className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-[#157BFF] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Support Email</span>
                    <span className="text-xs sm:text-sm font-extrabold font-mono text-slate-900 dark:text-white">{supportEmail}</span>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-bold bg-slate-800 text-white rounded-xl">Email</span>
              </a>
            </div>

            {/* Official Note */}
            <div className="p-4 rounded-2xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-1.5">
              <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                <Info className="w-4 h-4 text-[#157BFF] shrink-0" />
                <span>Notice to Contributors & Partners:</span>
              </div>
              <p>
                Support Uddaann Health by contributing through the UPI ID or mobile number above. For any enquiries, partnership opportunities, or technical support, contact us using the phone number or email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
