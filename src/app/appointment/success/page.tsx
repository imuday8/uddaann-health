import { AppointmentSuccess } from "@/components/appointment-success";
import { SiteShell } from "@/components/site-shell";
import { Suspense } from "react";

export default function AppointmentSuccessPage() { return <SiteShell><section className="pt-36 pb-24 px-4 sm:px-6 lg:px-8"><Suspense fallback={<div className="text-center">Loading appointment confirmation…</div>}><AppointmentSuccess /></Suspense></section></SiteShell>; }
