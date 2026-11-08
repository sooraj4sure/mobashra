import Link from "next/link";
import { IG_URL, IG_HANDLE, YOUTUBE_URL, PHONE_DISPLAY, PHONE_TEL, waLink } from "@/app/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <h4>Mobashra</h4>
          <p>
            Bridal makeup artist in Kolkata since 2019. HD &amp; waterproof bridal,
            engagement, party and haldi-mehendi makeup — in-studio and at your home.
          </p>
          <p style={{ marginTop: 12 }}>
            <a href={IG_URL} target="_blank" rel="noreferrer">{IG_HANDLE}</a>
            {" · "}
            <a href={YOUTUBE_URL} target="_blank" rel="noreferrer">YouTube</a>
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/packages">Packages &amp; Pricing</Link></li>
            <li><Link href="/about">About Mobashra</Link></li>
            <li><Link href="/contact">Book a slot</Link></li>
          </ul>
        </div>
        <div>
          <h4>Book</h4>
          <ul>
            <li><a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></li>
            <li><a href={waLink("Hi Mobashra! I would like to book a makeup slot.")} target="_blank" rel="noreferrer">WhatsApp — chat now</a></li>
            <li><a href={IG_URL} target="_blank" rel="noreferrer">Instagram DM</a></li>
          </ul>
          <p style={{ marginTop: 12 }}>Kolkata · Limited slots — book your date early.</p>
        </div>
      </div>
      <div className="demo-strip">Demo website by <b>Evenlyn Studio</b> · Photos are stand-ins — Mobashra&apos;s own photos at launch</div>
    </footer>
  );
}
