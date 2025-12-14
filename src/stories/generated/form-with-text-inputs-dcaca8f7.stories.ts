import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const meta: Meta = {
  title: 'Generated/Form with Text Inputs',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }),
  ],
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
};

export default meta;
type Story = StoryObj;

export const ContactForm: Story = {
  render: (args) => ({
    props: args,
    template: `
      <form (ngSubmit)="onSubmit($event)" style="max-width: 500px; padding: 24px;">
        <h2 style="margin-top: 0;">Contact Information</h2>
        
        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
          <mat-label>First Name</mat-label>
          <input matInput placeholder="Enter your first name" required>
          <mat-icon matPrefix>person</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
          <mat-label>Last Name</mat-label>
          <input matInput placeholder="Enter your last name" required>
          <mat-icon matPrefix>person</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
          <mat-label>Email</mat-label>
          <input matInput type="email" placeholder="your.email@example.com" required>
          <mat-icon matPrefix>email</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
          <mat-label>Phone Number</mat-label>
          <input matInput type="tel" placeholder="+1 (555) 123-4567">
          <mat-icon matPrefix>phone</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 24px;">
          <mat-label>Message</mat-label>
          <textarea matInput placeholder="Enter your message" rows="4"></textarea>
        </mat-form-field>

        <button mat-raised-button color="primary" type="submit" style="width: 100%;">
          Submit
        </button>
      </form>
    `,
  }),
};

export const LoginForm: Story = {
  render: (args) => ({
    props: args,
    template: `
      <form (ngSubmit)="onSubmit($event)" style="max-width: 400px; padding: 24px;">
        <h2 style="margin-top: 0; text-align: center;">Login</h2>
        
        <mat-form-field appearance="fill" style="width: 100%; margin-bottom: 16px;">
          <mat-label>Username</mat-label>
          <input matInput placeholder="Enter username" required>
        </mat-form-field>

        <mat-form-field appearance="fill" style="width: 100%; margin-bottom: 24px;">
          <mat-label>Password</mat-label>
          <input matInput type="password" placeholder="Enter password" required>
        </mat-form-field>

        <button mat-raised-button color="primary" type="submit" style="width: 100%;">
          Login
        </button>
      </form>
    `,
  }),
};

export const RegistrationForm: Story = {
  render: (args) => ({
    props: args,
    template: `
      <form (ngSubmit)="onSubmit($event)" style="max-width: 600px; padding: 24px;">
        <h2 style="margin-top: 0;">Create Account</h2>
        
        <div style="display: flex; gap: 16px; margin-bottom: 16px;">
          <mat-form-field appearance="outline" style="flex: 1;">
            <mat-label>First Name</mat-label>
            <input matInput placeholder="First name" required>
          </mat-form-field>

          <mat-form-field appearance="outline" style="flex: 1;">
            <mat-label>Last Name</mat-label>
            <input matInput placeholder="Last name" required>
          </mat-form-field>
        </div>

        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
          <mat-label>Email Address</mat-label>
          <input matInput type="email" placeholder="your.email@example.com" required>
        </mat-form-field>

        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
          <mat-label>Password</mat-label>
          <input matInput type="password" placeholder="Create a password" required>
          <mat-hint>Must be at least 8 characters</mat-hint>
        </mat-form-field>

        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 24px;">
          <mat-label>Confirm Password</mat-label>
          <input matInput type="password" placeholder="Confirm your password" required>
        </mat-form-field>

        <div style="display: flex; gap: 12px;">
          <button mat-raised-button color="primary" type="submit" style="flex: 1;">
            Create Account
          </button>
          <button mat-stroked-button type="button" style="flex: 1;">
            Cancel
          </button>
        </div>
      </form>
    `,
  }),
};

export const SearchForm: Story = {
  render: (args) => ({
    props: args,
    template: `
      <form (ngSubmit)="onSubmit($event)" style="max-width: 800px; padding: 24px;">
        <h2 style="margin-top: 0;">Search</h2>
        
        <div style="display: flex; gap: 12px; align-items: flex-start;">
          <mat-form-field appearance="outline" style="flex: 1;">
            <mat-label>Search</mat-label>
            <input matInput placeholder="Enter search terms">
            <mat-icon matPrefix>search</mat-icon>
          </mat-form-field>

          <button mat-raised-button color="primary" type="submit" style="height: 56px;">
            <mat-icon>search</mat-icon>
            Search
          </button>
        </div>
      </form>
    `,
  }),
};