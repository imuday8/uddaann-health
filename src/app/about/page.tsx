import { AboutFounder } from "@/components/about-founder";
import { PageIntro } from "@/components/page-intro";
import { SiteShell } from "@/components/site-shell";
import { Testimonials } from "@/components/testimonials";

export default function AboutPage() { return <SiteShell><PageIntro eyebrow="About Uddaann Health" title="Building a more connected healthcare system." description="Uddaann Health brings patients, hospitals, families and insurance providers together through thoughtful AI experiences." /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20"><AboutFounder /><Testimonials /></div></SiteShell>; }
