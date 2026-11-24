import { InsuranceMarketplace } from "@/components/insurance-marketplace";
import { PageIntro } from "@/components/page-intro";
import { PremiumCalculator } from "@/components/premium-calculator";
import { SiteShell } from "@/components/site-shell";

export default function InsurancePage() {
  return <SiteShell><PageIntro eyebrow="Insurance intelligence" title="Coverage that feels clear." description="A premium insurance workspace for comparing policies, claim ratios, cashless networks, coverage and risk-based premium estimates." /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20"><InsuranceMarketplace /><section><div className="mb-6 text-center"><h2 className="text-3xl font-extrabold font-heading">Premium & risk score calculator</h2><p className="mt-2 text-slate-600 dark:text-slate-300">Build a more informed coverage plan around your family’s needs.</p></div><PremiumCalculator /></section></div></SiteShell>;
}
