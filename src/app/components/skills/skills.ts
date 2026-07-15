import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { TitleRevealDirective } from '../../shared/directives/title-reveal.directive';
import { categoryLabel, SKILLS, Skill, SkillCategory } from './skills.data';

interface SkillGroup {
  readonly category: SkillCategory;
  readonly label: string;
  readonly skills: readonly Skill[];
}

const CATEGORIES: readonly SkillCategory[] = [
  'Backend',
  'Frontend',
  'Cloud & DevOps',
  'Práticas & Arquitetura',
  'Testes',
  'Ferramentas',
];

const SKILL_GROUPS: readonly SkillGroup[] = CATEGORIES.map((category) => ({
  category,
  label: categoryLabel(category),
  skills: SKILLS.filter((skill) => skill.category === category),
}));

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollRevealDirective, TitleRevealDirective],
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly skillGroups = SKILL_GROUPS;
}
