import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

const meta: Meta = {
  title: 'Generated/List with Icons',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [MatListModule, MatIconModule, MatDividerModule],
    }),
  ],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <mat-list style="width: 400px;">
        <mat-list-item>
          <mat-icon matListItemIcon>home</mat-icon>
          <div matListItemTitle>Home</div>
          <div matListItemLine>Navigate to homepage</div>
        </mat-list-item>
        <mat-divider></mat-divider>
        <mat-list-item>
          <mat-icon matListItemIcon>favorite</mat-icon>
          <div matListItemTitle>Favorites</div>
          <div matListItemLine>View your favorite items</div>
        </mat-list-item>
        <mat-divider></mat-divider>
        <mat-list-item>
          <mat-icon matListItemIcon>settings</mat-icon>
          <div matListItemTitle>Settings</div>
          <div matListItemLine>Configure your preferences</div>
        </mat-list-item>
        <mat-divider></mat-divider>
        <mat-list-item>
          <mat-icon matListItemIcon>notifications</mat-icon>
          <div matListItemTitle>Notifications</div>
          <div matListItemLine>Manage your alerts</div>
        </mat-list-item>
      </mat-list>
    `,
  }),
};

export const SimpleList: Story = {
  render: () => ({
    template: `
      <mat-list style="width: 350px;">
        <mat-list-item>
          <mat-icon matListItemIcon>inbox</mat-icon>
          <div matListItemTitle>Inbox</div>
        </mat-list-item>
        <mat-list-item>
          <mat-icon matListItemIcon>send</mat-icon>
          <div matListItemTitle>Sent</div>
        </mat-list-item>
        <mat-list-item>
          <mat-icon matListItemIcon>drafts</mat-icon>
          <div matListItemTitle>Drafts</div>
        </mat-list-item>
        <mat-list-item>
          <mat-icon matListItemIcon>delete</mat-icon>
          <div matListItemTitle>Trash</div>
        </mat-list-item>
      </mat-list>
    `,
  }),
};

export const NavigationList: Story = {
  render: () => ({
    template: `
      <mat-nav-list style="width: 300px;">
        <mat-list-item>
          <mat-icon matListItemIcon>dashboard</mat-icon>
          <div matListItemTitle>Dashboard</div>
        </mat-list-item>
        <mat-list-item>
          <mat-icon matListItemIcon>shopping_cart</mat-icon>
          <div matListItemTitle>Orders</div>
        </mat-list-item>
        <mat-list-item>
          <mat-icon matListItemIcon>person</mat-icon>
          <div matListItemTitle>Customers</div>
        </mat-list-item>
        <mat-list-item>
          <mat-icon matListItemIcon>bar_chart</mat-icon>
          <div matListItemTitle>Analytics</div>
        </mat-list-item>
        <mat-list-item>
          <mat-icon matListItemIcon>help</mat-icon>
          <div matListItemTitle>Help</div>
        </mat-list-item>
      </mat-nav-list>
    `,
  }),
};

export const ActionList: Story = {
  render: () => ({
    template: `
      <mat-action-list style="width: 400px;">
        <mat-list-item>
          <mat-icon matListItemIcon>edit</mat-icon>
          <div matListItemTitle>Edit Document</div>
          <div matListItemLine>Make changes to your file</div>
        </mat-list-item>
        <mat-list-item>
          <mat-icon matListItemIcon>share</mat-icon>
          <div matListItemTitle>Share</div>
          <div matListItemLine>Share with others</div>
        </mat-list-item>
        <mat-list-item>
          <mat-icon matListItemIcon>download</mat-icon>
          <div matListItemTitle>Download</div>
          <div matListItemLine>Save to your device</div>
        </mat-list-item>
        <mat-list-item>
          <mat-icon matListItemIcon>content_copy</mat-icon>
          <div matListItemTitle>Make a Copy</div>
          <div matListItemLine>Duplicate this file</div>
        </mat-list-item>
      </mat-action-list>
    `,
  }),
};

export const ColoredIcons: Story = {
  render: () => ({
    template: `
      <mat-list style="width: 350px;">
        <mat-list-item>
          <mat-icon matListItemIcon style="color: #4CAF50;">check_circle</mat-icon>
          <div matListItemTitle>Completed Tasks</div>
        </mat-list-item>
        <mat-list-item>
          <mat-icon matListItemIcon style="color: #FF9800;">schedule</mat-icon>
          <div matListItemTitle>Pending Tasks</div>
        </mat-list-item>
        <mat-list-item>
          <mat-icon matListItemIcon style="color: #F44336;">error</mat-icon>
          <div matListItemTitle>Failed Tasks</div>
        </mat-list-item>
        <mat-list-item>
          <mat-icon matListItemIcon style="color: #2196F3;">info</mat-icon>
          <div matListItemTitle>Information</div>
        </mat-list-item>
      </mat-list>
    `,
  }),
};