import type { Meta, StoryObj } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

const meta: Meta = {
  title: 'Angular Material/Card',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const BasicCard: Story = {
  render: () => ({
    moduleMetadata: {
      imports: [MatCardModule, MatButtonModule],
    },
    template: `
      <mat-card style="max-width: 340px;">
        <mat-card-header>
          <mat-card-title>Card Title</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>This is a basic Angular Material card component with some descriptive text.</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button color="primary">Learn more</button>
        </mat-card-actions>
      </mat-card>
    `,
  }),
};

export const ProductCard: Story = {
  render: () => ({
    moduleMetadata: {
      imports: [MatCardModule, MatButtonModule, MatChipsModule],
    },
    template: `
      <mat-card style="max-width: 340px;">
        <img mat-card-image src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80" alt="Norway fjord">
        <mat-card-header>
          <mat-card-title>Norway Fjord Adventures</mat-card-title>
          <mat-card-subtitle>
            <mat-chip-set>
              <mat-chip color="accent" highlighted>On Sale</mat-chip>
            </mat-chip-set>
          </mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <p>With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway.</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-flat-button color="primary" style="width: 100%;">Book classic tour</button>
        </mat-card-actions>
      </mat-card>
    `,
  }),
};

export const SimpleCard: Story = {
  render: () => ({
    moduleMetadata: {
      imports: [MatCardModule],
    },
    template: `
      <mat-card appearance="outlined" style="max-width: 300px;">
        <mat-card-header>
          <mat-card-title>Simple Card</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p style="color: rgba(0,0,0,0.6);">A minimal card with outlined appearance</p>
        </mat-card-content>
      </mat-card>
    `,
  }),
};
