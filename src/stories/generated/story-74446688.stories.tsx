import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const meta: Meta = {
  title: 'Generated/Material Card with Image',
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
        <img mat-card-image src="https://picsum.photos/400/200" alt="Placeholder image">
        <mat-card-header>
          <mat-card-title>Card Title</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>This is a sample card with a beautiful image at the top. The card includes a title, descriptive content, and an action button below.</p>
        </mat-card-content>
        <mat-card-actions align="end">
          <button mat-raised-button color="primary">Learn More</button>
        </mat-card-actions>
      </mat-card>
    `,
  }),
};