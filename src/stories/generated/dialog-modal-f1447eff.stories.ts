import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sample-dialog',
  template: `
    <h2 mat-dialog-title>Dialog Title</h2>
    <mat-dialog-content>
      <p>This is a sample dialog content. You can add any content here.</p>
      <mat-form-field style="width: 100%; margin-top: 16px;">
        <mat-label>Name</mat-label>
        <input matInput placeholder="Enter your name">
      </mat-form-field>
      <mat-form-field style="width: 100%; margin-top: 16px;">
        <mat-label>Email</mat-label>
        <input matInput type="email" placeholder="Enter your email">
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-raised-button color="primary" mat-dialog-close>Save</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule],
})
class SampleDialogComponent {}

@Component({
  selector: 'app-dialog-trigger',
  template: `
    <button mat-raised-button color="primary" (click)="openDialog()">
      <mat-icon>open_in_new</mat-icon>
      Open Dialog
    </button>
  `,
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDialogModule],
})
class DialogTriggerComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(SampleDialogComponent, {
      width: '500px',
    });
  }
}

const meta: Meta = {
  title: 'Generated/Dialog Modal',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
      ],
    }),
  ],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    props: {},
    template: `<app-dialog-trigger></app-dialog-trigger>`,
    moduleMetadata: {
      declarations: [DialogTriggerComponent, SampleDialogComponent],
    },
  }),
};

export const ConfirmationDialog: Story = {
  render: () => ({
    props: {},
    template: `
      <button mat-raised-button color="warn" (click)="openConfirmDialog()">
        <mat-icon>delete</mat-icon>
        Delete Item
      </button>
    `,
    moduleMetadata: {
      imports: [MatDialogModule, MatButtonModule, MatIconModule],
      providers: [
        {
          provide: 'openConfirmDialog',
          useFactory: (dialog: MatDialog) => {
            return () => {
              dialog.open(ConfirmDialogComponent, {
                width: '400px',
              });
            };
          },
          deps: [MatDialog],
        },
      ],
    },
  }),
};

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h2 mat-dialog-title>Confirm Delete</h2>
    <mat-dialog-content>
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-raised-button color="warn" mat-dialog-close>Delete</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
class ConfirmDialogComponent {}

export const WithIcon: Story = {
  render: () => ({
    props: {},
    template: `<app-icon-dialog-trigger></app-icon-dialog-trigger>`,
    moduleMetadata: {
      declarations: [IconDialogTriggerComponent, IconDialogComponent],
    },
  }),
};

@Component({
  selector: 'app-icon-dialog',
  template: `
    <div style="text-align: center; padding: 16px 0;">
      <mat-icon color="primary" style="font-size: 48px; width: 48px; height: 48px;">check_circle</mat-icon>
      <h2 mat-dialog-title>Success!</h2>
      <mat-dialog-content>
        <p>Your changes have been saved successfully.</p>
      </mat-dialog-content>
      <mat-dialog-actions align="center">
        <button mat-raised-button color="primary" mat-dialog-close>OK</button>
      </mat-dialog-actions>
    </div>
  `,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
})
class IconDialogComponent {}

@Component({
  selector: 'app-icon-dialog-trigger',
  template: `
    <button mat-raised-button color="primary" (click)="openDialog()">
      <mat-icon>notifications</mat-icon>
      Show Success
    </button>
  `,
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDialogModule],
})
class IconDialogTriggerComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(IconDialogComponent, {
      width: '400px',
    });
  }
}