import { Component, computed, inject } from '@angular/core';
import { Lang, LanguageService } from '../../shared/utils/language.service';
import { siteConfigFor } from '../../shared/constants/site-config.data';

const RIGHTS_TEXT: Record<Lang, string> = {
  pt: 'Todos os direitos reservados.',
  en: 'All rights reserved.',
};

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
})
export class Footer {
  private readonly language = inject(LanguageService);
  protected readonly name = computed(() => siteConfigFor(this.language.lang()).name);
  protected readonly rightsText = computed(() => RIGHTS_TEXT[this.language.lang()]);
  protected readonly year = new Date().getFullYear();
}
