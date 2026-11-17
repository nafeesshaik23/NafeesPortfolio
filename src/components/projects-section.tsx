import { Layers3 } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function ProjectsSection() {
  return (
    <section className="section section-work" id="work" aria-labelledby="work-title">
      <div className="shell">
        <Reveal>
          <div className="section-heading work-heading">
            <div>
              <p className="eyebrow">SELECTED PROJECTS <span className="eyebrow-line" /></p>
              <h2 id="work-title">Built around real<br /><span>operational problems.</span></h2>
            </div>
            <p className="section-note">Automation, data quality, and analytics—applied to the systems and workflows behind the work.</p>
          </div>
        </Reveal>
        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.06}>
              <article className={`project-card${index === 0 ? " project-card-featured" : ""}`}>
                <div className="project-visual" aria-hidden="true">
                  <div className="project-visual-top"><span>{project.number} / CASE FILE</span><Layers3 size={17} /></div>
                  <div className={`project-glyph project-glyph-${index + 1}`}>
                    {index === 0 ? (
                      <><span className="glyph-node glyph-source">SAP</span><span className="glyph-line" /><span className="glyph-node glyph-process">ETL</span><span className="glyph-line" /><span className="glyph-node glyph-output">REPORT</span></>
                    ) : index === 1 ? (
                      <><span className="glyph-grid-cell">01</span><span className="glyph-grid-cell">02</span><span className="glyph-grid-cell">03</span><span className="glyph-grid-cell glyph-grid-accent">SQL</span><span className="glyph-grid-cell">ETL</span><span className="glyph-grid-cell">BI</span></>
                    ) : (
                      <><span className="retina-ring ring-one" /><span className="retina-ring ring-two" /><span className="retina-core">CNN</span><span className="retina-label">IMAGE MODEL / EDGE</span></>
                    )}
                  </div>
                  <div className="project-visual-bottom"><span>{project.category}</span><span className="project-visual-marker" /></div>
                </div>
                <div className="project-content">
                  <div className="project-title-row">
                    <p className="project-number">{project.number}</p>
                    <div><p className="eyebrow project-category">{project.category}</p><h3>{project.title}</h3></div>
                  </div>
                  <p className="project-subtitle">{project.subtitle}</p>
                  {project.featuredMetric && <p className="project-metric-note"><span className="status-dot" />{project.featuredMetric}</p>}
                  <div className="project-outcome">
                    <h4>Outcome / evidence</h4>
                    <p>{project.outcome}</p>
                  </div>
                  <div className="project-facts">
                    <div className="project-fact"><h4>Problem</h4><p>{project.problem}</p></div>
                    <div className="project-fact"><h4>Approach</h4><p>{project.solution}</p></div>
                    <div className="project-fact"><h4>My contribution</h4><ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul></div>
                  </div>
                  <div className="project-detail-row">
                    <div className="project-detail"><h4>Technology stack</h4><ul className="tag-list">{project.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
                    <details className="project-technical-details">
                      <summary>Technical details</summary>
                      <ul className="technical-list">{project.technicalDetails.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                    </details>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
