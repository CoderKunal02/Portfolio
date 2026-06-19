export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
  highlighted?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon?: string }[];
}

export interface ExperienceMilestone {
  id: string;
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  tags?: string[];
  isCurrent?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}
