import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appTitleReveal]',
  standalone: true,
  host: {
    class: 'opacity-0 translate-y-6 transition-all duration-700 ease-out',
  },
})
export class TitleRevealDirective implements OnInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.toggle(true);
      return;
    }

    this.observer = new IntersectionObserver(([entry]) => this.toggle(entry.isIntersecting), {
      threshold: 0.15,
    });
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private toggle(visible: boolean): void {
    const classList = this.element.nativeElement.classList;
    classList.toggle('opacity-0', !visible);
    classList.toggle('translate-y-6', !visible);
    classList.toggle('opacity-100', visible);
    classList.toggle('translate-y-0', visible);
  }
}
