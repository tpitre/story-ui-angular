import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const meta: Meta = {
  title: 'Generated/Progress Spinner',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [MatProgressSpinnerModule],
    }),
  ],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <mat-progress-spinner mode="indeterminate"></mat-progress-spinner>
    `,
  }),
};

export const Determinate: Story = {
  render: () => ({
    props: {
      value: 65,
    },
    template: `
      <mat-progress-spinner mode="determinate" [value]="value"></mat-progress-spinner>
    `,
  }),
};

export const WithDifferentColors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <mat-progress-spinner mode="indeterminate" color="primary"></mat-progress-spinner>
        <mat-progress-spinner mode="indeterminate" color="accent"></mat-progress-spinner>
        <mat-progress-spinner mode="indeterminate" color="warn"></mat-progress-spinner>
      </div>
    `,
  }),
};

export const DifferentSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <mat-progress-spinner mode="indeterminate" diameter="30"></mat-progress-spinner>
        <mat-progress-spinner mode="indeterminate" diameter="50"></mat-progress-spinner>
        <mat-progress-spinner mode="indeterminate" diameter="75"></mat-progress-spinner>
        <mat-progress-spinner mode="indeterminate" diameter="100"></mat-progress-spinner>
      </div>
    `,
  }),
};

export const DeterminateProgress: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <div style="text-align: center;">
          <mat-progress-spinner mode="determinate" [value]="25"></mat-progress-spinner>
          <p style="margin-top: 8px;">25%</p>
        </div>
        <div style="text-align: center;">
          <mat-progress-spinner mode="determinate" [value]="50"></mat-progress-spinner>
          <p style="margin-top: 8px;">50%</p>
        </div>
        <div style="text-align: center;">
          <mat-progress-spinner mode="determinate" [value]="75"></mat-progress-spinner>
          <p style="margin-top: 8px;">75%</p>
        </div>
        <div style="text-align: center;">
          <mat-progress-spinner mode="determinate" [value]="100"></mat-progress-spinner>
          <p style="margin-top: 8px;">100%</p>
        </div>
      </div>
    `,
  }),
};

export const CustomStrokeWidth: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <mat-progress-spinner mode="indeterminate" strokeWidth="2"></mat-progress-spinner>
        <mat-progress-spinner mode="indeterminate" strokeWidth="5"></mat-progress-spinner>
        <mat-progress-spinner mode="indeterminate" strokeWidth="10"></mat-progress-spinner>
      </div>
    `,
  }),
};