import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

const meta: Meta = {
  title: 'Generated/Slide Toggle Switch',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [MatSlideToggleModule, FormsModule],
    }),
  ],
  parameters: { layout: 'centered' },
  argTypes: {
    change: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <mat-slide-toggle (change)="change($event)">
        Slide me!
      </mat-slide-toggle>
    `,
  }),
};

export const Checked: Story = {
  render: (args) => ({
    props: args,
    template: `
      <mat-slide-toggle [checked]="true" (change)="change($event)">
        Enabled
      </mat-slide-toggle>
    `,
  }),
};

export const Disabled: Story = {
  render: (args) => ({
    props: args,
    template: `
      <mat-slide-toggle [disabled]="true">
        Disabled
      </mat-slide-toggle>
    `,
  }),
};

export const DisabledChecked: Story = {
  render: (args) => ({
    props: args,
    template: `
      <mat-slide-toggle [checked]="true" [disabled]="true">
        Disabled & Checked
      </mat-slide-toggle>
    `,
  }),
};

export const WithColors: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <mat-slide-toggle color="primary" [checked]="true">
          Primary Color
        </mat-slide-toggle>
        <mat-slide-toggle color="accent" [checked]="true">
          Accent Color
        </mat-slide-toggle>
        <mat-slide-toggle color="warn" [checked]="true">
          Warn Color
        </mat-slide-toggle>
      </div>
    `,
  }),
};

export const SettingsPanel: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 24px; max-width: 400px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="margin-top: 0; margin-bottom: 24px; font-size: 20px;">Settings</h2>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <mat-slide-toggle [checked]="true" (change)="change($event)">
            Enable notifications
          </mat-slide-toggle>
          <mat-slide-toggle [checked]="false" (change)="change($event)">
            Dark mode
          </mat-slide-toggle>
          <mat-slide-toggle [checked]="true" (change)="change($event)">
            Auto-save
          </mat-slide-toggle>
          <mat-slide-toggle [checked]="false" (change)="change($event)">
            Show preview
          </mat-slide-toggle>
        </div>
      </div>
    `,
  }),
};