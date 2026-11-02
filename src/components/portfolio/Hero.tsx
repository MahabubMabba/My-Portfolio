import Image from "next/image";
import BrandMark from "./BrandMark";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy" data-reveal>
        <p className="eyebrow">FULL STACK WEB DEVELOPER — BANGLADESH</p>
        <h1 id="hero-title">
          <span>HEY, I&apos;M</span>
          <span className="accent">MAHABUB</span>
        </h1>
        <p className="hero-support" data-reveal>
          FULL STACK DEVELOPER CRAFTING DIGITAL EXPERIENCES.
        </p>
        <p className="intro" data-reveal>
          I turn ideas into functional, modern and meaningful web experiences
          through clean code and thoughtful design.
        </p>
      </div>

      <aside className="hero-aside" aria-label="Profile" data-reveal>
        <div className="portrait-art portrait-stage" data-reveal>
          <Image
            alt="Portrait of Mahabub Hasan"
            className="portrait-image"
            fill
            priority
            sizes="(max-width: 380px) 220px, (max-width: 620px) 240px, (max-width: 760px) 320px, (max-width: 900px) 34vw, (max-width: 1250px) 34vw, 460px"
            src="/image/mahabub-hero.webp"
          />
        </div>
        <div className="portrait-caption">
          <BrandMark />
        </div>
        <div className="availability">
          <span className="availability-label">BASED IN</span>
          <span className="location">BANGLADESH</span>
          <a className="pill-button" href="#contact">
            LET&apos;S TALK <span aria-hidden="true">↗</span>
          </a>
        </div>
      </aside>
    </section>
  );
}
