import { Directive, ElementRef, HostListener, Renderer2, inject } from '@angular/core';

const MAX_TILT_DEGREES = 8;
const LIFT_PX = 4;

@Directive({
  selector: '[appTilt]',
  standalone: true,
  host: {
    class: 'transition-transform duration-200 ease-out will-change-transform',
    style: 'transform-style: preserve-3d;',
  },
})
export class TiltDirective {
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const rect = this.element.nativeElement.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateX = (-offsetY * MAX_TILT_DEGREES).toFixed(2);
    const rotateY = (offsetX * MAX_TILT_DEGREES).toFixed(2);

    this.renderer.setStyle(
      this.element.nativeElement,
      'transform',
      `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-${LIFT_PX}px)`,
    );
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'transform',
      'perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0)',
    );
  }
}
