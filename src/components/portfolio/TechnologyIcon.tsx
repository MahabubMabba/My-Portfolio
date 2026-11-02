type TechnologyIconProps = {
  id: string;
};

const iconColors: Record<string, string> = {
  html: "#e34f26",
  css: "#1572b6",
  javascript: "#f7df1e",
  typescript: "#3178c6",
  react: "#61dafb",
  nextjs: "#f5f5f5",
  tailwind: "#38bdf8",
  "react-toastify": "#e74c3c",
  daisyui: "#1ad1a5",
  nodejs: "#83cd29",
  express: "#f5f5f5",
  git: "#f05032",
  github: "#f5f5f5",
  vscode: "#33a9dc",
};

export default function TechnologyIcon({ id }: TechnologyIconProps) {
  const color = iconColors[id] ?? "#c5ff00";

  if (id === "react") {
    return (
      <svg aria-hidden="true" className="technology-icon" viewBox="0 0 32 32">
        <g
          fill="none"
          stroke={color}
          strokeWidth="1.7"
        >
          <ellipse cx="16" cy="16" rx="13" ry="5" />
          <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)" />
        </g>
        <circle cx="16" cy="16" r="2" fill={color} />
      </svg>
    );
  }

  if (id === "tailwind") {
    return (
      <svg aria-hidden="true" className="technology-icon" viewBox="0 0 32 32">
        <path
          d="M5 13c2-5 5.7-7.5 11-7.5 8 0 8.5 6 12 7-2 5-5.7 7.5-11 7.5-8 0-8.5-6-12-7Zm-1 9c2-5 5.7-7.5 11-7.5 8 0 8.5 6 12 7-2 5-5.7 7.5-11 7.5-8 0-8.5-6-12-7Z"
          fill={color}
          transform="translate(0 -2)"
        />
      </svg>
    );
  }

  if (id === "html" || id === "css") {
    return (
      <svg aria-hidden="true" className="technology-icon" viewBox="0 0 32 32">
        <path
          d="M6 3h20l-2 23-8 3-8-3L6 3Z"
          fill={color}
          opacity=".9"
        />
        <path d="M16 6v20l6-2 1.5-18H16Z" fill="#fff" opacity=".18" />
        <text
          fill="#fff"
          fontFamily="Arial, sans-serif"
          fontSize="13"
          fontWeight="700"
          textAnchor="middle"
          x="16"
          y="21"
        >
          {id === "html" ? "5" : "3"}
        </text>
      </svg>
    );
  }

  if (id === "javascript" || id === "typescript") {
    return (
      <svg aria-hidden="true" className="technology-icon" viewBox="0 0 32 32">
        <rect
          fill={color}
          height="25"
          rx="2"
          width="25"
          x="3.5"
          y="3.5"
        />
        <text
          fill={id === "javascript" ? "#151515" : "#fff"}
          fontFamily="Arial, sans-serif"
          fontSize={id === "javascript" ? "12" : "10"}
          fontWeight="700"
          textAnchor="middle"
          x="16"
          y="22"
        >
          {id === "javascript" ? "JS" : "TS"}
        </text>
      </svg>
    );
  }

  if (id === "nextjs") {
    return (
      <svg aria-hidden="true" className="technology-icon" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="13" fill="none" stroke={color} strokeWidth="1.5" />
        <path d="M11 22V10l10 13V10" fill="none" stroke={color} strokeWidth="2" />
      </svg>
    );
  }

  if (id === "nodejs") {
    return (
      <svg aria-hidden="true" className="technology-icon" viewBox="0 0 32 32">
        <path
          d="m16 3 12 7v12l-12 7-12-7V10l12-7Z"
          fill="none"
          stroke={color}
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <text
          fill={color}
          fontFamily="Arial, sans-serif"
          fontSize="7"
          fontWeight="700"
          textAnchor="middle"
          x="16"
          y="18.5"
        >
          node
        </text>
      </svg>
    );
  }

  if (id === "express") {
    return (
      <svg aria-hidden="true" className="technology-icon" viewBox="0 0 32 32">
        <text
          fill={color}
          fontFamily="Arial, sans-serif"
          fontSize="15"
          fontWeight="700"
          letterSpacing="-1"
          textAnchor="middle"
          x="16"
          y="21"
        >
          ex
        </text>
      </svg>
    );
  }

  if (id === "git") {
    return (
      <svg aria-hidden="true" className="technology-icon" viewBox="0 0 32 32">
        <path d="m16 3 13 13-13 13L3 16 16 3Z" fill={color} />
        <path
          d="M12 11v9m0-5h7v7m0-11v4"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="10" r="2" fill="#fff" />
        <circle cx="12" cy="21" r="2" fill="#fff" />
        <circle cx="19" cy="10" r="2" fill="#fff" />
        <circle cx="19" cy="23" r="2" fill="#fff" />
      </svg>
    );
  }

  if (id === "github") {
    return (
      <svg aria-hidden="true" className="technology-icon" viewBox="0 0 32 32">
        <path
          d="M16 3a13 13 0 0 0-4.1 25.3c.7.1.9-.3.9-.7v-2.5c-3.7.8-4.5-1.6-4.5-1.6-.6-1.5-1.5-1.9-1.5-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.2 2 3.1 1.4 3.9 1.1.1-.9.5-1.4.9-1.8-3-.3-6.1-1.5-6.1-6.6 0-1.5.5-2.7 1.3-3.7-.1-.3-.6-1.8.1-3.7 0 0 1.1-.4 3.7 1.4a12.7 12.7 0 0 1 6.7 0c2.6-1.8 3.7-1.4 3.7-1.4.7 1.9.3 3.4.1 3.7.8 1 1.3 2.2 1.3 3.7 0 5.1-3.1 6.3-6.1 6.6.5.4 1 1.2 1 2.4v3.8c0 .4.2.8.9.7A13 13 0 0 0 16 3Z"
          fill={color}
        />
      </svg>
    );
  }

  if (id === "vscode") {
    return (
      <svg aria-hidden="true" className="technology-icon" viewBox="0 0 32 32">
        <path
          d="m23 3 6 2v22l-6 2-14-11 4-4L23 22V10l-10 8-4-4L23 3Z"
          fill={color}
        />
        <path d="m4 11 5-4 5 5-5 5-5-3v-3Z" fill="#80d8f7" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="technology-icon" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="13" fill={color} />
      <text
        fill="#101010"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        fontWeight="700"
        textAnchor="middle"
        x="16"
        y="20"
      >
        {id.slice(0, 2).toUpperCase()}
      </text>
    </svg>
  );
}
