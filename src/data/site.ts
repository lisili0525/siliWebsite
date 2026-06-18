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

export type Education = {
  school: string;
  degree: string;
  period: string;
  detail: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
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
  name: "Sili Li",
  title: "Computer Science & Mathematics Student",
  description:
    "Computer science and mathematics student building full-stack applications, machine learning systems, and high-performance numerical software.",
  email: "lslhwzyshpy@gmail.com",
  location: "Madison, Wisconsin",
  socials: [
    { label: "GitHub", href: "https://github.com/lisili0525" },
  ],
};

export const experiences: Experience[] = [
  {
    company: "University of Nebraska Medical Center - Wan Lab",
    role: "Machine Learning Engineering Intern",
    period: "Oct 2024 - May 2025",
    summary:
      "Developed and optimized machine learning models for high-dimensional biomedical datasets, built Python training and evaluation pipelines, and analyzed architectures including MAMBA. Collaborated with the research team to review results and improve system reliability.",
  },
];

export const education: Education[] = [
  {
    school: "University of Wisconsin-Madison",
    degree: "B.S. in Computer Science & Mathematics",
    period: "Expected 2026",
    detail: "GPA: 3.7",
  },
  {
    school: "Penn State University",
    degree: "Computer Science (Transferred)",
    period: "Previously attended",
    detail: "GPA: 4.0",
  },
];

export const coursework = [
  "Operating Systems",
  "Machine Learning",
  "Parallel & Throughput-Optimized Programming",
  "Algorithms & Theory of Computing",
  "Database Management Systems",
  "Numerical Linear Algebra",
  "Numerical Analysis",
  "Real Analysis",
  "Abstract Algebra",
  "User Interface Programming",
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "C", "C++", "Java", "SQL", "JavaScript", "R", "Fortran"],
  },
  {
    category: "Web",
    skills: [
      "Django",
      "Django REST Framework",
      "Node.js",
      "React",
      "React Router",
      "HTML",
      "CSS",
      "RESTful APIs",
    ],
  },
  {
    category: "Data & Machine Learning",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "PostgreSQL",
      "Redis",
      "NumPy",
      "MATLAB",
    ],
  },
  {
    category: "Systems & Cloud",
    skills: [
      "AWS S3",
      "AWS Lambda",
      "Docker",
      "Linux",
      "Parallel Computing",
      "Numerical Simulation",
      "Git",
      "GitHub",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "badger-chat",
    title: "BadgerChat",
    summary:
      "A full-stack, multi-user chat platform with authenticated conversations, scalable history, and a responsive interface.",
    problem:
      "Build a multi-user web application that supports secure account sessions, chatroom participation, and reliable access to growing message histories.",
    approach:
      "Created a React frontend and Django REST backend, designed APIs for chatrooms, posts, and messages, and added registration, login, logout, session persistence, access control, and paginated history loading.",
    outcome:
      "Delivered a responsive full-stack application with credential-aware external API requests and clear boundaries between client, API, and protected user data.",
    technologies: [
      "React",
      "Django REST Framework",
      "JavaScript",
      "Bootstrap",
      "REST APIs",
    ],
  },
  {
    slug: "cloud-microphysics-simulation",
    title: "LES Cloud Microphysics Simulation",
    summary:
      "A large-scale numerical simulation system connecting atmospheric solvers, particle models, and GPU-parallel computation.",
    problem:
      "Large-eddy cloud simulations require numerically stable integration across stiff equations and particle models at computationally demanding scales.",
    approach:
      "Integrated numerical solvers with particle models, implemented implicit stiff ODE methods and root-finding algorithms, and built data pipelines linking simulation output to evaluation workflows.",
    outcome:
      "Produced a GPU-parallel simulation backend with dedicated debugging tools and numerical stability safeguards for large-scale experiments.",
    technologies: [
      "Numerical Methods",
      "GPU Computing",
      "Parallel Computing",
      "ODE Solvers",
      "Data Pipelines",
    ],
  },
  {
    slug: "cancer-subtype-classification",
    title: "Cancer Subtype Classification",
    summary:
      "A multi-head attention neural network for classifying cancer subtypes from high-dimensional gene expression data.",
    problem:
      "Classify multiple cancer subtypes from complex biological datasets while evaluating performance robustly across imbalanced classes.",
    approach:
      "Built a PyTorch architecture combining MLP layers and multi-head attention, created custom dataset pipelines, and applied stratified K-fold cross-validation with GPU-accelerated training.",
    outcome:
      "Created a modular experimentation pipeline evaluated with accuracy, F1-score, MCC, and multi-class ROC-AUC metrics and optimized using Adam.",
    technologies: [
      "Python",
      "PyTorch",
      "Deep Learning",
      "Multi-Head Attention",
      "GPU Acceleration",
    ],
  },
];
