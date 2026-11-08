import Reveal from "@/components/Reveal";
import { SERVICES, waLink } from "@/app/data";

export const metadata = { title: "Services — Mobashra, Bridal Makeup Artist Kolkata" };

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Services</span>
          <h1>Bridal, engagement, party — <em>every look, done properly.</em></h1>
          <p>
            HD &amp; waterproof makeup with hairstyling, in-studio or at your home in Kolkata.
            Bridal from ₹5,000 is confirmed — other prices shown are samples, finalised on WhatsApp.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 0.08}>
                <article className="card">
                  <div className="card-media">
                    <img src={s.img} alt={`${s.name} — sample photo`} loading="lazy" />
                    <span className="card-tag">{s.name}</span>
                  </div>
                  <div className="card-body">
                    <h3>{s.name}</h3>
                    <p style={{ color: "var(--rose)", fontWeight: 600 }}>{s.tagline}</p>
                    <p>{s.text}</p>
                    <ul className="card-list">
                      {s.includes.map((x) => <li key={x}>{x}</li>)}
                    </ul>
                    <div className="card-foot">
                      <span className="price">{s.priceNote}{s.samplePrice && <small> · Sample price</small>}</span>
                      <a
                        href={waLink(`Hi Mobashra! I would like to book ${s.name}.`)}
                        target="_blank" rel="noreferrer" className="btn btn-rose btn-sm"
                      >
                        Book this →
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="note">
            <b>About prices:</b> bridal makeup from ₹5,000 is Mobashra&apos;s confirmed starting price.
            All other prices on this page are samples — she confirms your exact price on WhatsApp
            once she knows your date, look and location.
          </p>
        </div>
      </section>
    </>
  );
}
