import { ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

const journey = ["Data", "Automation", "SAP", "Supply Chain", "Business Impact"];

export function AboutSection() {
  return (
    <section className="section section-about" id="about" aria-labelledby="about-title">
      <div className="shell about-layout">
        <Reveal className="about-heading">
          <p className="eyebrow">A LITTLE ABOUT ME <span className="eyebrow-line" /></p>
          <h2 id="about-title">Turning operational data into <span>useful work.</span></h2>
        </Reveal>
        <Reveal className="about-copy" delay={0.08}>
          <p className="about-lead">I focus on making operational data more dependable and easier to act on.</p>
          <p>My work includes extracting and validating SAP data, reconciling orders, deliveries, invoices, and receipts, and shaping the results into operational reports.</p>
          <p>That mix of workflow context and data tooling is what I bring to supply-chain and logistics problems.</p>
          <a className="inline-anchor" href={`mailto:${profile.email}`}>Start a conversation <ArrowRight size={14} aria-hidden="true" /></a>
        </Reveal>
        <Reveal className="about-flow" delay={0.12}>
          <p className="eyebrow">HOW THE WORK CONNECTS</p>
          <ol aria-label="Data to business impact">
            {journey.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}{index < journey.length - 1 && <ArrowRight className="journey-arrow" size={14} aria-hidden="true" />}</li>)}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
