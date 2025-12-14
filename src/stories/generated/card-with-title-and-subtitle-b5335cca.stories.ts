import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';

const meta: Meta = {
  title: 'Generated/Card with Title and Subtitle',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [MatCardModule],
    }),
  ],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <mat-card style="width: 400px;">
        <mat-card-header>
          <mat-card-title>Card Title</mat-card-title>
          <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>This is the card content area. You can add any content here.</p>
        </mat-card-content>
      </mat-card>
    `,
  }),
};

export const WithLongContent: Story = {
  render: () => ({
    template: `
      <mat-card style="width: 400px;">
        <mat-card-header>
          <mat-card-title>Featured Article</mat-card-title>
          <mat-card-subtitle>Published on January 15, 2024</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </mat-card-content>
      </mat-card>
    `,
  }),
};

export const MultipleCards: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <mat-card style="width: 300px;">
          <mat-card-header>
            <mat-card-title>Product Name</mat-card-title>
            <mat-card-subtitle>Category: Electronics</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>High-quality product with amazing features.</p>
          </mat-card-content>
        </mat-card>
        <mat-card style="width: 300px;">
          <mat-card-header>
            <mat-card-title>Service Overview</mat-card-title>
            <mat-card-subtitle>Premium Plan</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>Get access to all premium features and support.</p>
          </mat-card-content>
        </mat-card>
        <mat-card style="width: 300px;">
          <mat-card-header>
            <mat-card-title>User Profile</mat-card-title>
            <mat-card-subtitle>Member since 2024</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <p>View and manage your account settings.</p>
          </mat-card-content>
        </mat-card>
      </div>
    `,
  }),
};