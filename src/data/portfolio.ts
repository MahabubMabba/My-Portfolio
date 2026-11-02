export type NavigationItem = {
  id: string;
  label: string;
};

export type EducationRecord = {
  id: string;
  qualification: string;
  institution: string;
  detailLabel: string;
  detail: string;
};

export type Skill = {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Tools";
};

export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: {
    id: string;
    name: string;
  }[];
  features: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  detailsUrl?: string;
  featured: boolean;
};

export type ExperienceRecord = {
  id: string;
  position: string;
  organization: string;
  employmentType: "Internship" | "Freelance" | "Full-time" | "Part-time" | "Other";
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  companyLogo?: string;
};

export type CertificationRecord = {
  id: string;
  name: string;
  issuer: string;
  issuedAt?: string;
};

export type SocialLink = {
  id: string;
  label: string;
  username: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT ME" },
  { id: "skills", label: "SKILLS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
];

export const educationRecords: EducationRecord[] = [
  {
    id: "ssc",
    qualification: "Secondary School Certificate",
    institution: "Ibn Taimiya School and College",
    detailLabel: "GROUP",
    detail: "Science",
  },
  {
    id: "diploma",
    qualification: "Diploma in Engineering",
    institution: "Habiganj Polytechnic Institute",
    detailLabel: "DEPARTMENT",
    detail: "Computer Science and Technology",
  },
];

export const skills: Skill[] = [
  { id: "html", name: "HTML", category: "Frontend" },
  { id: "css", name: "CSS", category: "Frontend" },
  { id: "javascript", name: "JavaScript", category: "Frontend" },
  { id: "typescript", name: "TypeScript", category: "Frontend" },
  { id: "react", name: "React.js", category: "Frontend" },
  { id: "nextjs", name: "Next.js", category: "Frontend" },
  { id: "tailwind", name: "Tailwind CSS", category: "Frontend" },
  { id: "nodejs", name: "Node.js", category: "Backend"},
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    
  },
  { id: "git", name: "Git", category: "Tools" },
  { id: "github", name: "GitHub", category: "Tools" },
  { id: "vscode", name: "VS Code", category: "Tools" },
];

export const skillCategories: Skill["category"][] = [
  "Frontend",
  "Backend",
  "Tools",
];

export const projects: Project[] = [
  {
    id: "devstack",
    title: "DevStack",
    description:
      "A React-based web application where users can explore web development technologies and build their own technology stack.",
    category: "ACADEMIC ASSIGNMENT",
    technologies: [
      { id: "react", name: "React" },
      { id: "typescript", name: "TypeScript" },
      { id: "javascript", name: "JavaScript" },
      { id: "tailwind", name: "Tailwind CSS" },
      { id: "react-toastify", name: "React Toastify" },
    ],
    features: [
      "Explore technologies by category, rating, and difficulty.",
      "Add technologies to or remove them from a personal stack.",
      "Receive interactive toast notifications.",
    ],
    image: "/project-previews/devstack.png",
    githubUrl: "https://github.com/MahabubMabba/5th-Assignment",
    liveUrl: "https://subtle-cajeta-6d13ae.netlify.app/",
    featured: true,
  },
  {
    id: "fitlog",
    title: "FitLog",
    description:
      "A workout library web application for exploring exercises, viewing workout details, creating daily plans, and saving workouts for later.",
    category: "ACADEMIC ASSIGNMENT",
    technologies: [
      { id: "nextjs", name: "Next.js" },
      { id: "react", name: "React" },
      { id: "typescript", name: "TypeScript" },
      { id: "tailwind", name: "Tailwind CSS" },
      { id: "daisyui", name: "DaisyUI" },
    ],
    features: [
      "Browse a workout library and view exercise details.",
      "Add workouts to today's plan or save them for later.",
      "Track exercise duration and calories.",
    ],
    image: "/project-previews/fitlog-preview.png",
    githubUrl: "https://github.com/MahabubMabba/6th-Assignment",
    liveUrl: "https://6th-assignment-flax.vercel.app/",
    featured: true,
  },
];

export const experienceRecords: ExperienceRecord[] = [];

export const certifications: CertificationRecord[] = [];

export const contact = {
  email: "mahabub.web.dev@gmail.com",
};

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GITHUB",
    username: "MahabubMabba",
    href: "https://github.com/MahabubMabba",
  },
  {
    id: "facebook",
    label: "FACEBOOK",
    username: "Mahabub.Hasan.Mabba",
    href: "https://www.facebook.com/Mahabub.Hasan.Mabba",
  },
  {
    id: "instagram",
    label: "INSTAGRAM",
    username: "hasan_mabba",
    href: "https://www.instagram.com/hasan_mabba",
  },
];
