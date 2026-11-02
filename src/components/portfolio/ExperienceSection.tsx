import Image from "next/image";
import { experienceRecords } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section
      className="content-section experience-section"
      id="experience"
      aria-label="Experience"
    >
      <SectionHeading title="EXPERIENCE" />

      {experienceRecords.length ? (
        <ol className="experience-timeline">
          {experienceRecords.map((record, index) => (
            <li
              className="experience-item"
              data-reveal
              key={record.id}
              style={{ transitionDelay: `${Math.min(index * 90, 360)}ms` }}
            >
              <span className="experience-marker" aria-hidden="true" />
              <article className="experience-card">
                <div className="experience-card-heading">
                  {record.companyLogo ? (
                    <Image
                      alt={`${record.organization} logo`}
                      className="experience-logo"
                      height={44}
                      src={record.companyLogo}
                      width={44}
                    />
                  ) : null}
                  <div className="experience-title">
                    <p className="section-kicker">{record.employmentType}</p>
                    <h3>{record.position}</h3>
                    <p className="experience-organization">
                      {record.organization}
                    </p>
                  </div>
                  <p className="experience-dates">
                    {record.startDate} — {record.endDate || "Present"}
                  </p>
                </div>
                <p className="section-copy experience-description">
                  {record.description}
                </p>
                {record.technologies.length ? (
                  <ul className="project-tags experience-technologies">
                    {record.technologies.map((technology) => (
                      <li className="project-tag" key={technology}>
                        {technology}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </li>
          ))}
        </ol>
      ) : (
        <div className="experience-empty" data-reveal>
          <div className="experience-empty-mark" aria-hidden="true">
            <span />
            <span />
          </div>
          <div className="experience-empty-copy">
            <p className="section-kicker">WORK EXPERIENCE</p>
            <h3>Building experience through practice.</h3>
            <p className="section-copy">
              Every expert was once a beginner. I&apos;m currently building my
              skills through hands-on projects and continuous learning.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
