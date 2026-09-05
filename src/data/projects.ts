export type ProjectCategory = "AI/ML" | "Web" | "Data Science" | "Mobile";
export type ProjectStatus = "Completed" | "Research" | "Academic" | "Concept";

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  categories: ProjectCategory[];
  status: ProjectStatus;
  tags: string[];
  githubUrl?: string;
}

export const PROJECT_FILTERS: Array<"All" | ProjectCategory> = ["All", "AI/ML", "Web", "Data Science", "Mobile"];

export const PROJECTS: Project[] = [
  {
    title: "PharmaGuard AI",
    subtitle: "AI-Driven Packaging Authentication",
    description:
      "Computer vision and deep learning framework for pharmaceutical packaging authentication, aimed at detecting counterfeit packaging patterns.",
    categories: ["AI/ML"],
    status: "Research",
    tags: ["Computer Vision", "Deep Learning", "Python"],
    githubUrl: "#",
  },
  {
    title: "LifeGuard AI",
    subtitle: "ML Life Expectancy Estimator",
    description:
      "Full-stack machine learning application that estimates life expectancy from demographic, economic, healthcare, and environmental indicators using a Random Forest regression pipeline. A statistical estimate only, not a medical or diagnostic tool.",
    categories: ["AI/ML", "Web"],
    status: "Completed",
    tags: ["React", "FastAPI", "scikit-learn", "Firebase"],
    githubUrl: "#",
  },
  {
    title: "Syl Shopping Center",
    subtitle: "Full-Stack E-Commerce Platform",
    description:
      "Full-stack shopping application built with database architecture, schema design, data seeding, and application state management.",
    categories: ["Web"],
    status: "Completed",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/hassankaafi72/syl-shopping-center",
  },
  {
    title: "Carshi Restaurant Website",
    subtitle: "Restaurant Menu & Reservations Site",
    description:
      "Responsive restaurant website presenting a Somali food menu, with client-side cart management and a table reservation interface.",
    categories: ["Web"],
    status: "Completed",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/hassankaafi72/carshi-restaurant-webiste",
  },
  {
    title: "TIENS Somalia Website",
    subtitle: "Product Catalogue Website",
    description:
      "Single-page product catalogue for TIENS health and wellness products in Somalia, with categorized listings and full-screen product detail views.",
    categories: ["Web"],
    status: "Completed",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/hassankaafi72/-tiens-somalia-website",
  },
  {
    title: "Cloud-Integrated School Management System",
    subtitle: "Enterprise Management Platform",
    description:
      "Modular management system covering cloud configuration, security settings, environment variables, and role-based access control.",
    categories: ["Web"],
    status: "Completed",
    tags: ["Spring Boot", "Cloud Config", "RBAC"],
    githubUrl: "#",
  },
  {
    title: "Predictive Real Estate Engine",
    subtitle: "Data Science & Regression Analysis",
    description:
      "Python project using a linear regression model to estimate house prices from structured housing data, with an interactive Streamlit prediction interface.",
    categories: ["Data Science", "AI/ML"],
    status: "Academic",
    tags: ["Python", "Regression", "Streamlit"],
    githubUrl: "https://github.com/hassankaafi72/house-price-prediction",
  },
  {
    title: "Fitness Data Analysis",
    subtitle: "Exploratory Data Analysis",
    description: "Analysis and visualization of fitness tracking data using Python, Pandas, and Matplotlib.",
    categories: ["Data Science"],
    status: "Academic",
    tags: ["Python", "Pandas", "Matplotlib"],
    githubUrl: "#",
  },
  {
    title: "AI Push-Up Challenge",
    subtitle: "AI-Powered Fitness Competition Platform",
    description:
      "Concept application in development that uses computer vision to count push-ups, evaluate movement form, generate scoring, and support global leaderboards.",
    categories: ["AI/ML", "Mobile"],
    status: "Concept",
    tags: ["Computer Vision", "Flutter", "In Development"],
    githubUrl: "#",
  },
];
