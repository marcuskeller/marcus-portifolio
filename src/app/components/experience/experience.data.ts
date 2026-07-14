import { Experience as ExperienceItem } from '../../shared/models/experience.model';

export const EXPERIENCES: readonly ExperienceItem[] = [
  {
    role: $localize`:@@experience.kellerJunior.role:Desenvolvedor de Software Júnior — Full Stack`,
    organization: 'Keller Tecnologia',
    location: $localize`:@@experience.kellerJunior.location:Joinville, SC · Presencial`,
    startDate: $localize`:@@experience.kellerJunior.startDate:Jul 2025`,
    endDate: '',
    isOngoing: true,
    type: 'work',
    description: $localize`:@@experience.kellerJunior.description:Entrega de funcionalidades ponta a ponta, da modelagem de banco de dados à interface final, com atuação ativa em decisões arquiteturais.`,
    highlights: [
      $localize`:@@experience.kellerJunior.highlight1:Projeto e construção de APIs RESTful escaláveis com Java, Kotlin e Spring Boot`,
      $localize`:@@experience.kellerJunior.highlight2:Modelagem de bancos relacionais (PostgreSQL/MySQL) com foco em performance`,
      $localize`:@@experience.kellerJunior.highlight3:Otimização de 10% no tempo de resposta da API de dashboard via refatoração de queries e regras de negócio`,
      $localize`:@@experience.kellerJunior.highlight4:Aplicação de SOLID, Design Patterns, TDD e Clean Architecture no refinamento técnico da equipe`,
    ],
  },
  {
    role: $localize`:@@experience.kellerIntern.role:Desenvolvedor de Software — Estágio Full Stack`,
    organization: 'Keller Tecnologia',
    location: $localize`:@@experience.kellerIntern.location:Joinville, SC · Presencial`,
    startDate: $localize`:@@experience.kellerIntern.startDate:Ago 2024`,
    endDate: $localize`:@@experience.kellerIntern.endDate:Jul 2025`,
    isOngoing: false,
    type: 'work',
    description: $localize`:@@experience.kellerIntern.description:Construção e manutenção de aplicações web full stack sob mentoria técnica, com foco em Angular no frontend e Spring Boot no backend.`,
    highlights: [
      $localize`:@@experience.kellerIntern.highlight1:Desenvolvimento e consumo de APIs REST para integração entre sistemas`,
      $localize`:@@experience.kellerIntern.highlight2:Construção de componentes e funcionalidades no frontend com Angular, HTML e CSS`,
      $localize`:@@experience.kellerIntern.highlight3:Rotinas de manipulação de dados e consultas SQL para regras de negócio`,
      $localize`:@@experience.kellerIntern.highlight4:Fluxo ágil em Kanban, com versionamento e revisão de código via Git`,
    ],
  },
];

export const EXPERIENCE_CURRENT_LABEL = $localize`:@@experience.currentLabel:Atual`;
