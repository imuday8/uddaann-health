"use client";

import { AiChatAssistant } from "@/components/ai-chat-assistant";
import { AppointmentBooking } from "@/components/appointment-booking";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { SymptomChecker } from "@/components/symptom-checker";

export default function AiAssistantPage() {
  return <SiteShell><PageIntro eyebrow="Uddaann medical AI" title="A smarter starting point for care." description="Use symptom guidance, clinical recommendations and an AI healthcare assistant to understand the next best step." /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20"><SymptomChecker onBookSpecialist={() => document.getElementById("ai-appointment")?.scrollIntoView({ behavior: "smooth" })} /><AiChatAssistant /><section id="ai-appointment" className="scroll-mt-28"><AppointmentBooking /></section></div></SiteShell>;
}
