import { EmergencyWorkspace } from "@/components/emergency-workspace";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";

export default function EmergencyPage() { return <SiteShell><PageIntro eyebrow="Emergency response" title="Immediate care coordination when it matters most." description="Activate SOS, request an ambulance, find nearby emergency care and keep your trusted contacts informed from one response centre." /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"><EmergencyWorkspace /></div></SiteShell>; }
