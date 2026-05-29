import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duneslab — AI Software For Modern Business Workflows",
  description:
    "Duneslab builds intelligent software that automates complex workflows and drives results. AI-powered quotation tools, AI consultancy, and professional web design for B2B enterprises.",
  keywords: ["AI software", "business automation", "quotation tool", "B2B", "Netherlands"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-void text-ink">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
