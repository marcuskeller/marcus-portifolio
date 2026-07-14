import { Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-cursor-glow',
  standalone: true,
  template: `
    <div
      class="pointer-events-none fixed inset-0 z-40 mix-blend-multiply dark:mix-blend-screen"
      aria-hidden="true"
    >
      <div
        class="absolute size-70 rounded-full opacity-20 blur-3xl"
        style="background: radial-gradient(circle, rgba(99,102,241,0.9), rgba(168,85,247,0.5) 45%, transparent 70%); transform: translate(-50%, -50%);"
        [style.left.px]="x()"
        [style.top.px]="y()"
      ></div>
    </div>
  `,
})
export class CursorGlow implements OnDestroy {
  protected readonly x = signal(-1000);
  protected readonly y = signal(-1000);

  private targetX = -1000;
  private targetY = -1000;
  private rafId?: number;

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }
    window.addEventListener('mousemove', this.onMouseMove, { passive: true });
    this.loop();
  }

  ngOnDestroy(): void {
    window.removeEventListener('mousemove', this.onMouseMove);
    if (this.rafId !== undefined) {
      cancelAnimationFrame(this.rafId);
    }
  }

  private onMouseMove = (event: MouseEvent): void => {
    this.targetX = event.clientX;
    this.targetY = event.clientY;
  };

  private loop = (): void => {
    this.x.update((current) => current + (this.targetX - current) * 0.18);
    this.y.update((current) => current + (this.targetY - current) * 0.18);
    this.rafId = requestAnimationFrame(this.loop);
  };
}
