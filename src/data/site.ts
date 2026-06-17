export type SocialLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  technologies: string[];
  repositoryUrl?: string;
  liveUrl?: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  email: string;
  location: string;
  socials: SocialLink[];
};

export const siteConfig: SiteConfig = {
  name: "Your Name",
  title: "Your Role or Specialty",
  description:
    "A short introduction about who you are, what you do, and the kind of work you care about.",
  email: "hello@example.com",
  location: "Your City, Country",
  socials: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-username" },
  ],
};

export const experiences: Experience[] = [
  {
    company: "Company Name",
    role: "Your Role",
    period: "20XX - Present",
    summary:
      "Describe your responsibilities, the problems you worked on, and the impact you made.",
  },
  {
    company: "Previous Company",
    role: "Previous Role",
    period: "20XX - 20XX",
    summary:
      "Add another concise description of your experience and accomplishments here.",
  },
];

export const projects: Project[] = [
  {
    slug: "sample-project",
    title: "Sample Project",
    summary:
      "Replace this with a short explanation of what you built and why it matters.",
    problem:
      "Explain the user need, business challenge, or technical problem that motivated the project.",
    approach:
      "Describe the important decisions you made and how you designed and built the solution.",
    outcome:
      "Summarize the result. Add measurable impact, lessons learned, or next steps when available.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    repositoryUrl: "https://github.com/your-username/sample-project",
    liveUrl: "https://example.com",
  },
];
