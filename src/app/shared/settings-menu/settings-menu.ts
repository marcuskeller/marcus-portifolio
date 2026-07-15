import { Component, ElementRef, HostListener, LOCALE_ID, inject, signal } from '@angular/core';
import { LucideAngularModule, Settings } from 'lucide-angular';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

export function buildLocaleSwitchUrl(
  currentLocale: string,
  targetLocale: string,
  location: Pick<Location, 'pathname' | 'search' | 'hash'>,
): string {
  let rest = location.pathname;
  for (const locale of [currentLocale, targetLocale]) {
    const prefix = `/${locale}`;
    if (rest === prefix || rest.startsWith(`${prefix}/`)) {
      rest = rest.slice(prefix.length);
      break;
    }
  }
  return `/${targetLocale}${rest}${location.search}${location.hash}`;
}

@Component({
  selector: 'app-settings-menu',
  standalone: true,
  imports: [LucideAngularModule, ThemeToggle],
  templateUrl: './settings-menu.html',
})
export class SettingsMenu {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly locale = inject(LOCALE_ID);
  protected readonly isOpen = signal(false);

  protected readonly SettingsIcon = Settings;
  protected readonly isPt = this.locale === 'pt';
  protected readonly otherLocale = this.locale === 'pt' ? 'en' : 'pt';
  protected readonly switchUrl = buildLocaleSwitchUrl(
    this.locale,
    this.otherLocale,
    window.location,
  );

  toggle(): void {
    this.isOpen.update((open) => !open);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.isOpen.set(false);
    }
  }
}
