import { skillGroups } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function SkillsSection() {
  return (
    <section className="section section-skills" id="skills" aria-labelledby="skills-title">
      <div className="shell">
        <Reveal>
          <div className="section-heading">
            <div><p className="eyebrow">CAPABILITIES <span className="eyebrow-line" /></p><h2 id="skills-title">A toolkit for<br /><span>the whole data flow.</span></h2></div>
            <p className="section-note">Grouped by how the tools support the work—not as a wall of logos.</p>
          </div>
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05} className={`skill-card skill-card-${index + 1}`}>
              <p className="skill-index">0{index + 1} <span>/ CAPABILITY</span></p>
              <h3>{group.title}</h3>
              <ul className="skill-tags">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
