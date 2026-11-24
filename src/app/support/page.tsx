import { PageIntro } from "@/components/page-intro";
import { FAQ } from "@/components/faq";
import { SiteShell } from "@/components/site-shell";
import { SupportPaymentSection } from "@/components/support-payment";

export default function SupportPage() { return <SiteShell><PageIntro eyebrow="Support & enquiries" title="Support the Uddaann Health mission." description="Contribute directly through UPI or get in touch with the Uddaann Health team for support, partnerships and technical enquiries." /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20"><SupportPaymentSection /><section id="faq"><FAQ /></section></div></SiteShell>; }
