import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

const meta: Meta = {
  title: 'Generated/Card Component',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [MatCardModule, MatButtonModule, MatIconModule, MatDividerModule],
    }),
  ],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <mat-card style="width: 350px;">
        <mat-card-header>
          <mat-card-title>Card Title</mat-card-title>
          <mat-card-subtitle>Card Subtitle</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>This is the card content area where you can place any information.</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button>ACTION 1</button>
          <button mat-button>ACTION 2</button>
        </mat-card-actions>
      </mat-card>
    `,
  }),
};

export const WithImage: Story = {
  render: () => ({
    template: `
      <mat-card style="width: 350px;">
        <img mat-card-image src="https://picsum.photos/350/200?random=1" alt="Placeholder image">
        <mat-card-header>
          <mat-card-title>Photo Card</mat-card-title>
          <mat-card-subtitle>Beautiful scenery</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>A card with an image header showcasing stunning photography.</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button>LIKE</button>
          <button mat-button>SHARE</button>
        </mat-card-actions>
      </mat-card>
    `,
  }),
};

export const WithAvatar: Story = {
  render: () => ({
    template: `
      <mat-card style="width: 350px;">
        <mat-card-header>
          <div mat-card-avatar style="background-image: url('https://picsum.photos/40/40?random=2'); background-size: cover;"></div>
          <mat-card-title>John Doe</mat-card-title>
          <mat-card-subtitle>@johndoe</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image src="https://picsum.photos/350/200?random=3" alt="Post image">
        <mat-card-content>
          <p>Just posted a new photo from my recent trip. What an amazing experience!</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-icon-button>
            <mat-icon>favorite</mat-icon>
          </button>
          <button mat-icon-button>
            <mat-icon>share</mat-icon>
          </button>
        </mat-card-actions>
      </mat-card>
    `,
  }),
};

export const ProductCard: Story = {
  render: () => ({
    template: `
      <mat-card style="width: 300px;">
        <img mat-card-image src="https://picsum.photos/300/250?random=4" alt="Product image">
        <mat-card-content>
          <mat-card-title>Premium Headphones</mat-card-title>
          <mat-card-subtitle>Wireless Audio</mat-card-subtitle>
          <p style="font-size: 24px; font-weight: bold; margin: 16px 0;">$299.99</p>
          <p>High-quality wireless headphones with noise cancellation and superior sound quality.</p>
        </mat-card-content>
        <mat-divider></mat-divider>
        <mat-card-actions>
          <button mat-raised-button color="primary" style="width: 100%;">Add to Cart</button>
        </mat-card-actions>
      </mat-card>
    `,
  }),
};

export const MultipleCards: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <mat-card style="width: 250px;">
          <mat-card-header>
            <mat-card-title>Card One</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>Content for the first card.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button>VIEW</button>
          </mat-card-actions>
        </mat-card>
        
        <mat-card style="width: 250px;">
          <mat-card-header>
            <mat-card-title>Card Two</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>Content for the second card.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button>VIEW</button>
          </mat-card-actions>
        </mat-card>
        
        <mat-card style="width: 250px;">
          <mat-card-header>
            <mat-card-title>Card Three</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>Content for the third card.</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button>VIEW</button>
          </mat-card-actions>
        </mat-card>
      </div>
    `,
  }),
};