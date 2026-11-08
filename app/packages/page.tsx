import Reveal from "@/components/Reveal";
import { PACKAGES, PACKAGES_IMG, waLink } from "@/app/data";

export const metadata = { title: "Packages & Pricing — Mobashra, Bridal Makeup Artist Kolkata" };

export default function PackagesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Packages &amp; Pricing</span>
          <h1>Simple packages, <em>honest prices.</em></h1>
          <p>
            Bridal from ₹5,000 is confirmed. Other packages below are samples to show how
            pricing will look — Mobashra confirms your exact price on WhatsApp.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid-2">
            {PACKAGES.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 0.08}>
                <article className="card">
                  <div className="card-body">
                    <span className="eyebrow" style={{ marginBottom: 0 }}>{p.best}</span>
                    <h3 style={{ fontSize: 28 }}>{p.name}</h3>
                    <span className="price">{p.priceNote}{p.samplePrice && <small> · Sample price</small>}</span>
                    <ul className="card-list">
                      {p.points.map((x) => <li key={x}>{x}</li>)}
                    </ul>
                    <div className="card-foot">
                      <a
                        href={waLink(`Hi Mobashra! I am interested in the ${p.name} package.`)}
                        target="_blank" rel="noreferrer" className="btn btn-rose btn-sm"
                      >
                        Enquire on WhatsApp →
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="split" style={{ marginTop: 56 }}>
            <div className="split-media" style={{ aspectRatio: "4 / 3" }}>
              <img src={PACKAGES_IMG} alt="Makeup kit — sample photo" loading="lazy" />
            </div>
            <div>
              <span className="eyebrow">Good to know</span>
              <h2 className="display" style={{ marginBottom: 14 }}>Before you <em>book</em></h2>
              <ul className="checks">
                <li>Bridal, engagement, party and haldi-mehendi makeup — plus hairstyling.</li>
                <li>HD &amp; waterproof, long-lasting makeup that holds through the whole function.</li>
                <li>In-studio in Kolkata, or at your home — tell her where when you book.</li>
                <li>Limited slots, especially in wedding season — book your date early.</li>
                <li>Final price is confirmed on WhatsApp once she knows your date, look and location.</li>
              </ul>
              <div style={{ marginTop: 26 }}>
                <a
                  href={waLink("Hi Mobashra! Please share your packages and prices.")}
                  target="_blank" rel="noreferrer" className="btn btn-maroon"
                >
                  Ask for prices on WhatsApp →
                </a>
              </div>
            </div>
          </div>

          <p className="note">
            <b>About prices:</b> only bridal from ₹5,000 is a confirmed price from Mobashra.
            Every other price on this page is a sample, shown so you can see how the site will look —
            the live site carries her real packages and prices.
          </p>
        </div>
      </section>
    </>
  );
}
