
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  tools: string[];
  impact: string;
}

export interface ProjectItem {
  title: string;
  mission: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
  color: string;
}
