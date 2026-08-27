export interface Profile {
  name: string;
  location: string;
  role: string;
  subRole: string;
  headline: string;
  subheadline: string;
  summary: string;
  aboutText: string[];
  educationBrief: {
    degree: string;
    university: string;
    period: string;
    gpa: string;
  };
  focusAreas: string[];
  socialLinks: {
    email: string;
    linkedin: string;
    github: string;
  };
  cvPath: string;
}

export interface CaseStudySection {
  id: string;
  number: string;
  title: string;
  content: string | string[];
  placeholder?: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  workflow: string[];
  details: string[];
  placeholders: {
    dashboard?: string;
    system?: string;
    dataWarehouse?: string;
  };
  caseStudy: CaseStudySection[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  organization?: string;
  period?: string;
  category: string;
  description: string;
  skills?: string[];
  finalProjectInfo?: string;
  tools?: string[];
  technologies?: string[];
  workflow?: string[];
  placeholders?: {
    image?: string;
    link?: string;
  };
}

export interface AcademicProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  details: string[];
  tools?: string[];
}

export interface OrganizationItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  details: string[];
}

export interface EducationItem {
  university: string;
  degree: string;
  period: string;
  gpa: string;
  coursework: string[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  placeholder: string;
}

