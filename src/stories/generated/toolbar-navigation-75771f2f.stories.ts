import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta = {
  title: 'Generated/Toolbar Navigation',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [MatToolbarModule, MatButtonModule, MatIconModule],
    }),
  ],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <mat-toolbar color="primary">
        <button mat-icon-button>
          <mat-icon>menu</mat-icon>
        </button>
        <span>My Application</span>
        <span style="flex: 1 1 auto;"></span>
        <button mat-icon-button>
          <mat-icon>search</mat-icon>
        </button>
        <button mat-icon-button>
          <mat-icon>favorite</mat-icon>
        </button>
        <button mat-icon-button>
          <mat-icon>settings</mat-icon>
        </button>
      </mat-toolbar>
    `,
  }),
};

export const WithTextButtons: Story = {
  render: () => ({
    template: `
      <mat-toolbar color="primary">
        <span>My Application</span>
        <span style="flex: 1 1 auto;"></span>
        <button mat-button>Home</button>
        <button mat-button>Products</button>
        <button mat-button>Services</button>
        <button mat-button>About</button>
        <button mat-button>Contact</button>
      </mat-toolbar>
    `,
  }),
};

export const WithLogo: Story = {
  render: () => ({
    template: `
      <mat-toolbar color="primary">
        <button mat-icon-button>
          <mat-icon>menu</mat-icon>
        </button>
        <img src="https://picsum.photos/40/40?random=1" alt="Logo" style="margin: 0 16px; border-radius: 4px;" />
        <span style="font-weight: 500;">Brand Name</span>
        <span style="flex: 1 1 auto;"></span>
        <button mat-button>Features</button>
        <button mat-button>Pricing</button>
        <button mat-button>
          <mat-icon>account_circle</mat-icon>
          Account
        </button>
      </mat-toolbar>
    `,
  }),
};

export const MultiRow: Story = {
  render: () => ({
    template: `
      <mat-toolbar color="primary">
        <mat-toolbar-row>
          <button mat-icon-button>
            <mat-icon>menu</mat-icon>
          </button>
          <span>My Application</span>
          <span style="flex: 1 1 auto;"></span>
          <button mat-icon-button>
            <mat-icon>notifications</mat-icon>
          </button>
          <button mat-icon-button>
            <mat-icon>account_circle</mat-icon>
          </button>
        </mat-toolbar-row>
        <mat-toolbar-row>
          <button mat-button>Dashboard</button>
          <button mat-button>Projects</button>
          <button mat-button>Team</button>
          <button mat-button>Reports</button>
          <button mat-button>Settings</button>
        </mat-toolbar-row>
      </mat-toolbar>
    `,
  }),
};

export const WithSearch: Story = {
  render: () => ({
    template: `
      <mat-toolbar color="primary">
        <button mat-icon-button>
          <mat-icon>menu</mat-icon>
        </button>
        <span>My Application</span>
        <span style="flex: 1 1 auto;"></span>
        <div style="display: flex; align-items: center; background: rgba(255,255,255,0.15); padding: 4px 12px; border-radius: 4px; margin: 0 16px;">
          <mat-icon style="margin-right: 8px;">search</mat-icon>
          <input type="text" placeholder="Search..." style="background: transparent; border: none; outline: none; color: white; width: 200px;" />
        </div>
        <button mat-icon-button>
          <mat-icon>notifications</mat-icon>
        </button>
        <button mat-icon-button>
          <mat-icon>account_circle</mat-icon>
        </button>
      </mat-toolbar>
    `,
  }),
};

export const AccentColor: Story = {
  render: () => ({
    template: `
      <mat-toolbar color="accent">
        <span>Accent Toolbar</span>
        <span style="flex: 1 1 auto;"></span>
        <button mat-icon-button>
          <mat-icon>home</mat-icon>
        </button>
        <button mat-icon-button>
          <mat-icon>favorite</mat-icon>
        </button>
        <button mat-icon-button>
          <mat-icon>more_vert</mat-icon>
        </button>
      </mat-toolbar>
    `,
  }),
};

export const BasicToolbar: Story = {
  render: () => ({
    template: `
      <mat-toolbar>
        <span>Basic Toolbar (No Color)</span>
        <span style="flex: 1 1 auto;"></span>
        <button mat-button>Link 1</button>
        <button mat-button>Link 2</button>
        <button mat-button>Link 3</button>
      </mat-toolbar>
    `,
  }),
};