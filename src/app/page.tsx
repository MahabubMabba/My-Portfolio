import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import Hero from "@/components/portfolio/Hero";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ScrollEffects from "@/components/portfolio/ScrollEffects";
import SiteFooter from "@/components/portfolio/SiteFooter";
import SiteHeader from "@/components/portfolio/SiteHeader";
import SkillsSection from "@/components/portfolio/SkillsSection";

export default function Home() {
  return (
    <main className="portfolio">
      <ScrollEffects />
      <SiteHeader />
      <div className="portfolio-sections">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <SiteFooter />
    </main>
  );
}
