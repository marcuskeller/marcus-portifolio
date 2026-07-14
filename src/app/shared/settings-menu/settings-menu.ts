import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { LucideAngularModule, Settings } from 'lucide-angular';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-settings-menu',
  standalone: true,
  imports: [LucideAngularModule, ThemeToggle],
  templateUrl: './settings-menu.html',
})
export class SettingsMenu {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  protected readonly isOpen = signal(false);

  protected readonly SettingsIcon = Settings;

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
