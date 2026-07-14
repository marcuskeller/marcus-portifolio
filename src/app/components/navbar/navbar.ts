import { Component, computed, inject, signal } from '@angular/core';
import { CodeXml, LucideAngularModule, Menu, X } from 'lucide-angular';
import { navLinksFor } from './nav-links.data';
import { LanguageService } from '../../shared/services/language.service';
import { ActiveSectionService } from '../../shared/services/active-section.service';
import { SettingsMenu } from '../../shared/settings-menu/settings-menu';
import { SmoothScrollDirective } from '../../shared/directives/smooth-scroll.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule, SettingsMenu, SmoothScrollDirective],
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly language = inject(LanguageService);
  protected readonly activeSection = inject(ActiveSectionService);
  protected readonly navLinks = computed(() => navLinksFor(this.language.lang()));
  protected readonly isMenuOpen = signal(false);

  protected readonly LogoIcon = CodeXml;
  protected readonly MenuIcon = Menu;
  protected readonly XIcon = X;

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  isActive(href: string): boolean {
    return href === `#${this.activeSection.activeId()}`;
  }
}
