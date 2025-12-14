import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const meta: Meta = {
  title: 'Generated/Tabbed Interface',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [MatTabsModule, MatIconModule, MatButtonModule, MatCardModule],
    }),
  ],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <mat-tab-group>
        <mat-tab label="Overview">
          <div style="padding: 16px;">
            <h2>Overview</h2>
            <p>This is the overview tab with general information about the content.</p>
          </div>
        </mat-tab>
        <mat-tab label="Details">
          <div style="padding: 16px;">
            <h2>Details</h2>
            <p>Detailed information and specifications can be found here.</p>
          </div>
        </mat-tab>
        <mat-tab label="Settings">
          <div style="padding: 16px;">
            <h2>Settings</h2>
            <p>Configure your preferences and settings in this section.</p>
          </div>
        </mat-tab>
      </mat-tab-group>
    `,
  }),
};

export const WithIcons: Story = {
  render: () => ({
    template: `
      <mat-tab-group>
        <mat-tab>
          <ng-template mat-tab-label>
            <mat-icon style="margin-right: 8px;">home</mat-icon>
            Home
          </ng-template>
          <div style="padding: 16px;">
            <h2>Home</h2>
            <p>Welcome to the home section.</p>
          </div>
        </mat-tab>
        <mat-tab>
          <ng-template mat-tab-label>
            <mat-icon style="margin-right: 8px;">favorite</mat-icon>
            Favorites
          </ng-template>
          <div style="padding: 16px;">
            <h2>Favorites</h2>
            <p>Your favorite items are displayed here.</p>
          </div>
        </mat-tab>
        <mat-tab>
          <ng-template mat-tab-label>
            <mat-icon style="margin-right: 8px;">settings</mat-icon>
            Settings
          </ng-template>
          <div style="padding: 16px;">
            <h2>Settings</h2>
            <p>Manage your application settings.</p>
          </div>
        </mat-tab>
      </mat-tab-group>
    `,
  }),
};

export const WithCards: Story = {
  render: () => ({
    template: `
      <mat-tab-group>
        <mat-tab label="Products">
          <div style="padding: 16px; display: flex; gap: 16px; flex-wrap: wrap;">
            <mat-card style="width: 250px;">
              <img mat-card-image src="https://picsum.photos/250/150?random=1" alt="Product 1">
              <mat-card-header>
                <mat-card-title>Product 1</mat-card-title>
                <mat-card-subtitle>$29.99</mat-card-subtitle>
              </mat-card-header>
              <mat-card-content>
                <p>High-quality product with excellent features.</p>
              </mat-card-content>
              <mat-card-actions>
                <button mat-button color="primary">VIEW</button>
                <button mat-button>BUY NOW</button>
              </mat-card-actions>
            </mat-card>
            <mat-card style="width: 250px;">
              <img mat-card-image src="https://picsum.photos/250/150?random=2" alt="Product 2">
              <mat-card-header>
                <mat-card-title>Product 2</mat-card-title>
                <mat-card-subtitle>$39.99</mat-card-subtitle>
              </mat-card-header>
              <mat-card-content>
                <p>Premium product with advanced capabilities.</p>
              </mat-card-content>
              <mat-card-actions>
                <button mat-button color="primary">VIEW</button>
                <button mat-button>BUY NOW</button>
              </mat-card-actions>
            </mat-card>
          </div>
        </mat-tab>
        <mat-tab label="Services">
          <div style="padding: 16px;">
            <mat-card>
              <mat-card-header>
                <mat-card-title>Available Services</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <p>Explore our range of professional services.</p>
                <ul>
                  <li>Consulting Services</li>
                  <li>Technical Support</li>
                  <li>Training Programs</li>
                  <li>Custom Development</li>
                </ul>
              </mat-card-content>
            </mat-card>
          </div>
        </mat-tab>
        <mat-tab label="About">
          <div style="padding: 16px;">
            <mat-card>
              <mat-card-header>
                <mat-card-title>About Us</mat-card-title>
              </mat-card-header>
              <mat-card-content>
                <p>We are dedicated to providing the best products and services to our customers.</p>
                <p>Our team has over 10 years of experience in the industry.</p>
              </mat-card-content>
            </mat-card>
          </div>
        </mat-tab>
      </mat-tab-group>
    `,
  }),
};

export const BackgroundColor: Story = {
  render: () => ({
    template: `
      <mat-tab-group backgroundColor="primary">
        <mat-tab label="Primary Tab 1">
          <div style="padding: 16px;">
            <h2>Primary Background</h2>
            <p>Tabs with primary background color.</p>
          </div>
        </mat-tab>
        <mat-tab label="Primary Tab 2">
          <div style="padding: 16px;">
            <h2>Content</h2>
            <p>Additional content in the second tab.</p>
          </div>
        </mat-tab>
      </mat-tab-group>
    `,
  }),
};

export const CenteredLabels: Story = {
  render: () => ({
    template: `
      <mat-tab-group mat-align-tabs="center">
        <mat-tab label="Dashboard">
          <div style="padding: 16px; text-align: center;">
            <h2>Dashboard</h2>
            <p>Your main dashboard with key metrics and information.</p>
          </div>
        </mat-tab>
        <mat-tab label="Analytics">
          <div style="padding: 16px; text-align: center;">
            <h2>Analytics</h2>
            <p>View detailed analytics and reports.</p>
          </div>
        </mat-tab>
        <mat-tab label="Reports">
          <div style="padding: 16px; text-align: center;">
            <h2>Reports</h2>
            <p>Generate and view custom reports.</p>
          </div>
        </mat-tab>
      </mat-tab-group>
    `,
  }),
};

export const DisabledTab: Story = {
  render: () => ({
    template: `
      <mat-tab-group>
        <mat-tab label="Active Tab">
          <div style="padding: 16px;">
            <h2>Active</h2>
            <p>This tab is active and accessible.</p>
          </div>
        </mat-tab>
        <mat-tab label="Disabled Tab" disabled>
          <div style="padding: 16px;">
            <h2>Disabled</h2>
            <p>This content is not accessible.</p>
          </div>
        </mat-tab>
        <mat-tab label="Another Active Tab">
          <div style="padding: 16px;">
            <h2>Another Active</h2>
            <p>This tab is also active and accessible.</p>
          </div>
        </mat-tab>
      </mat-tab-group>
    `,
  }),
};