import Image from "next/image";
import { projects, type Project } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import TechnologyIcon from "./TechnologyIcon";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="project-card"
      data-project-id={project.id}
      data-reveal
      style={{ transitionDelay: `${Math.min(index * 100, 400)}ms` }}
    >
      <div className="project-preview">
        <Image
          alt={`${project.title} project preview`}
          className="project-image"
          fill
          sizes="(max-width: 760px) calc(100vw - 80px), (max-width: 1100px) 50vw, 40vw"
          src={project.image}
        />
      </div>
      <div className="project-details">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          {project.featured ? (
            <span className="project-number">FEATURED</span>
          ) : null}
        </div>
        <p className="project-category">{project.category}</p>
        <p className="section-copy project-description">{project.description}</p>
        <div className="project-tech">
          <span className="project-tech-label">TECHNOLOGIES</span>
          <ul className="project-tags project-technologies">
            {project.technologies.map((technology) => (
              <li className="project-technology" key={technology.id}>
                <TechnologyIcon id={technology.id} />
                <span>{technology.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <ul className="project-features">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        {project.githubUrl || project.liveUrl || project.detailsUrl ? (
          <div className="project-links">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
              >
                GITHUB <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
              >
                LIVE DEMO <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            {project.detailsUrl ? (
              <a href={project.detailsUrl}>VIEW DETAILS</a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section className="content-section projects-section" id="projects">
      <SectionHeading title="PROJECTS" />
      <p className="section-kicker projects-kicker" data-reveal>
        ACADEMIC &amp; LEARNING PROJECTS
      </p>
      {projects.length ? (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      ) : (
        <div className="projects-empty-state" data-reveal>
          <span className="projects-empty-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <div>
            <h3>Project information coming soon.</h3>
            <p>
              Academic and learning projects will be shared here as their
              details are added.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
