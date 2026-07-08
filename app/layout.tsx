import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",   
  weight: ["400", "500", "600", "700", "800", "900"],
});

const body = Inter({
  subsets: ["latin"],
   variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Wedding Documentary Events | Cinematic Wedding Films & Photography",
  description:
    "Wedding Documentary Events captures real, unscripted love stories — from engagement to reception — through cinematic film and fine-art photography.",
  openGraph: {
    title: "Wedding Documentary Events",
    description:
      "Real moments. Honest frames. Cinematic wedding storytelling from first look to last dance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} font-body`}>
        <div className="grain-overlay" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}