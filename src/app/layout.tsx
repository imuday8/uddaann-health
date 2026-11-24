import type { Metadata, Viewport } from "next";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};

export const metadata: Metadata = {
  title: "Uddaann Health | Healthcare, Connected by AI",
  description:
    "Uddaann Health is an AI-powered healthcare ecosystem connecting patients, hospitals, families, and insurance providers through one intelligent platform. Founded by Uday Saha.",
  keywords: [
    "Uddaann Health",
    "Uday Saha",
    "AI Healthcare Platform",
    "Hospital Finder",
    "Insurance Marketplace",
    "Symptom Checker",
    "Treatment Cost Calculator",
    "ICU Bed Telemetry",
    "Emergency SOS"
  ],
  authors: [{ name: "Uday Saha", url: "https://uddaannhealth.com" }],
  openGraph: {
    title: "Uddaann Health | Healthcare, Connected by AI",
    description:
      "Enterprise AI healthcare platform connecting patients, hospitals, doctors, and insurance networks seamlessly.",
    url: "https://uddaannhealth.com",
    siteName: "Uddaann Health",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
  {children}
</body>
    </html>
  );
}
