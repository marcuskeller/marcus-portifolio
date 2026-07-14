import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ArrowRight,
  Building2,
  Calendar,
  CodeXml,
  ExternalLink,
  LucideAngularModule,
  Lock,
  Maximize2,
  MessageCircle,
} from 'lucide-angular';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { TitleRevealDirective } from '../../shared/directives/title-reveal.directive';
import { TiltDirective } from '../../shared/directives/tilt.directive';
import { BrandIcon } from '../../shared/icons/brand-icon';
import { LightboxService } from '../../shared/services/lightbox.service';
import { Project, PROJECTS } from './projects.data';

const PREVIEW_ALT = $localize`:@@projects.previewAlt:captura de tela do projeto`;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ScrollRevealDirective,
    TitleRevealDirective,
    TiltDirective,
    LucideAngularModule,
    BrandIcon,
    NgOptimizedImage,
  ],
  templateUrl: './projects.html',
})
export class Projects {
  private readonly lightbox = inject(LightboxService);
  protected readonly projects = PROJECTS;
  protected readonly previewAlt = PREVIEW_ALT;

  protected readonly ExternalLinkIcon = ExternalLink;
  protected readonly LockIcon = Lock;
  protected readonly ArrowRightIcon = ArrowRight;
  protected readonly CalendarIcon = Calendar;
  protected readonly Building2Icon = Building2;
  protected readonly MessageCircleIcon = MessageCircle;
  protected readonly Maximize2Icon = Maximize2;
  protected readonly Code2Icon = CodeXml;

  openImage(project: Project): void {
    if (project.image) {
      const alt = `${project.name} — ${PREVIEW_ALT}`;
      this.lightbox.open({ src: project.image, alt });
    }
  }
}
