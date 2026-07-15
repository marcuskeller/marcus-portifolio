import { DOCUMENT } from '@angular/common';
import { Component, afterNextRender, inject, signal } from '@angular/core';
import { ArrowUp, LucideAngularModule } from 'lucide-angular';

const VISIBILITY_THRESHOLD_PX = 400;

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './back-to-top.html',
})
export class BackToTop {
  private readonly document = inject(DOCUMENT);

  protected readonly visible = signal(false);
  protected readonly ArrowUpIcon = ArrowUp;

  constructor() {
    afterNextRender(() => {
      this.updateVisibility();
      window.addEventListener('scroll', () => this.updateVisibility(), { passive: true });
    });
  }

  scrollToTop(): void {
    this.document.querySelector('#top')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private updateVisibility(): void {
    this.visible.set(window.scrollY > VISIBILITY_THRESHOLD_PX);
  }
}
