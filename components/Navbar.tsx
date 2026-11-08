"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { waLink } from "@/app/data";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/packages", label: "Packages" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Book" },
];

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">
          <span className="brand-name">Mobashra</span>
          <span className="brand-tag">Bridal Makeup · Kolkata</span>
        </Link>
        <div className={`nav-links${open ? " open" : ""}`}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={path === l.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a href={waLink("Hi Mobashra! I would like to book a makeup slot.")} target="_blank" rel="noreferrer" className="nav-cta" onClick={() => setOpen(false)}>
            Book on WhatsApp
          </a>
        </div>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
          ☰
        </button>
      </div>
    </nav>
  );
}
