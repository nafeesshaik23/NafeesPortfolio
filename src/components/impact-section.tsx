import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const metrics = [
  {
    value: "90%",
    label: "reported reduction in manual reporting time",
    context: "Python pipeline for SAP Sales Order reporting · baseline and measurement period not specified",
    className: "impact-wide",
  },
  {
    value: "10K+",
    label: "rows processed",
    context: "SAP dumps and daily planning files · volume reported in professional experience",
    className: "",
  },
  {
    value: "100%",
    label: "reported data accuracy",
    context: "Automated SAP Data Extraction project · evaluation scope and method not specified",
    className: "impact-project",
  },
];

export function ImpactSection() {
  return (
    <section className="section section-impact" id="impact" aria-labelledby="impact-title">
      <div className="shell">
        <Reveal>
          <div className="section-heading impact-heading">
            <div>
              <p className="eyebrow">SELECTED IMPACT <span className="eyebrow-line" /></p>
              <h2 id="impact-title">Impact, as reported.<br /><span>With context attached.</span></h2>
            </div>
            <p className="section-note">Figures are portfolio-reported and tied to their experience or project; measurement details are noted where available.</p>
          </div>
        </Reveal>
        <div className="impact-grid">
          {metrics.map((metric, index) => (
            <Reveal key={metric.value} delay={index * 0.08} className={`impact-card ${metric.className}`}>
              <div className="impact-card-top"><span>0{index + 1} / IMPACT</span><ArrowUpRight size={15} aria-hidden="true" /></div>
              <p className="impact-value">{metric.value}</p>
              <h3>{metric.label}</h3>
              <p className="impact-context">{metric.context}</p>
              <div className="impact-card-rule" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
