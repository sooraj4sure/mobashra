import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ABOUT_IMG, IG_URL, IG_HANDLE, YOUTUBE_URL, waLink } from "@/app/data";

export const metadata = { title: "About Mobashra — Bridal Makeup Artist, Kolkata" };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">About</span>
          <h1>Hi, I&apos;m <em>Mobashra.</em></h1>
          <p>Bridal makeup artist in Kolkata — making brides feel like themselves, only more radiant, since 2019.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <Reveal>
              <div className="split-media">
                <img src={ABOUT_IMG} alt="Makeup artist at work — sample photo" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <span className="eyebrow">Her story</span>
                <h2 className="display" style={{ marginBottom: 16 }}>Your special day, <em>her beautiful creation.</em></h2>
                <p className="lead" style={{ marginBottom: 14 }}>
                  Mobashra has been doing bridal makeup in Kolkata since 2019 — bridal, engagement,
                  party and haldi-mehendi looks, with the hairstyling to match.
                </p>
                <p style={{ color: "var(--ink-2)", marginBottom: 14 }}>
                  Her work is HD and waterproof, made to last through long ceremonies, happy tears
                  and a full day of photos. Brides book her in-studio or at home, and her looks
                  travel across her Instagram — more than 2,100 posts of brides, engagements and
                  party glam, followed by over 17,000 people.
                </p>
                <p style={{ color: "var(--ink-2)" }}>
                  Every detail matters when it&apos;s your special day — and that is how she works:
                  the right base, the right lashes, the right hair, so you look like you on your best day.
                </p>
                <div className="stat-row">
                  <div className="hero-stat"><b>2019</b><span>Doing brides since</span></div>
                  <div className="hero-stat"><b>17.6K</b><span>Instagram followers</span></div>
                  <div className="hero-stat"><b>2,100+</b><span>Looks shared</span></div>
                </div>
                <div className="hero-actions" style={{ marginTop: 28 }}>
                  <a href={waLink("Hi Mobashra! I would like to know more about your bridal makeup.")} target="_blank" rel="noreferrer" className="btn btn-wa">Chat on WhatsApp →</a>
                  <a href={IG_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">Instagram · {IG_HANDLE}</a>
                </div>
              </div>
            </Reveal>
          </div>

          <div style={{ marginTop: 64 }}>
            <Reveal>
              <div className="section-head">
                <span className="eyebrow">What she is known for</span>
                <h2 className="display">The details <em>brides remember</em></h2>
              </div>
            </Reveal>
            <div className="grid grid-3">
              {[
                { t: "HD & waterproof", d: "Long-lasting makeup that holds through ceremonies, photos and happy tears." },
                { t: "Hairstyling included", d: "Romantic curls, braids and delicate floral details — the hair completes the look." },
                { t: "Studio or your home", d: "Book her in-studio in Kolkata, or at your home for the wedding morning." },
                { t: "Every occasion", d: "Bridal, engagement, party, haldi and mehendi — one artist for all your functions." },
                { t: "Bookings open", d: "Limited slots, especially in wedding season. Your date is locked once you message." },
                { t: "Watch her work", d: "Her reels and looks are all on Instagram — and her YouTube channel, @makeupbymobashra5051." },
              ].map((c, i) => (
                <Reveal key={c.t} delay={(i % 3) * 0.08}>
                  <article className="card step">
                    <h3>{c.t}</h3>
                    <p>{c.d}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <p style={{ marginTop: 22 }}>
              <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="card-link">Watch Mobashra on YouTube →</a>
              {" · "}
              <Link href="/gallery" className="card-link">See the gallery →</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
