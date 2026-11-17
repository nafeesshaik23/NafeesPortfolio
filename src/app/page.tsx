import { LoadingScreen } from "@/components/loading-screen";
import { AboutSection } from "@/components/about-section";
import { CredentialsSection } from "@/components/credentials-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { ImpactSection } from "@/components/impact-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <ImpactSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <CredentialsSection />
      </main>
      <Footer />
    </>
  );
}