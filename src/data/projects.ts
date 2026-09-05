export type ProjectCategory = "AI/ML" | "Web" | "Data Science" | "Mobile";
export type ProjectStatus = "Completed" | "Research" | "Academic" | "Concept";

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  categories: ProjectCategory[];
  status: ProjectStatus;
  tags: string[];
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
  },
  {
    title: "Syl Shopping Center",
    subtitle: "Full-Stack E-Commerce Platform",
    description:
      "Full-stack shopping application built with database architecture, schema design, data seeding, and application state management.",
    categories: ["Web"],
    status: "Completed",
    tags: ["Full-Stack", "Database Design", "State Management"],
  },
  {
    title: "Cloud-Integrated School Management System",
    subtitle: "Enterprise Management Platform",
    description:
      "Modular management system covering cloud configuration, security settings, environment variables, and role-based access control.",
    categories: ["Web"],
    status: "Completed",
    tags: ["Spring Boot", "Cloud Config", "RBAC"],
  },
  {
    title: "Predictive Real Estate Engine",
    subtitle: "Data Science & Regression Analysis",
    description:
      "Python project comparing Linear Regression and Random Forest models for house-price prediction on structured housing data.",
    categories: ["Data Science", "AI/ML"],
    status: "Academic",
    tags: ["Python", "Regression", "Random Forest"],
  },
  {
    title: "Fitness Data Analysis",
    subtitle: "Exploratory Data Analysis",
    description: "Analysis and visualization of fitness tracking data using Python, Pandas, and Matplotlib.",
    categories: ["Data Science"],
    status: "Academic",
    tags: ["Python", "Pandas", "Matplotlib"],
  },
  {
    title: "AI Push-Up Challenge",
    subtitle: "AI-Powered Fitness Competition Platform",
    description:
      "Concept application in development that uses computer vision to count push-ups, evaluate movement form, generate scoring, and support global leaderboards.",
    categories: ["AI/ML", "Mobile"],
    status: "Concept",
    tags: ["Computer Vision", "Flutter", "In Development"],
  },
];
