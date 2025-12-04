import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';

const meta: Meta = {
  title: 'Generated/Simple Button',
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
    }),
  ],
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: () => ({
    template: `
      <button mat-raised-button color="primary">
        Click Me
      </button>
    `,
  }),
};

export const Flat: Story = {
  render: () => ({
    template: `
      <button mat-flat-button color="primary">
        Flat Button
      </button>
    `,
  }),
};

export const Stroked: Story = {
  render: () => ({
    template: `
      <button mat-stroked-button color="primary">
        Stroked Button
      </button>
    `,
  }),
};

export const Basic: Story = {
  render: () => ({
    template: `
      <button mat-button color="primary">
        Basic Button
      </button>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <button mat-raised-button color="primary">Raised</button>
        <button mat-flat-button color="primary">Flat</button>
        <button mat-stroked-button color="primary">Stroked</button>
        <button mat-button color="primary">Basic</button>
      </div>
    `,
  }),
};