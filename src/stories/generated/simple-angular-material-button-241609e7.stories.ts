import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta = {
  title: 'Generated/Simple Angular Material Button',
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule, MatIconModule],
    }),
  ],
  parameters: { layout: 'centered' },
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: (args) => ({
    props: args,
    template: `<button mat-raised-button color="primary" (click)="onClick($event)">Basic Button</button>`,
  }),
};

export const Raised: Story = {
  render: (args) => ({
    props: args,
    template: `<button mat-raised-button color="primary" (click)="onClick($event)">Raised Button</button>`,
  }),
};

export const Flat: Story = {
  render: (args) => ({
    props: args,
    template: `<button mat-flat-button color="accent" (click)="onClick($event)">Flat Button</button>`,
  }),
};

export const Stroked: Story = {
  render: (args) => ({
    props: args,
    template: `<button mat-stroked-button (click)="onClick($event)">Stroked Button</button>`,
  }),
};

export const WithIcon: Story = {
  render: (args) => ({
    props: args,
    template: `
      <button mat-raised-button color="primary" (click)="onClick($event)">
        <mat-icon>favorite</mat-icon>
        Button with Icon
      </button>
    `,
  }),
};

export const IconButton: Story = {
  render: (args) => ({
    props: args,
    template: `
      <button mat-icon-button color="primary" (click)="onClick($event)">
        <mat-icon>settings</mat-icon>
      </button>
    `,
  }),
};

export const Disabled: Story = {
  render: (args) => ({
    props: args,
    template: `<button mat-raised-button color="primary" disabled>Disabled Button</button>`,
  }),
};

export const AllVariants: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
        <button mat-raised-button color="primary" (click)="onClick($event)">Basic</button>
        <button mat-raised-button color="primary" (click)="onClick($event)">Raised</button>
        <button mat-flat-button color="accent" (click)="onClick($event)">Flat</button>
        <button mat-stroked-button (click)="onClick($event)">Stroked</button>
        <button mat-icon-button color="primary" (click)="onClick($event)">
          <mat-icon>favorite</mat-icon>
        </button>
      </div>
    `,
  }),
};