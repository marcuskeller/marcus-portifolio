import { Component, computed, inject } from '@angular/core';
import { Languages, LucideAngularModule } from 'lucide-angular';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { TitleRevealDirective } from '../../shared/directives/title-reveal.directive';
import { LanguageService } from '../../shared/services/language.service';
import { translationsFor } from '../../i18n/translations.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective, TitleRevealDirective, LucideAngularModule],
  templateUrl: './about.html',
})
export class About {
  private readonly language = inject(LanguageService);
  protected readonly text = computed(() => translationsFor(this.language.lang()).about);

  protected readonly LanguagesIcon = Languages;
}
