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
  selector: 'app-dialog-content',
  template: `
    <h2 mat-dialog-title>Dialog Title</h2>
    <mat-dialog-content>
      <p>This is a dialog modal with content. You can place any content here including forms, images, or text.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-raised-button color="primary" [mat-dialog-close]="true">Confirm</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
class DialogContentComponent {}

@Component({
  selector: 'app-form-dialog-content',
  template: `
    <h2 mat-dialog-title>User Information</h2>
    <mat-dialog-content>
      <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
        <mat-label>Name</mat-label>
        <input matInput placeholder="Enter your name">
      </mat-form-field>
      <mat-form-field appearance="outline" style="width: 100%;">
        <mat-label>Email</mat-label>
        <input matInput type="email" placeholder="Enter your email">
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-raised-button color="primary" [mat-dialog-close]="true">Submit</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule],
})
class FormDialogContentComponent {}

@Component({
  selector: 'app-alert-dialog-content',
  template: `
    <h2 mat-dialog-title style="display: flex; align-items: center; gap: 8px;">
      <mat-icon color="warn">warning</mat-icon>
      Warning
    </h2>
    <mat-dialog-content>
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-raised-button color="warn" [mat-dialog-close]="true">Delete</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
})
class AlertDialogContentComponent {}

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
      declarations: [],
    }),
  ],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const BasicDialog: Story = {
  render: () => ({
    props: {
      openDialog(dialog: MatDialog) {
        dialog.open(DialogContentComponent, {
          width: '400px',
        });
      },
    },
    template: `
      <button mat-raised-button color="primary" (click)="openDialog(dialog)">
        Open Dialog
      </button>
    `,
    moduleMetadata: {
      providers: [MatDialog],
    },
  }),
};

export const FormDialog: Story = {
  render: () => ({
    props: {
      openDialog(dialog: MatDialog) {
        dialog.open(FormDialogContentComponent, {
          width: '500px',
        });
      },
    },
    template: `
      <button mat-raised-button color="primary" (click)="openDialog(dialog)">
        Open Form Dialog
      </button>
    `,
    moduleMetadata: {
      providers: [MatDialog],
    },
  }),
};

export const AlertDialog: Story = {
  render: () => ({
    props: {
      openDialog(dialog: MatDialog) {
        dialog.open(AlertDialogContentComponent, {
          width: '400px',
        });
      },
    },
    template: `
      <button mat-raised-button color="warn" (click)="openDialog(dialog)">
        <mat-icon>delete</mat-icon>
        Delete Item
      </button>
    `,
    moduleMetadata: {
      providers: [MatDialog],
    },
  }),
};

export const FullWidthDialog: Story = {
  render: () => ({
    props: {
      openDialog(dialog: MatDialog) {
        dialog.open(DialogContentComponent, {
          width: '90vw',
          maxWidth: '800px',
        });
      },
    },
    template: `
      <button mat-raised-button color="accent" (click)="openDialog(dialog)">
        Open Full Width Dialog
      </button>
    `,
    moduleMetadata: {
      providers: [MatDialog],
    },
  }),
};