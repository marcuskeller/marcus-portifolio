import { Injectable, afterNextRender, signal } from '@angular/core';

const ACTIVE_REFERENCE_RATIO = 0.2;

@Injectable({ providedIn: 'root' })
export class ActiveSectionService {
  readonly activeId = signal<string>('');

  private sections: HTMLElement[] = [];

  constructor() {
    afterNextRender(() => {
      this.sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
      if (this.sections.length === 0) {
        return;
      }

      this.updateActiveSection();
      window.addEventListener('scroll', () => this.updateActiveSection(), { passive: true });
    });
  }

  private updateActiveSection(): void {
    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) {
      this.activeId.set(this.sections[this.sections.length - 1].id);
      return;
    }

    const referenceY = window.innerHeight * ACTIVE_REFERENCE_RATIO;
    let current = this.sections[0];
    for (const section of this.sections) {
      if (section.getBoundingClientRect().top <= referenceY) {
        current = section;
      } else {
        break;
      }
    }
    this.activeId.set(current.id);
  }
}
