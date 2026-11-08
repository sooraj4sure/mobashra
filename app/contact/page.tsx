"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { IG_URL, IG_HANDLE, YOUTUBE_URL, PHONE_DISPLAY, PHONE_TEL, waLink } from "@/app/data";

const OCCASIONS = ["Bridal makeup", "Engagement makeup", "Party makeup", "Haldi / Mehendi makeup", "Hairstyling only", "Something else"];
const PLACES = ["In-studio (Kolkata)", "At my home", "At the venue", "Not decided yet"];

export default function ContactPage() {
  const [occasion, setOccasion] = useState(OCCASIONS[0]);
  const [date, setDate] = useState("");
  const [place, setPlace] = useState(PLACES[0]);
  const [notes, setNotes] = useState("");

  const msg = `Hi Mobashra! I would like to book a makeup slot.\nOccasion: ${occasion}\nDate: ${date || "—"}\nPlace: ${place}${notes ? `\nDetails: ${notes}` : ""}`;

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Book</span>
          <h1>Lock your <em>date.</em></h1>
          <p>
            Tell Mobashra your occasion and date — she replies on WhatsApp with availability and price.
            Limited slots, so early booking is best.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split" style={{ alignItems: "start" }}>
            <Reveal>
              <div className="form-card">
                <h2 style={{ fontSize: 26, marginBottom: 6, color: "var(--maroon-deep)" }}>Book in one message</h2>
                <p style={{ color: "var(--ink-2)", fontSize: 15, marginBottom: 22 }}>
                  Fill this in — it opens WhatsApp with your message ready to send.
                </p>
                <div className="field">
                  <label htmlFor="occasion">Occasion</label>
                  <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    {OCCASIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="date">Date of function</label>
                  <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="field">
                  <label htmlFor="place">Where</label>
                  <select id="place" value={place} onChange={(e) => setPlace(e.target.value)}>
                    {PLACES.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="notes">Anything else? (optional)</label>
                  <textarea id="notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Outfit, look you like, number of people…" />
                </div>
                <a href={waLink(msg)} target="_blank" rel="noreferrer" className="btn btn-wa" style={{ width: "100%" }}>
                  Send booking on WhatsApp →
                </a>
                <p style={{ fontSize: 13.5, color: "var(--muted)", marginTop: 12 }}>
                  No account, no form to submit — your message opens in WhatsApp, you press send.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h2 className="display" style={{ fontSize: 30, marginBottom: 8 }}>Reach her <em>directly</em></h2>
                <div className="contact-line">
                  <div>
                    <b>WhatsApp &amp; calls</b>
                    <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                    <p>Fastest way to book — message first, she confirms your slot.</p>
                  </div>
                </div>
                <div className="contact-line">
                  <div>
                    <b>Instagram</b>
                    <a href={IG_URL} target="_blank" rel="noreferrer">{IG_HANDLE}</a>
                    <p>DM for bookings &amp; enquiries — 17.6K followers, 2,100+ looks.</p>
                  </div>
                </div>
                <div className="contact-line">
                  <div>
                    <b>YouTube</b>
                    <a href={YOUTUBE_URL} target="_blank" rel="noreferrer">@makeupbymobashra5051</a>
                    <p>Watch her makeup and hairstyling work.</p>
                  </div>
                </div>
                <div className="contact-line">
                  <div>
                    <b>Location</b>
                    <p style={{ fontWeight: 700, color: "var(--maroon)", fontSize: 17 }}>Kolkata</p>
                    <p>In-studio or at your home — mention your area when you book.</p>
                  </div>
                </div>
                <div style={{ marginTop: 24 }}>
                  <a href={waLink("Hi Mobashra! I have a question about your makeup services.")} target="_blank" rel="noreferrer" className="btn btn-rose">
                    Just ask a question →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
