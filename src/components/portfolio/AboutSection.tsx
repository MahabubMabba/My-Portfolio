import CredentialsSection from "./CredentialsSection";
import EducationTimeline from "./EducationTimeline";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section className="content-section about-section" id="about">
      <SectionHeading title="ABOUT ME" />
      <div className="about-grid">
        <div className="about-intro" data-reveal>
          <p className="section-kicker">A LITTLE ABOUT ME</p>
          <h3 className="about-statement">
            Thoughtful code.
            <br />
            Meaningful experiences.
          </h3>
          <p className="section-copy">
            I&apos;m Mahabub Hasan, a full stack developer based in Bangladesh.
            I build functional, modern web experiences with clean code and
            thoughtful design.
          </p>
        </div>
        <EducationTimeline />
      </div>
      <CredentialsSection />
    </section>
  );
}
