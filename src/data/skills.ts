export interface SkillGroup {
  category: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "AI / Machine Learning",
    skills: [
      "Python",
      "Machine Learning",
      "Predictive Modeling",
      "Computer Vision",
      "Deep Learning",
      "Pandas",
      "Matplotlib",
      "Jupyter",
      "Kaggle",
    ],
  },
  {
    category: "Development",
    skills: ["Java", "JavaScript", "PHP", "HTML", "CSS", "React", "Spring Boot", "REST APIs"],
  },
  {
    category: "Mobile",
    skills: ["Flutter", "Dart"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "SQL", "JPA", "JDBC"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "IntelliJ IDEA"],
  },
  {
    category: "Creative",
    skills: ["Graphic Design", "Branding", "Technical Writing", "Digital Marketing", "Content Creation"],
  },
];
