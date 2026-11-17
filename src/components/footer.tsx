import { ArrowDownToLine, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="shell">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="eyebrow">CONTACT <span className="eyebrow-line" /></p>
            <h2>Let&apos;s make<br /><span>the data useful.</span></h2>
            <p>For conversations about analytics, automation, and supply-chain data.</p>
          </div>
          <div className="contact-actions">
            <a className="contact-email" href={`mailto:${profile.email}`}><Mail size={17} aria-hidden="true" />{profile.email}<ArrowUpRight size={16} aria-hidden="true" /></a>
            <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer"><ArrowUpRight size={15} aria-hidden="true" />Connect on LinkedIn</a>
            <a className="contact-link" href={`tel:${profile.phone}`}><Phone size={14} aria-hidden="true" />{profile.phone}</a>
            <span className="contact-location"><MapPin size={14} aria-hidden="true" />{profile.location}</span>
            <a className="contact-resume" href={profile.resumePath} download><ArrowDownToLine size={14} aria-hidden="true" />Download resume</a>
          </div>
        </div>
        <div className="footer-bottom">
          <a className="wordmark footer-wordmark" href="#top"><span className="wordmark-mark">NS</span><span className="wordmark-name">NAFEES SHAIK<span className="wordmark-dot">.</span></span></a>
          <p>Data Analytics &amp; Automation Professional</p>
          <a className="back-to-top" href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}
