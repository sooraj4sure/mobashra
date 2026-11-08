"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { GALLERY, GALLERY_CATS } from "@/app/data";

export default function GalleryPage() {
  const [cat, setCat] = useState<string>("All");
  const items = cat === "All" ? GALLERY : GALLERY.filter((g) => g.cat === cat);
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Gallery</span>
          <h1>Looks from <em>the chair.</em></h1>
          <p>
            Bridal, engagement, party, haldi-mehendi and hairstyling — filter by occasion.
            Photos here are stand-ins; Mobashra&apos;s own work replaces them at launch.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="filters">
            {GALLERY_CATS.map((c) => (
              <button
                key={c}
                className={`filter-btn${cat === c ? " active" : ""}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid-3">
            {items.map((g, i) => (
              <Reveal key={g.title + g.img} delay={(i % 3) * 0.06}>
                <figure className="g-item" style={{ margin: 0 }}>
                  <img src={g.img} alt={`${g.title} — sample photo`} loading="lazy" />
                  <figcaption><span>{g.cat}</span>{g.title}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="note">
            <b>Demo note:</b> these are sample photos. The live site will show Mobashra&apos;s real
            bridal, engagement and party looks from her Instagram, @makeup_by_mobashra.
          </p>
        </div>
      </section>
    </>
  );
}
