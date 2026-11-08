import Link from "next/link";
import Reveal from "@/components/Reveal";
import { HERO_IMG, IG_URL, IG_HANDLE, SERVICES, GALLERY, waLink, WA_BASE } from "@/app/data";

const FEATURED = SERVICES.slice(0, 3);
const PREVIEW = GALLERY.slice(0, 4);

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero-media">
          <img src={HERO_IMG} alt="Bridal makeup being applied" />
          <div className="hero-content">
            <div className="wrap">
              <span className="hero-kicker">✦ {IG_HANDLE} · Kolkata · Since 2019</span>
              <h1 className="display">
                Bridal beauty, made for <em>your big day.</em>
              </h1>
              <p className="hero-sub">
                HD &amp; waterproof bridal, engagement and party makeup in Kolkata —
                flawless from the first photo to the last dance, in-studio or at your home.
              </p>
              <div className="hero-actions">
                <a href={waLink("Hi Mobashra! I saw your website and would like to book a makeup slot.")} target="_blank" rel="noreferrer" className="btn btn-wa">Book on WhatsApp →</a>
                <Link href="/services" className="btn btn-ghost">View services</Link>
              </div>
              <div className="hero-strip">
                <div className="hero-stat"><b>2019</b><span>Doing brides since</span></div>
                <div className="hero-stat"><b>17.6K</b><span>Instagram followers</span></div>
                <div className="hero-stat"><b>2,100+</b><span>Looks shared</span></div>
                <div className="hero-stat"><b>₹5,000</b><span>Bridal from</span></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">What she does</span>
              <h2 className="display">Every occasion, <em>one flawless look</em></h2>
              <p>Bridal, engagement, party and haldi-mehendi makeup — plus the hairstyling that completes it.</p>
            </div>
          </Reveal>
          <div className="grid grid-3">
            {FEATURED.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <article className="card">
                  <div className="card-media">
                    <img src={s.img} alt={`${s.name} — sample photo`} loading="lazy" />
                    <span className="card-tag">{s.name}</span>
                  </div>
                  <div className="card-body">
                    <h3>{s.name}</h3>
                    <p>{s.text}</p>
                    <div className="card-foot">
                      <span className="price">{s.priceNote}{s.samplePrice && <small> · Sample price</small>}</span>
                      <Link href="/services" className="card-link">Details →</Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p style={{ marginTop: 22 }}>
              <Link href="/services" className="card-link">See all services, including haldi-mehendi makeup &amp; hairstyling →</Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-2)", paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">How booking works</span>
              <h2 className="display">Three steps to <em>your date</em></h2>
            </div>
          </Reveal>
          <div className="grid grid-3 steps">
            {[
              { n: "1", t: "Message on WhatsApp", d: "Tell Mobashra your date, occasion and where — studio or your home." },
              { n: "2", t: "Pick your look", d: "Share your outfit and ideas; she confirms the look, time and price." },
              { n: "3", t: "Get glammed", d: "HD, waterproof makeup and hairstyling — ready for every photo of the day." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <article className="card step">
                  <div className="step-num">{s.n}</div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Recent looks</span>
              <h2 className="display">From her <em>chair</em></h2>
              <p>Sample photos for now — Mobashra&apos;s own bridal and party looks take their place at launch.</p>
            </div>
          </Reveal>
          <div className="grid grid-2">
            {PREVIEW.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.06}>
                <figure className="g-item" style={{ margin: 0 }}>
                  <img src={g.img} alt={`${g.title} — sample photo`} loading="lazy" />
                  <figcaption><span>{g.cat}</span>{g.title}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p style={{ marginTop: 22 }}>
              <Link href="/gallery" className="card-link">Browse the full gallery →</Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="cta-band">
              <h2>Your date is waiting. <em>Book it now.</em></h2>
              <p>Limited slots — bridal dates go fast. Message Mobashra on WhatsApp and lock yours in.</p>
              <div className="hero-actions">
                <a href={waLink("Hi Mobashra! I would like to book a makeup slot. My date is: ")} target="_blank" rel="noreferrer" className="btn btn-wa">Book on WhatsApp →</a>
                <a href={IG_URL} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ color: "#fff", borderColor: "#f3ddd8" }}>See her Instagram</a>
              </div>
            </div>
          </Reveal>
          <p className="note"><b>Demo note:</b> photos on this site are stand-ins. Mobashra&apos;s own photos and final prices replace them at launch — bridal from ₹5,000 is confirmed; other prices shown are samples.</p>
        </div>
      </section>
    </>
  );
}
