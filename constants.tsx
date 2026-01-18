
import { ExperienceItem, ProjectItem, SkillCategory } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "USAA",
    role: "Actimize / Java Developer",
    period: "2022 - Present",
    description: [
      "      Leading fraud detection platform modernization.",
      "Experienced in IFM solution, effectively transforming business requirements into scalable and efficient technical solutions.",
      "Implemented various plugins including GUI, conditional status change, post-step change, and post-action event plugins aligned with business logic.",
      "Developed a custom java plugin to link accounts for a member, configured a GUI button on the Work Item page to open a form for capturing account details, and implemented a controller to handle the business logic for linking the account to the member.",
      "Developed a custom GUI plugin to invoke an external API to retrieve check images and attach them to fraud alerts.",
      "Migrated ActOne applications from legacy Jboss environment to modernized OpenShift containers, ensuring scalability, reliability, and compliance with enterprise standards.",
      "Designed and configured NFS-based storage solutions to support secure SAR (Suspicious Activity Report) filing, improving application performance and data accessibility for OpenShift.",
      "Configured SAML based Single Sign On for Actone application.",
      "Migrated legacy Java 8 RCM plugins to Java 11, modernizing the technology stack and enhancing maintainability.",
      "Developed a standalone Spring Boot application to consume Kafka events and update the platform list using RCM Extend api’s.",
      "Created and managed Roles and RoleBindings in OpenShift to control user and service account permissions, ensuring secure access to application resources.",
      "Integrated new Alert type, created user roles and pilocy manager rules as per business requirement.",
      "Migrated SOAP web services to RESTful services, improving the ActOne application's performance, scalability, and integration with external systems.",
      "Developed new Alert Types, Alert Views, Custom Layout forms, and workflow steps specific to client requirements, and created XML for Alert display.",
      "Developed and configured RCM components including Dart Views, Dart Queries, Workflows, and dashboards to streamline investigation processes.",
      "Authored detailed wiki documentation on developer setup, session handling, and debugging guidelines, improving knowledge transfer and reducing onboarding effort for new developers."
    ],
    tools: ["Java", "Actimize AIS", "Spring Boot", "OpenShift", "Oracle"],
    impact: "Migrated ActOne application from legacy Jboss environment to modernized OpenShift."
  },
  {
    company: "Wipro",
    role: "Project Engineer",
    period: "2021 - 2022",
    description: [
      "Strala Energy, by British Petroleum, is an innovative energy monitoring application that seamlessly connects households, vehicles, and communities. This robust platform empowers users with real-time insights, offering details like energy consumption and vehicle CO2 emissions, fostering informed decision-making.",
      "Actively involved in the analysis, development, and implementation phases of the software development lifecycle.",
      "Developed RESTful web services using Java 8, Spring MVC / Spring Boot for secure client-server communication.",
      "Designed and implemented reusable Java components and utility classes, following object-oriented and modular design principles.",
      "Utilized Docker to containerize Java applications and support automated build and deployment pipelines.",
      "Collaborated with developers, QA teams, and business analysts to resolve defects and ensure application correctness, security, and reliability.",
      "Created unit tests using JUnit and Mockito to validate business logic and API functionality.",
      "Developed and optimized SQL queries and stored procedures to support efficient data persistence and retrieval.",
      "Managed  source  code using  GitLab."
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
    solution: "Transitioned core investigation workflows to OpenShift using containerized Spring Boot services.",
    impact: "100% uptime during peak holiday banking periods.",
    tech: ["OpenShift", "Java", "Docker", "Kubernetes"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Java (J2EE)", "Python", "SQL", "Shell Scripting"],
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
    skills: ["Kafka", "RabbitMQ", "Oracle", "MongoDB"],
    color: "#10b981"
  }
];
