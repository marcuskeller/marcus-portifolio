import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

const ANIMATION_DURATION_MS = 1200;

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnInit, OnDestroy {
  readonly value = input('', { alias: 'appCountUp' });

  private readonly element = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const match = this.value().match(/^(\d+)(.*)$/);
    if (!match || typeof IntersectionObserver === 'undefined') {
      this.element.nativeElement.textContent = this.value();
      return;
    }

    const target = Number(match[1]);
    const suffix = match[2];
    this.element.nativeElement.textContent = `0${suffix}`;

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.animate(target, suffix);
          this.observer?.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private animate(target: number, suffix: string): void {
    const start = performance.now();

    const step = (now: number): void => {
      const progress = Math.min((now - start) / ANIMATION_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      this.element.nativeElement.textContent = `${current}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
