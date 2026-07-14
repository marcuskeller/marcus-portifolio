import { Component, computed, inject, signal } from '@angular/core';
import { Code2, LucideAngularModule, Menu, X } from 'lucide-angular';
import { navLinksFor } from './nav-links.data';
import { LanguageService } from '../../shared/utils/language.service';
import { ActiveSectionService } from '../../shared/utils/active-section.service';
import { SettingsMenu } from '../../shared/settings-menu/settings-menu';
import { SmoothScrollDirective } from '../../shared/utils/smooth-scroll.directive';

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

  protected readonly LogoIcon = Code2;
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
