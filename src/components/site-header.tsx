"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mobileNavigation = window.matchMedia("(max-width: 820px)");
    const handleBreakpointChange = () => {
      const navigation = document.getElementById("primary-navigation");
      const activeElement = document.activeElement;

      if (mobileNavigation.matches && activeElement instanceof HTMLElement && navigation?.contains(activeElement)) {
        menuToggleRef.current?.focus();
      } else if (!mobileNavigation.matches && activeElement === menuToggleRef.current) {
        navigation?.querySelector("a")?.focus();
      }

      setIsOpen(false);
    };

    mobileNavigation.addEventListener("change", handleBreakpointChange);
    return () => mobileNavigation.removeEventListener("change", handleBreakpointChange);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuToggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a className="wordmark" href="#top" aria-label={`${profile.name} — home`} onClick={() => setIsOpen(false)}>
          <span className="wordmark-mark">NS</span>
          <span className="wordmark-name">NAFEES SHAIK<span className="wordmark-dot">.</span></span>
        </a>
        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav id="primary-navigation" className={`nav-links${isOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setIsOpen(false)}>
            Let&apos;s talk <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
