import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <button
      [attr.mat-button]="variant === 'text' ? '' : null"
      [attr.mat-raised-button]="variant === 'raised' ? '' : null"
      [attr.mat-flat-button]="variant === 'flat' ? '' : null"
      [attr.mat-stroked-button]="variant === 'stroked' ? '' : null"
      [color]="color"
      [disabled]="disabled"
    >
      {{ label }}
    </button>
  `,
})
export class ButtonComponent {
  @Input() label = 'Button';
  @Input() variant: 'text' | 'raised' | 'flat' | 'stroked' = 'raised';
  @Input() color: 'primary' | 'accent' | 'warn' | undefined = 'primary';
  @Input() disabled = false;
}
