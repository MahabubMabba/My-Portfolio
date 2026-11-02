"use client";

import type { MouseEvent } from "react";

type ContactEmailLinkProps = {
  email: string;
};

export default function ContactEmailLink({ email }: ContactEmailLinkProps) {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  function openGmail(event: MouseEvent<HTMLAnchorElement>) {
    const composeWindow = window.open(gmailUrl, "_blank");

    if (!composeWindow) {
      return;
    }

    composeWindow.opener = null;
    event.preventDefault();
  }

  return (
    <a
      className="contact-row contact-email-row"
      href={`mailto:${email}`}
      onClick={openGmail}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span>EMAIL</span>
      <span>{email}</span>
    </a>
  );
}
