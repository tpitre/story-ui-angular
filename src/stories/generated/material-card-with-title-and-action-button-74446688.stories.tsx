import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const meta: Meta = {
  title: 'Generated/Simple Card',
  decorators: [
    moduleMetadata({
      imports: [MatCardModule, MatButtonModule],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    template: `
      <mat-card style="max-width: 400px;">
        <mat-card-header>
          <mat-card-title>Card Title</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>
            This is a simple card component built with Angular Material. 
            It includes a title, descriptive text, and an action button 
            to demonstrate the basic card structure.
          </p>
        </mat-card-content>
        <mat-card-actions align="end">
          <button mat-raised-button color="primary">Take Action</button>
        </mat-card-actions>
      </mat-card>
    `,
  }),
};

export const WithSubtitle: Story = {
  render: () => ({
    template: `
      <mat-card style="max-width: 400px;">
        <mat-card-header>
          <mat-card-title>Card with Subtitle</mat-card-title>
          <mat-card-subtitle>Secondary information</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>
            This card variation includes a subtitle below the main title, 
            providing additional context or categorization for the card content.
          </p>
        </mat-card-content>
        <mat-card-actions align="end">
          <button mat-button>Cancel</button>
          <button mat-raised-button color="primary">Confirm</button>
        </mat-card-actions>
      </mat-card>
    `,
  }),
};

export const MultipleActions: Story = {
  render: () => ({
    template: `
      <mat-card style="max-width: 400px;">
        <mat-card-header>
          <mat-card-title>Product Information</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>
            This card demonstrates multiple action buttons that can be used 
            for different user interactions like sharing, saving, or viewing 
            more details about the content.
          </p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button>Share</button>
          <button mat-button>Save</button>
          <button mat-raised-button color="primary">Learn More</button>
        </mat-card-actions>
      </mat-card>
    `,
  }),
};