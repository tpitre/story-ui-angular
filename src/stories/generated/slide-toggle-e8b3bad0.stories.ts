import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

const meta: Meta = {
  title: 'Generated/Slide Toggle',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [MatSlideToggleModule, FormsModule],
    }),
  ],
  parameters: { layout: 'centered' },
  argTypes: {
    change: { action: 'changed' },
    toggleChange: { action: 'toggle changed' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <mat-slide-toggle (change)="change($event)">
        Slide me
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

export const CheckedAndDisabled: Story = {
  render: (args) => ({
    props: args,
    template: `
      <mat-slide-toggle [checked]="true" [disabled]="true">
        Checked and Disabled
      </mat-slide-toggle>
    `,
  }),
};

export const WithCustomColor: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <mat-slide-toggle color="primary" [checked]="true" (change)="change($event)">
          Primary Color
        </mat-slide-toggle>
        <mat-slide-toggle color="accent" [checked]="true" (change)="change($event)">
          Accent Color
        </mat-slide-toggle>
        <mat-slide-toggle color="warn" [checked]="true" (change)="change($event)">
          Warn Color
        </mat-slide-toggle>
      </div>
    `,
  }),
};

export const WithLabelPosition: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <mat-slide-toggle labelPosition="after" (change)="change($event)">
          Label After (default)
        </mat-slide-toggle>
        <mat-slide-toggle labelPosition="before" (change)="change($event)">
          Label Before
        </mat-slide-toggle>
      </div>
    `,
  }),
};

export const MultipleToggles: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <mat-slide-toggle (change)="change($event)">
          Enable notifications
        </mat-slide-toggle>
        <mat-slide-toggle (change)="change($event)">
          Enable email alerts
        </mat-slide-toggle>
        <mat-slide-toggle [checked]="true" (change)="change($event)">
          Enable dark mode
        </mat-slide-toggle>
        <mat-slide-toggle (change)="change($event)">
          Enable auto-save
        </mat-slide-toggle>
      </div>
    `,
  }),
};