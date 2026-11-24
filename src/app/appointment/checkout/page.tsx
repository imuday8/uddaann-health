import { AppointmentCheckout } from "@/components/appointment-checkout";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { Suspense } from "react";

export default function AppointmentCheckoutPage() { return <SiteShell><PageIntro eyebrow="Secure appointment checkout" title="Confirm your consultation." description="Review your booking and complete payment directly through UPI." /><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"><Suspense fallback={<div className="glass-card rounded-3xl p-8 text-center">Loading appointment checkout…</div>}><AppointmentCheckout /></Suspense></div></SiteShell>; }
