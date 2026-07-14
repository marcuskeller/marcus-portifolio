export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { href: '#sobre', label: $localize`:@@nav.about:Sobre` },
  { href: '#skills', label: $localize`:@@nav.skills:Skills` },
  { href: '#projetos', label: $localize`:@@nav.projects:Projetos` },
  { href: '#experiencia', label: $localize`:@@nav.experience:Experiência` },
  { href: '#formacao', label: $localize`:@@nav.education:Formação` },
  { href: '#contato', label: $localize`:@@nav.contact:Contato` },
];
