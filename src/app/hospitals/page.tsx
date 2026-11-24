"use client";

import { AppointmentBooking } from "@/components/appointment-booking";
import { RoleDashboardsSwitcher } from "@/components/dashboards/role-dashboards";
import { HospitalFinder } from "@/components/hospital-finder";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";

export default function HospitalsPage() {
  return <SiteShell><PageIntro eyebrow="Hospital finder" title="Find the right care, right now." description="Search hospitals, compare live ICU and emergency availability, inspect details on the map and book a specialist appointment from one focused workspace." /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20"><HospitalFinder onBookHospitalAppointment={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })} /><section id="appointment" className="scroll-mt-28"><div className="mb-6 text-center"><h2 className="text-3xl font-extrabold font-heading">Book care with confidence</h2><p className="mt-2 text-slate-600 dark:text-slate-300">Secure an in-person or video appointment with a specialist.</p></div><AppointmentBooking /></section><section><div className="mb-6 text-center"><h2 className="text-3xl font-extrabold font-heading">Care team portals</h2><p className="mt-2 text-slate-600 dark:text-slate-300">Keep hospital operations, clinical teams and care coordination connected.</p></div><RoleDashboardsSwitcher /></section></div></SiteShell>;
}
