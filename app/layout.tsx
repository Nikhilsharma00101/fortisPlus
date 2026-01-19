import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FortisPlus – Advancing Healthcare with Trust",
  description: "Experience world-class medical care at FortisPlus. Expert consultations, advanced diagnostics, and compassionate patient care in New Delhi. Book your appointment today.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "FortisPlus – Advancing Healthcare with Trust",
    description: "Experience world-class medical care at FortisPlus. Expert consultations, advanced diagnostics, and compassionate patient care in New Delhi.",
    url: "https://fortisplus.in",
    siteName: "FortisPlus",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FortisPlus Medical Firm - Advancing Healthcare with Trust",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FortisPlus – Advancing Healthcare with Trust",
    description: "Experience world-class medical care at FortisPlus. Expert consultations, advanced diagnostics, and compassionate patient care in New Delhi.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased bg-white text-slate-900 flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
