"use client";

import React, { useState } from "react";
import { Bot, Send, User, Sparkles, RefreshCw, MessageSquare, ShieldCheck, HeartPulse } from "lucide-react";

interface ChatMessage {
  sender: "ai" | "user";
  text: string;
  timestamp: string;
}

export const AiChatAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "ai",
      text: "Hello! I am Uddaann AI, your 24x7 intelligent health assistant. How can I assist you with symptoms, insurance policies, hospital beds, or medicine schedules today?",
      timestamp: "Just now"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    "What are Apollo hospital ICU bed rates?",
    "Does Star Health cover pre-existing diabetes?",
    "Suggest a specialist for chronic lower back pain",
    "How do I request emergency cashless pre-authorization?"
  ];

  const handleSend = (query?: string) => {
    const textToSend = query || inputText;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!query) setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let replyText = "I have analyzed your request using Uddaann Health's clinical database. ";

      const lower = textToSend.toLowerCase();
      if (lower.includes("icu") || lower.includes("hospital") || lower.includes("apollo")) {
        replyText += "Apollo Hospitals currently has 14 ICU beds free in Chennai with zero waiting time for emergency admissions. Would you like me to reserve a bed or dispatch an ambulance?";
      } else if (lower.includes("star") || lower.includes("insurance") || lower.includes("cover")) {
        replyText += "Star Health Comprehensive Optima covers pre-existing conditions after 24 months of continuous policy coverage, with 100% cashless pre-authorization available via our instant marketplace.";
      } else if (lower.includes("back pain") || lower.includes("specialist")) {
        replyText += "For chronic lower back pain, an Orthopedic Spine Specialist or Neurologist is recommended. Dr. Arjun Nair (MS Ortho, FRCS) is available today at 03:30 PM for video consult.";
      } else {
        replyText += "Your health query is noted. Based on standard clinical guidelines, maintaining hydration, tracking vitals every 4 hours, and consulting a certified specialist if symptoms persist is recommended.";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1000);
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col h-[650px]">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-[#157BFF] to-[#22C55E] text-white shadow-md">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
              <span>Uddaann 24×7 AI Health Assistant</span>
              <span className="px-2.5 py-0.5 text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold rounded-full border border-emerald-500/20">
                Online
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Powered by OpenAI & Gemini Medical Neural Models</p>
          </div>
        </div>
      </div>

      {/* Messages Scroll View */}
      <div className="flex-1 overflow-y-auto my-4 space-y-4 pr-1">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-3 ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                msg.sender === "user"
                  ? "bg-[#157BFF] text-white"
                  : "bg-gradient-to-tr from-[#157BFF] to-emerald-500 text-white"
              }`}
            >
              {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`max-w-[80%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                msg.sender === "user"
                  ? "bg-[#157BFF] text-white rounded-tr-none shadow-md"
                  : "glass-card bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-tl-none"
              }`}
            >
              <p>{msg.text}</p>
              <span
                className={`block text-[10px] mt-1 font-mono ${
                  msg.sender === "user" ? "text-blue-200 text-right" : "text-slate-400"
                }`}
              >
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pl-11">
            <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#157BFF]" />
            <span>Uddaann AI is synthesizing response...</span>
          </div>
        )}
      </div>

      {/* Quick Suggestions */}
      <div className="py-2 flex flex-wrap gap-2 shrink-0">
        {quickPrompts.map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSend(prompt)}
            className="px-3 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-[#157BFF]/10 hover:text-[#157BFF] transition-colors border border-slate-200 dark:border-slate-700 truncate max-w-[280px]"
          >
            + {prompt}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <div className="pt-2 border-t border-slate-200 dark:border-slate-800 shrink-0 flex items-center gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask anything about symptoms, insurance, medicines, or hospitals..."
          className="flex-1 px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#157BFF]"
        />
        <button
          onClick={() => handleSend()}
          disabled={!inputText.trim()}
          className="p-3 bg-[#157BFF] text-white rounded-2xl hover:bg-blue-600 disabled:opacity-50 transition-colors shadow-md shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
