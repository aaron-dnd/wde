import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppWidget from "@/components/WhatsAppWidget";

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
    "Wedding Documentary Events captures real, unscripted love stories - from engagement to reception - through cinematic film and fine-art photography.",
  openGraph: {
    title: "Wedding Documentary Events | Cinematic Wedding Films & Photography",
    description:
      "Real moments. Honest frames. Cinematic wedding storytelling from first look to last dance.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://weddingdocumentaryevents.com", // Assuming domain, using canonical structure
  "name": "Wedding Documentary Events",
  "alternateName": "WDE",
  "description": "Wedding Documentary Events captures real, unscripted love stories from engagement to reception through cinematic film and fine-art photography.",
  "url": "https://weddingdocumentaryevents.com",
  "telephone": "+91 95738 24261",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.3850,
    "longitude": 78.4867
  },
  "areaServed": {
    "@type": "State",
    "name": "Telangana"
  },
  "sameAs": [
    "https://www.facebook.com/weddingdocumentaryevents",
    "https://www.instagram.com/weddingdocumentaryevents"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${display.variable} ${body.variable} font-body`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <div className="grain-overlay" />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}