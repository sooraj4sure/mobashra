import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import SampleStrip from "@/components/SampleStrip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { waLink } from "@/app/data";

const display = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"], style: ["normal", "italic"], variable: "--font-display" });
const body = Jost({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Mobashra — Bridal Makeup Artist, Kolkata",
  description:
    "Mobashra (@makeup_by_mobashra) — Kolkata bridal makeup artist since 2019. HD & waterproof bridal, engagement, party and haldi-mehendi makeup, in-studio and at home. Book on WhatsApp.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        {/* <SampleStrip /> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <a
          className="float-wa"
          href={waLink("Hi Mobashra! I would like to book a makeup slot.")}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Mobashra on WhatsApp"
        >
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 2 6.5L4 29l7.7-2c1.8.9 3.9 1.5 6.3 1.5 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22.3c-2 0-3.9-.5-5.5-1.5l-.4-.2-4.6 1.2 1.2-4.5-.3-.4c-1-1.6-1.6-3.5-1.6-5.4C4.8 9.5 9.9 4.7 16 4.7S27.2 9.5 27.2 15.5 22.1 25.3 16 25.3zm6.2-7.7c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.8.1-.3-.2-1.4-.5-2.7-1.7-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6-.1-.2-.8-1.8-1-2.5-.3-.6-.5-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.4c.2.2 2.3 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.2 1.5.2 2 .1.6-.1 2-.8 2.2-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.7-.4z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
