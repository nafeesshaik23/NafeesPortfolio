import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function ExperienceSection() {
  return (
    <section className="section section-experience" id="experience" aria-labelledby="experience-title">
      <div className="shell experience-shell">
        <Reveal className="experience-intro">
          <p className="eyebrow">PROFESSIONAL EXPERIENCE <span className="eyebrow-line" /></p>
          <h2 id="experience-title">Where data<br /><span>meets the day-to-day.</span></h2>
          <p className="section-note">Supply-chain operations, SAP workflows, reporting, and reconciliation—inside the work.</p>
        </Reveal>
        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal key={item.role} delay={index * 0.08}>
              <article className="timeline-item">
                <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
                <div className="timeline-content">
                  <div className="timeline-meta"><span>{item.dates}</span>{item.location && <span>{item.location}</span>}</div>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                  {item.client && <p className="timeline-client">Client <span>{item.client}</span></p>}
                  <p className="timeline-summary">{item.summary}</p>
                  <ul className="experience-highlights">
                    {item.highlights.map((highlight) => <li key={highlight}><span className="bullet-mark" aria-hidden="true">↳</span>{highlight}</li>)}
                  </ul>
                  {index === 0 && <a className="inline-anchor" href="#impact">Explore selected impact <ArrowUpRight size={14} aria-hidden="true" /></a>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
