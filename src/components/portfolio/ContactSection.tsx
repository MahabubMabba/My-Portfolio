import { contact, socialLinks } from "@/data/portfolio";
import ContactEmailLink from "./ContactEmailLink";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  return (
    <section className="content-section contact-section" id="contact">
      <SectionHeading title="LET’S BUILD SOMETHING." />
      <div className="contact-grid">
        <div className="contact-prompt" data-reveal>
          <p className="contact-message">
            Have an idea?
            <br />
            Let&apos;s make it real.
          </p>
          <a
            className="pill-button contact-cta"
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            SEND AN EMAIL
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-details" id="social-links" data-reveal>
          <ContactEmailLink email={contact.email} />
          {socialLinks.map((link) => (
            <a
              className="contact-row"
              href={link.href}
              key={link.id}
              rel="noreferrer"
              target="_blank"
            >
              <span>{link.label}</span>
              <span>
                {link.username}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
