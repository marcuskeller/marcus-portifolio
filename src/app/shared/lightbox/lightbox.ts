import { Component, HostListener, inject } from '@angular/core';
import { LucideAngularModule, X } from 'lucide-angular';
import { LightboxService } from '../services/lightbox.service';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './lightbox.html',
})
export class Lightbox {
  protected readonly lightbox = inject(LightboxService);
  protected readonly XIcon = X;

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.lightbox.close();
  }
}
