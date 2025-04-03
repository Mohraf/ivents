import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import Footer from "@/components/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: '%s | iVENTS by GEiCO',
    default: "iVENTS by GEiCO",
  },
  description: "Your Event Our Canvas",
  verification: { google: "kZKBlvakcvgvymA471FiIklIPhopzIRh27d78gKJTn0" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-center`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton phoneNumber="+254798259215" />
        <SpeedInsights />
        <GoogleAnalytics gaId="AW-16853363602" />
      </body>
    </html>
  );
}
