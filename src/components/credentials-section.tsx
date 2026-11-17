import { Award, GraduationCap } from "lucide-react";
import { awards, education } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function CredentialsSection() {
  return (
    <section className="section section-credentials" id="education" aria-labelledby="education-title">
      <div className="shell">
        <Reveal>
          <div className="section-heading credentials-heading">
            <div><p className="eyebrow">FOUNDATION <span className="eyebrow-line" /></p><h2 id="education-title">Learning &amp;<br /><span>recognition.</span></h2></div>
          </div>
        </Reveal>
        <div className="credentials-grid">
          <Reveal className="credential-panel education-panel">
            <div className="panel-heading"><span className="panel-icon"><GraduationCap size={17} aria-hidden="true" /></span><h3>Education</h3></div>
            <article className="degree-entry">
              <p className="credential-date">{education.dates}</p>
              <h4>{education.degree}</h4>
              <p>{education.specialization}</p>
              <span className="credential-institution">{education.institution}</span>
            </article>
            <div className="earlier-education">
              {education.earlier.map((item) => (
                <div key={item.institution} className="earlier-entry"><div><strong>{item.institution}</strong><span>{item.qualification}</span></div><time>{item.dates}</time></div>
              ))}
            </div>
          </Reveal>
          <Reveal className="credential-panel awards-panel" delay={0.08}>
            <div className="panel-heading"><span className="panel-icon"><Award size={17} aria-hidden="true" /></span><h3>Certifications &amp; awards</h3></div>
            <ul className="award-list">{awards.map((award, index) => <li key={award}><span className="award-number">0{index + 1}</span><span>{award}</span></li>)}</ul>
            <p className="award-note">A mix of technical training and achievements beyond the classroom.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
