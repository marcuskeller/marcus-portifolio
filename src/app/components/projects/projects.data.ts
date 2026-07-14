export interface Project {
  readonly name: string;
  readonly image?: string;
  readonly description: string;
  readonly period: string;
  readonly company?: string;
  readonly techStack: readonly string[];
  readonly githubUrl?: string;
  readonly liveUrl?: string;
  readonly appUrl?: string;
  readonly isPrivate?: boolean;
}

export const PROJECTS: readonly Project[] = [
  {
    name: 'PetFlow',
    image: 'petflow.png',
    period: $localize`:@@projects.petflow.period:Mar 2026 – Atual`,
    description: $localize`:@@projects.petflow.description:Plataforma SaaS desenvolvida do zero para otimizar o processo de adoção, divulgação e gestão de animais de estimação, conectando ONGs, abrigos e adotantes com catálogo dinâmico e fluxos de comunicação otimizados. Arquitetura escalável voltada para nuvem.`,
    techStack: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Docker', 'AWS EC2'],
    githubUrl: 'https://github.com/marcuskeller/petflow',
    liveUrl: 'http://18.231.158.4',
  },
  {
    name: 'AWS Image Pipeline',
    image: 'aws-pipeline.png',
    period: $localize`:@@projects.awsPipeline.period:Mai 2026 – Jul 2026`,
    description: $localize`:@@projects.awsPipeline.description:Pipeline escalável para upload, processamento e entrega de imagens, com arquitetura distribuída orientada a eventos, processamento assíncrono, design cloud-native e URLs pré-assinadas para acesso seguro a arquivos.`,
    techStack: ['Java 21', 'AWS Lambda', 'S3', 'SQS', 'EC2', 'SES', 'IAM'],
    githubUrl: 'https://github.com/marcuskeller/aws-image-pipeline',
    liveUrl: 'https://d3ponzozxkaqi3.cloudfront.net/',
  },
  {
    name: 'Papoo',
    image: 'papoo.png',
    company: 'Keller Tecnologia',
    period: $localize`:@@projects.papoo.period:Jul 2025 – Atual`,
    description: $localize`:@@projects.papoo.description:Plataforma para comunicação e gerenciamento interno, com chat, notificações em tempo real e persistência de mensagens.`,
    techStack: [
      'Java',
      'Kotlin',
      'Spring Boot',
      'Hibernate',
      'PostgreSQL',
      'Docker',
      'Angular',
      'Tailwind CSS',
      'HTML / CSS',
      'JavaScript',
      'TypeScript',
    ],
    liveUrl: 'https://www.papoo.com.br/',
    appUrl: 'https://chat.papoo.com.br/login',
  },
  {
    name: 'InvestApp',
    company: 'Keller Tecnologia',
    period: $localize`:@@projects.investapp.period:Jan 2025 – Jun 2025`,
    description: $localize`:@@projects.investapp.description:Sistema para gerenciamento e análise de portfólios de investimentos, com acompanhamento de dados financeiros, geração de relatórios e integração com APIs externas.`,
    techStack: [
      'Java',
      'Kotlin',
      'Spring Boot',
      'Hibernate',
      'PostgreSQL',
      'Docker',
      'Angular',
      'HTML / CSS',
      'JavaScript',
      'TypeScript',
    ],
    isPrivate: true,
  },
] as const;
