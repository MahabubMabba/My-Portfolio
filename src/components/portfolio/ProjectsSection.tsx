"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type UIEvent,
} from "react";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import TechnologyIcon from "./TechnologyIcon";

function ProjectCategoryIcon({ category }: { category: ProjectCategory }) {
  if (category === "full-stack") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20">
        <rect x="3" y="3" width="14" height="5" rx="1" />
        <rect x="3" y="12" width="14" height="5" rx="1" />
        <path d="M7 5.5h.01M7 14.5h.01" />
      </svg>
    );
  }

  if (category === "frontend") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20">
        <rect x="2.5" y="3" width="15" height="14" rx="1.5" />
        <path d="M2.5 7h15M6 3v4" />
      </svg>
    );
  }

  if (category === "backend") {
    return (
      <svg aria-hidden="true" viewBox="0 0 20 20">
        <rect x="3" y="2.5" width="14" height="6" rx="1" />
        <rect x="3" y="11.5" width="14" height="6" rx="1" />
        <path d="M6 5.5h.01M6 14.5h.01M9 5.5h5M9 14.5h5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 20 20">
      <path d="M3 4.5c2.5-1.5 4.8-1.5 7 0v12c-2.2-1.5-4.5-1.5-7 0v-12ZM17 4.5c-2.5-1.5-4.8-1.5-7 0v12c2.2-1.5 4.5-1.5 7 0v-12Z" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const categoryLabel =
    projectCategories.find(({ id }) => id === project.category)?.label ??
    project.category;

  return (
    <article
      className="project-card"
      data-project-id={project.id}
      data-reveal
    >
      {project.image ? (
        <div className="project-preview">
          <Image
            alt={`${project.title} project preview`}
            className="project-image"
            fill
            sizes="(max-width: 620px) calc(100vw - 56px), (max-width: 900px) 50vw, 33vw"
            src={project.image}
          />
        </div>
      ) : (
        <div className="project-preview project-preview-placeholder">
          <span>PREVIEW NOT PROVIDED</span>
        </div>
      )}
      <div className="project-details">
        <div className="project-title-row">
          <div className="project-title-copy">
            <p className="project-category">{categoryLabel}</p>
            <h3>{project.title}</h3>
          </div>
          {project.featured ? (
            <span className="project-number">FEATURED</span>
          ) : null}
        </div>
        {project.description ? (
          <p className="section-copy project-description">
            {project.description}
          </p>
        ) : null}
        {project.technologies.length > 0 ? (
          <ul
            className="project-tags project-technologies"
            aria-label="Technologies"
          >
            {project.technologies.map((technology) => (
              <li className="project-technology" key={technology.id}>
                <TechnologyIcon id={technology.id} />
                <span>{technology.name}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {project.features.length > 0 ? (
          <ul className="project-features">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        ) : null}
        <div className="project-links">
          {project.githubUrl ? (
            <a
              className="project-link-secondary"
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
              className="project-link-primary"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
            >
              LIVE DEMO <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          {project.detailsUrl ? (
            <a
              className="project-link-secondary"
              href={project.detailsUrl}
              aria-label={`${project.title} project details`}
            >
              DETAILS <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectCarousel({
  activeProjects,
}: {
  activeProjects: Project[];
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(activeProjects.length <= visibleCount);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(
        window.matchMedia("(max-width: 620px)").matches
          ? 1
          : window.matchMedia("(max-width: 900px)").matches
            ? 2
            : 3,
      );
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    viewport.scrollTo({ left: 0, behavior: "instant" });
    setAtStart(true);
    setAtEnd(activeProjects.length <= visibleCount);
  }, [activeProjects, visibleCount]);

  function updateScrollState(event: UIEvent<HTMLDivElement>) {
    const viewport = event.currentTarget;
    setAtStart(viewport.scrollLeft <= 1);
    setAtEnd(
      viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 1,
    );
  }

  function moveCarousel(direction: -1 | 1) {
    const viewport = viewportRef.current;
    const card = viewport?.querySelector<HTMLElement>(".project-card");
    const track = viewport?.firstElementChild;
    if (!viewport || !card || !track) {
      return;
    }

    const gap = Number.parseFloat(getComputedStyle(track).columnGap);
    viewport.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  }

  function handleCarouselKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (event.key === "ArrowRight" && !atEnd) {
      event.preventDefault();
      moveCarousel(1);
    } else if (event.key === "ArrowLeft" && !atStart) {
      event.preventDefault();
      moveCarousel(-1);
    } else if (event.key === "Home") {
      event.preventDefault();
      viewportRef.current?.scrollTo({ left: 0, behavior: "smooth" });
    } else if (event.key === "End") {
      event.preventDefault();
      viewportRef.current?.scrollTo({
        left: viewportRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  }

  const showControls = activeProjects.length > visibleCount;

  return (
    <div className="projects-carousel" role="region" aria-label="Projects">
      {showControls ? (
        <div className="project-carousel-controls">
          <button
            aria-label="Previous projects"
            aria-controls="project-carousel-viewport"
            className="project-carousel-button"
            disabled={atStart}
            onClick={() => moveCarousel(-1)}
            type="button"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20">
              <path d="m12 4-6 6 6 6" />
            </svg>
          </button>
          <button
            aria-label="Next projects"
            aria-controls="project-carousel-viewport"
            className="project-carousel-button"
            disabled={atEnd}
            onClick={() => moveCarousel(1)}
            type="button"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20">
              <path d="m8 4 6 6-6 6" />
            </svg>
          </button>
        </div>
      ) : null}
      <div
        aria-label="Project cards"
        className="projects-viewport"
        id="project-carousel-viewport"
        onKeyDown={handleCarouselKeyDown}
        onScroll={updateScrollState}
        ref={viewportRef}
        role="group"
        tabIndex={0}
      >
        <div
          className="projects-grid"
          data-count={activeProjects.length}
        >
          {activeProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("full-stack");
  const categoryTabs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeProjects = projects.filter(
    (project) => project.category === activeCategory,
  );

  function handleCategoryKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % projectCategories.length;
        break;
      case "ArrowLeft":
        nextIndex =
          (index - 1 + projectCategories.length) % projectCategories.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = projectCategories.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    const category = projectCategories[nextIndex];
    setActiveCategory(category.id);
    categoryTabs.current[nextIndex]?.focus();
  }

  return (
    <section className="content-section projects-section" id="projects">
      <SectionHeading title="PROJECTS" />
      <div
        data-reveal
        className="project-categories"
        role="tablist"
        aria-label="Project categories"
      >
        {projectCategories.map((category, index) => {
          const count = projects.filter(
            (project) => project.category === category.id,
          ).length;
          const isActive = activeCategory === category.id;

          return (
            <button
              aria-controls="projects-panel"
              aria-selected={isActive}
              className={`project-category-tab${isActive ? " is-active" : ""}`}
              id={`project-tab-${category.id}`}
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              onKeyDown={(event) => handleCategoryKeyDown(event, index)}
              ref={(element) => {
                categoryTabs.current[index] = element;
              }}
              role="tab"
              tabIndex={isActive ? 0 : -1}
              type="button"
            >
              <ProjectCategoryIcon category={category.id} />
              <span className="project-category-label">{category.label}</span>
              <span className="project-category-count">
                {String(count).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>
      <div
        aria-labelledby={`project-tab-${activeCategory}`}
        className="projects-panel"
        data-reveal
        id="projects-panel"
        role="tabpanel"
        tabIndex={0}
      >
        {activeProjects.length > 0 ? (
          <ProjectCarousel activeProjects={activeProjects} key={activeCategory} />
        ) : (
          <p aria-live="polite" className="projects-empty-state" key={activeCategory}>
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
