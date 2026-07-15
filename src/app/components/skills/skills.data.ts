export type SkillCategory =
  | 'Backend'
  | 'Frontend'
  | 'Cloud & DevOps'
  | 'Práticas & Arquitetura'
  | 'Testes'
  | 'Ferramentas';

export interface Skill {
  readonly name: string;
  readonly category: SkillCategory;
}

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  Backend: $localize`:@@skills.category.backend:Backend`,
  Frontend: $localize`:@@skills.category.frontend:Frontend`,
  'Cloud & DevOps': $localize`:@@skills.category.cloudDevops:Cloud & DevOps`,
  'Práticas & Arquitetura': $localize`:@@skills.category.practices:Práticas & Arquitetura`,
  Testes: $localize`:@@skills.category.testing:Testes`,
  Ferramentas: $localize`:@@skills.category.tools:Ferramentas`,
};

export function categoryLabel(category: SkillCategory): string {
  return CATEGORY_LABELS[category];
}

export const SKILLS: readonly Skill[] = [
  { name: 'Java', category: 'Backend' },
  { name: 'Kotlin', category: 'Backend' },
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'Hibernate', category: 'Backend' },
  { name: 'JWT / Spring Security', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'MySQL', category: 'Backend' },
  { name: 'API REST', category: 'Backend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'HTML / CSS', category: 'Frontend' },
  { name: 'Docker', category: 'Cloud & DevOps' },
  { name: 'AWS EC2', category: 'Cloud & DevOps' },
  { name: 'AWS Lambda', category: 'Cloud & DevOps' },
  { name: 'AWS S3', category: 'Cloud & DevOps' },
  { name: 'AWS SQS', category: 'Cloud & DevOps' },
  { name: 'AWS SES', category: 'Cloud & DevOps' },
  { name: 'AWS IAM', category: 'Cloud & DevOps' },
  { name: 'Azure Pipelines', category: 'Cloud & DevOps' },
  { name: 'SOLID', category: 'Práticas & Arquitetura' },
  { name: 'DRY', category: 'Práticas & Arquitetura' },
  { name: 'KISS', category: 'Práticas & Arquitetura' },
  { name: 'DDD', category: 'Práticas & Arquitetura' },
  { name: 'Clean Architecture', category: 'Práticas & Arquitetura' },
  { name: 'Clean Code', category: 'Práticas & Arquitetura' },
  { name: 'Design Patterns', category: 'Práticas & Arquitetura' },
  { name: 'TDD', category: 'Práticas & Arquitetura' },
  { name: 'Scrum', category: 'Práticas & Arquitetura' },
  { name: 'Kanban', category: 'Práticas & Arquitetura' },
  { name: 'Jest', category: 'Testes' },
  { name: 'JUnit', category: 'Testes' },
  { name: 'Mockito', category: 'Testes' },
  { name: 'Git', category: 'Ferramentas' },
  { name: 'GitHub', category: 'Ferramentas' },
  { name: 'GitHub Projects', category: 'Ferramentas' },
  { name: 'Azure DevOps', category: 'Ferramentas' },
  { name: 'ClickUp', category: 'Ferramentas' },
  { name: 'Claude', category: 'Ferramentas' },
  { name: 'GitHub Copilot', category: 'Ferramentas' },
  { name: 'Gemini', category: 'Ferramentas' },
  { name: 'OpenCode', category: 'Ferramentas' },
] as const;
