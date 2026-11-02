"use client";

import { useEffect, useRef, useState } from "react";
import { navigationItems } from "@/data/portfolio";
import BrandMark from "./BrandMark";

export default function SiteHeader() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSectionRef = useRef("home");
  const pendingSectionRef = useRef<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("menu-ready");

    return () => {
      document.documentElement.classList.remove("menu-ready");
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    const closeOnDesktop = window.matchMedia("(min-width: 761px)");
    const handleDesktopResize = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    closeOnDesktop.addEventListener("change", handleDesktopResize);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      closeOnDesktop.removeEventListener("change", handleDesktopResize);
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = navigationItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    let animationFrame = 0;
    let settleTimer: number | undefined;

    const updateActiveSection = (id: string) => {
      if (activeSectionRef.current !== id) {
        activeSectionRef.current = id;
        setActiveSection(id);
      }
    };

    const findVisibleSection = () => {
      const headerBottom =
        document.querySelector<HTMLElement>(".site-header")?.getBoundingClientRect()
          .bottom ?? 0;
      const activationLine =
        headerBottom + Math.max(0, window.innerHeight - headerBottom) * 0.35;

      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
      ) {
        return sections.at(-1)?.id ?? "home";
      }

      const currentSection = sections.find((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= activationLine && bounds.bottom > activationLine;
      });

      if (currentSection) {
        return currentSection.id;
      }

      return (
        sections.reduce<HTMLElement | null>((nearest, section) => {
          if (!nearest) {
            return section;
          }

          const distance = (element: HTMLElement) => {
            const bounds = element.getBoundingClientRect();
            return bounds.top > activationLine
              ? bounds.top - activationLine
              : activationLine - bounds.bottom;
          };

          return distance(section) < distance(nearest) ? section : nearest;
        }, null)?.id ?? "home"
      );
    };

    const syncActiveSection = () => {
      animationFrame = 0;
      const currentId = findVisibleSection();
      const pendingId = pendingSectionRef.current;

      if (pendingId && pendingId !== currentId) {
        return;
      }

      pendingSectionRef.current = null;
      if (settleTimer !== undefined) {
        window.clearTimeout(settleTimer);
        settleTimer = undefined;
      }
      updateActiveSection(currentId);
    };

    const scheduleSync = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(syncActiveSection);
      }

      if (pendingSectionRef.current) {
        if (settleTimer !== undefined) {
          window.clearTimeout(settleTimer);
        }
        settleTimer = window.setTimeout(finishScroll, 250);
      }
    };

    const finishScroll = () => {
      if (settleTimer !== undefined) {
        window.clearTimeout(settleTimer);
        settleTimer = undefined;
      }
      pendingSectionRef.current = null;
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
      syncActiveSection();
    };

    const handleResize = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(syncActiveSection);
      }
    };

    window.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("scrollend", finishScroll);
    syncActiveSection();

    return () => {
      window.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scrollend", finishScroll);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
      if (settleTimer !== undefined) {
        window.clearTimeout(settleTimer);
      }
    };
  }, []);

  const selectSection = (id: string) => {
    pendingSectionRef.current = id;
    activeSectionRef.current = id;
    setActiveSection(id);

    if (findSectionAtActivationLine(id)) {
      pendingSectionRef.current = null;
    }
  };

  const findSectionAtActivationLine = (id: string) => {
    const section = document.getElementById(id);
    const headerBottom =
      document.querySelector<HTMLElement>(".site-header")?.getBoundingClientRect()
        .bottom ?? 0;
    const activationLine =
      headerBottom + Math.max(0, window.innerHeight - headerBottom) * 0.35;

    if (!section) {
      return false;
    }

    const bounds = section.getBoundingClientRect();
    return bounds.top <= activationLine && bounds.bottom > activationLine;
  };

  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="#home"
        aria-label="Mahabub Hasan home"
        onClick={() => {
          selectSection("home");
          setMenuOpen(false);
        }}
      >
        <BrandMark />
      </a>

      <nav
        className={`site-nav${menuOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {navigationItems.map((item) => (
          <a
            aria-current={activeSection === item.id ? "location" : undefined}
            className={activeSection === item.id ? "is-active" : undefined}
            href={`#${item.id}`}
            key={item.id}
            onClick={() => {
              selectSection(item.id);
              setMenuOpen(false);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a
        className="pill-button header-button"
        href="#contact"
        onClick={() => {
          selectSection("contact");
          setMenuOpen(false);
        }}
      >
        LET&apos;S TALK <span aria-hidden="true">↗</span>
      </a>

      <button
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        className={`menu-toggle${menuOpen ? " is-open" : ""}`}
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
        type="button"
      >
        <span />
        <span />
      </button>
    </header>
  );
}
