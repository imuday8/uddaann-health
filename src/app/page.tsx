import { Hero } from "@/components/hero";
import { AboutFounder } from "@/components/about-founder";
import { Testimonials } from "@/components/testimonials";
import { SiteShell } from "@/components/site-shell";
import { CoreFeaturesOverview, FeaturedHospitals, HomeCta, InsurancePartners } from "@/components/home-overview";

export default function Home() {
  return <SiteShell><Hero /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-20"><CoreFeaturesOverview /><section><div className="mb-6 text-center"><span className="text-xs font-extrabold uppercase tracking-widest text-[#157BFF]">AI healthcare preview</span><h2 className="mt-2 text-3xl sm:text-4xl font-extrabold font-heading">A calmer view of connected care.</h2></div><div className="glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"><div><strong className="text-3xl text-[#157BFF]">24/7</strong><p className="mt-2 text-sm text-slate-500">AI-guided support</p></div><div><strong className="text-3xl text-emerald-500">150+</strong><p className="mt-2 text-sm text-slate-500">Hospital partners</p></div><div><strong className="text-3xl text-purple-500">One</strong><p className="mt-2 text-sm text-slate-500">Unified health journey</p></div></div></section><FeaturedHospitals /><InsurancePartners /><section id="about"><AboutFounder /></section><section><Testimonials /></section><HomeCta /></div></SiteShell>;
}
