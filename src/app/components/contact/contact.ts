import { Component, computed, inject } from '@angular/core';
import { Linkedin, LucideAngularModule, LucideIconData, Mail } from 'lucide-angular';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { TitleRevealDirective } from '../../shared/directives/title-reveal.directive';
import { BrandIcon } from '../../shared/icons/brand-icon';
import { LanguageService } from '../../shared/services/language.service';
import { translationsFor } from '../../i18n/translations.model';
import { socialLinksFor, SocialPlatform } from './social-links.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollRevealDirective, TitleRevealDirective, LucideAngularModule, BrandIcon],
  templateUrl: './contact.html',
})
export class Contact {
  private readonly language = inject(LanguageService);
  protected readonly socialLinks = computed(() => socialLinksFor(this.language.lang()));
  protected readonly text = computed(() => translationsFor(this.language.lang()).contact);

  protected iconFor(platform: SocialPlatform): LucideIconData | undefined {
    return SOCIAL_ICONS[platform];
  }
}

const SOCIAL_ICONS: Partial<Record<SocialPlatform, LucideIconData>> = {
  linkedin: Linkedin,
  email: Mail,
};
