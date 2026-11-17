import { ArrowDown, ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

const technologies = ["Python", "SQL", "SAP", "Power BI", "ETL"];

export function Hero() {
  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> DATA · AUTOMATION · OPERATIONS</p>
        <h1 id="hero-title"><span className="hero-title-line">Data Analytics &amp;</span><span className="hero-title-line">Automation</span><span className="hero-title-line hero-title-last">Professional</span></h1>
        <p className="hero-statement">{profile.statement}</p>
        <ul className="tech-highlights" aria-label="Core technologies">
          {technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore My Work <ArrowDownRight size={16} aria-hidden="true" /></a>
          <a className="button button-secondary" href={profile.resumePath} download>
            Download Resume <Download size={15} aria-hidden="true" />
          </a>
          <a className="text-link hero-contact" href="#contact">Contact <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="hero-art-top"><span>OPERATIONS / DATA FLOW</span><span className="art-live"><i /> CONNECTED</span></div>
        <div className="flow-map">
          <div className="flow-grid" />
          <svg className="flow-lines" viewBox="0 0 500 330" fill="none" preserveAspectRatio="none">
            <path d="M28 166H142C168 166 170 77 202 77H296" />
            <path d="M28 166H142C168 166 170 248 202 248H296" />
            <path d="M296 77C325 77 320 162 352 162H474" />
            <path d="M296 248C325 248 320 162 352 162" />
            <circle cx="142" cy="166" r="4" /><circle cx="296" cy="77" r="4" /><circle cx="296" cy="248" r="4" />
          </svg>
          <div className="flow-node node-source"><span className="node-index">01 / SOURCE</span><strong>SAP data</strong><span>Operational records</span></div>
          <div className="flow-node node-transform"><span className="node-index">02 / TRANSFORM</span><strong>Python + ETL</strong><span>Validate · reconcile</span></div>
          <div className="flow-node node-insight"><span className="node-index">03 / INSIGHT</span><strong>Reporting</strong><span>Actionable visibility</span></div>
          <div className="flow-orbit"><span>DATA<br />→<br />DECISIONS</span></div>
          <span className="flow-coordinate coord-one">EXTRACT → VALIDATE</span>
          <span className="flow-coordinate coord-two">REPORT → ACT</span>
        </div>
        <div className="hero-art-foot"><span>FROM EXTRACTION TO OPERATIONAL CLARITY</span><ArrowDown size={14} /></div>
      </div>
      <a className="scroll-cue" href="#impact"><span>SCROLL TO EXPLORE</span><span className="scroll-cue-line" /></a>
    </section>
  );
}
