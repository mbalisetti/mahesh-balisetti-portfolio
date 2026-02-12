
import { ExperienceItem, ProjectItem, SkillCategory } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "USAA",
    role: "Actimize / Java Developer",
    period: "July 2024 - Current",
    description: [
      "Experienced in NICE Actimize IFM Solution, ActOne, and RCM Plugin development.",
      "Integrated new Alert Types and configured workflows, views, and business rules in ActOne.",
      "Developed Java-based RCM plugins (GUI, Conditional Status Change, Post-Step Change, Post-Action Events).",
      "Hands-on experience with QAS Module and ActOne SP24 upgrades.",
      "Integrated REST APIs within Java plugins for external system communication.",
      "Migrated ActOne applications from JBoss to OpenShift containers.",
      "Built a Spring Boot microservice consuming Kafka events using RCM Extend APIs.",
      "Implemented AWS Lambda & API Gateway, provisioning via Terraform (IaC).",
      "Worked across full SDLC in Agile/Scrum environments"
    ],
    tools: ["Java", "Actimize", "Spring Boot", "OpenShift", "Oracle", "AWS"],
    impact: "Migrated ActOne application from legacy Jboss environment to modernized OpenShift."
  },
  {
    company: "Wipro",
    role: "Project Engineer",
    period: "September 2021 - October 2022",
    description: [
      "Developed REST APIs using Java 8, Spring Boot, Spring MVC.",
      "Designed reusable Java components following OOP principles.",
      "Containerized applications using Docker for CI/CD deployments.",
      "Wrote unit tests using JUnit and Mockito.",
      "Developed and optimized SQL queries & stored procedures.",
      "Worked in Agile/Scrum, managed code using GitLab, and supported UAT/production releases."
    ],
    tools: ["Java", "Spring", "Kafka", "Docker", "Jenkins"],
    impact: "Automated manual deployment processes."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "ACTONE CLOUD MIGRATION",
    mission: "Modernizing the Investigation Hub",
    problem: "Legacy on-prem systems were reaching capacity and lacked horizontal scalability.",
    solution: "Transitioned ActOne Application to OpenShift using containerized services.",
    impact: "100% uptime during peak holiday banking periods.",
    tech: ["OpenShift", "Java", "Docker", "Kubernetes"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java", "Python", "SQL", "Shell Scripting"],
    color: "#06b6d4"
  },
  {
    name: "FinTech Stack",
    skills: ["Actimize AIS", "ActOne", "RCM", "Modeller"],
    color: "#8b5cf6"
  },
  {
    name: "Infrastructure",
    skills: ["OpenShift", "AWS", "Docker", "Kubernetes"],
    color: "#ec4899"
  },
  {
    name: "Data & Messaging",
    skills: ["Kafka", "Oracle", "SQL Server"],
    color: "#10b981"
  }
];

export const certifications = [
  {
    title: "Java Programming ",
    issuer: "DurgaSoft",
    date: "2020",
    icon: "☕",
  },
  {
    title: "Python",
    issuer: "DurgaSoft",
    date: "2020",
    icon: "🐍",
  },
  {
    title: "Django Full Stack Web Development",
    issuer: "DurgaSoft",
    date: "2020",
    icon: "🎸",
  },
  {
    title: "Generative AI & LLM Fundamentals",
    issuer: "Udemy",
    date: "In Progress",
    icon: "🤖",
  },
];
