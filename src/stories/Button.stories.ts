import type { Meta, StoryObj } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';

const meta: Meta = {
  title: 'Angular Material/Button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    color: {
      control: 'select',
      options: ['primary', 'accent', 'warn', undefined],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: (args) => ({
    moduleMetadata: {
      imports: [MatButtonModule],
    },
    template: `<button mat-raised-button [color]="color" [disabled]="disabled">{{ label }}</button>`,
    props: args,
  }),
  args: {
    label: 'Primary Button',
    color: 'primary',
    disabled: false,
  },
};

export const Flat: Story = {
  render: (args) => ({
    moduleMetadata: {
      imports: [MatButtonModule],
    },
    template: `<button mat-flat-button [color]="color" [disabled]="disabled">{{ label }}</button>`,
    props: args,
  }),
  args: {
    label: 'Flat Button',
    color: 'primary',
    disabled: false,
  },
};

export const Stroked: Story = {
  render: (args) => ({
    moduleMetadata: {
      imports: [MatButtonModule],
    },
    template: `<button mat-stroked-button [color]="color" [disabled]="disabled">{{ label }}</button>`,
    props: args,
  }),
  args: {
    label: 'Stroked Button',
    color: 'primary',
    disabled: false,
  },
};

export const Warn: Story = {
  render: (args) => ({
    moduleMetadata: {
      imports: [MatButtonModule],
    },
    template: `<button mat-raised-button [color]="color" [disabled]="disabled">{{ label }}</button>`,
    props: args,
  }),
  args: {
    label: 'Delete',
    color: 'warn',
    disabled: false,
  },
};
