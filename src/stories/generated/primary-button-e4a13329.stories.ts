import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';

const meta: Meta = {
  title: 'Generated/Primary Button',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule],
    }),
  ],
  parameters: { layout: 'centered' },
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

export const PrimaryFlat: Story = {
  render: () => ({
    template: `
      <button mat-flat-button color="primary">
        Click Me
      </button>
    `,
  }),
};

export const PrimaryStroked: Story = {
  render: () => ({
    template: `
      <button mat-stroked-button color="primary">
        Click Me
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