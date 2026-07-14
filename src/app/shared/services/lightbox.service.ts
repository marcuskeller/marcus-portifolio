import { Injectable, signal } from '@angular/core';

export interface LightboxImage {
  readonly src: string;
  readonly alt: string;
}

@Injectable({ providedIn: 'root' })
export class LightboxService {
  readonly image = signal<LightboxImage | null>(null);

  open(image: LightboxImage): void {
    this.image.set(image);
  }

  close(): void {
    this.image.set(null);
  }
}
