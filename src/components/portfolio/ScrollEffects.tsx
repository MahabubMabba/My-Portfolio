"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const portfolioSections = document.querySelectorAll<HTMLElement>(
      ".portfolio-sections > section:not(.contact-section)",
    );

    portfolioSections.forEach((section) => {
      section
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((element, index) => {
          element.classList.add("portfolio-reveal");
          element.style.setProperty(
            "--reveal-delay",
            `${Math.min(index * 55, 220)}ms`,
          );
        });
    });

    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.08 },
    );

    revealElements.forEach((element) => observer.observe(element));

    const observedProjectCards = new Set<HTMLElement>();
    const projectsPanel = document.querySelector(".projects-panel");
    const observeProjectCards = () => {
      for (const card of observedProjectCards) {
        if (!card.isConnected) {
          observer.unobserve(card);
          observedProjectCards.delete(card);
        }
      }

      projectsPanel
        ?.querySelectorAll<HTMLElement>(".project-card[data-reveal]")
        .forEach((card, index) => {
          if (observedProjectCards.has(card)) {
            return;
          }

          card.classList.add("portfolio-reveal");
          card.style.setProperty(
            "--reveal-delay",
            `${Math.min(index * 70, 140)}ms`,
          );
          observedProjectCards.add(card);
          observer.observe(card);
        });
    };

    observeProjectCards();
    const projectsObserver = projectsPanel
      ? new MutationObserver(observeProjectCards)
      : null;
    if (projectsPanel && projectsObserver) {
      projectsObserver.observe(projectsPanel, {
        childList: true,
        subtree: true,
      });
    }

    document.documentElement.classList.add("motion-ready");
    return () => {
      observer.disconnect();
      projectsObserver?.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
