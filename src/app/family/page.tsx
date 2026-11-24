import { DocumentVault } from "@/components/document-vault";
import { FamilyDashboard } from "@/components/family-dashboard";
import { MedicineReminder } from "@/components/medicine-reminder";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";

export default function FamilyPage() {
  return <SiteShell><PageIntro eyebrow="Family care hub" title="Keep every caregiver in sync." description="Coordinate medication reminders, patient tracking, doctor notes, notifications and medical reports from a private family health workspace." /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20"><FamilyDashboard /><div className="grid grid-cols-1 xl:grid-cols-2 gap-8"><MedicineReminder /><DocumentVault /></div></div></SiteShell>;
}
