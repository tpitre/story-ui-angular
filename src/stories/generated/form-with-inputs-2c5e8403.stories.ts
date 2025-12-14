import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const meta: Meta = {
  title: 'Generated/Form with Inputs',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatCheckboxModule,
        MatIconModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
  argTypes: {
    onSubmit: { action: 'form submitted' },
  },
};

export default meta;
type Story = StoryObj;

export const ContactForm: Story = {
  render: (args) => ({
    props: args,
    template: `
      <form (ngSubmit)="onSubmit($event)" style="max-width: 500px; padding: 24px;">
        <h2 style="margin-top: 0;">Contact Us</h2>
        
        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
          <mat-label>Full Name</mat-label>
          <input matInput placeholder="John Doe" required>
          <mat-icon matPrefix>person</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
          <mat-label>Email</mat-label>
          <input matInput type="email" placeholder="john@example.com" required>
          <mat-icon matPrefix>email</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
          <mat-label>Phone</mat-label>
          <input matInput type="tel" placeholder="+1 (555) 123-4567">
          <mat-icon matPrefix>phone</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
          <mat-label>Subject</mat-label>
          <mat-select>
            <mat-option value="general">General Inquiry</mat-option>
            <mat-option value="support">Technical Support</mat-option>
            <mat-option value="sales">Sales</mat-option>
            <mat-option value="feedback">Feedback</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
          <mat-label>Message</mat-label>
          <textarea matInput rows="5" placeholder="Enter your message here..." required></textarea>
        </mat-form-field>

        <div style="margin-bottom: 24px;">
          <mat-checkbox>I agree to the terms and conditions</mat-checkbox>
        </div>

        <div style="display: flex; gap: 12px;">
          <button mat-raised-button color="primary" type="submit">
            <mat-icon>send</mat-icon>
            Submit
          </button>
          <button mat-stroked-button type="button">
            Cancel
          </button>
        </div>
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
            <input matInput placeholder="John" required>
          </mat-form-field>

          <mat-form-field appearance="outline" style="flex: 1;">
            <mat-label>Last Name</mat-label>
            <input matInput placeholder="Doe" required>
          </mat-form-field>
        </div>

        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
          <mat-label>Email Address</mat-label>
          <input matInput type="email" placeholder="john.doe@example.com" required>
          <mat-icon matPrefix>email</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
          <mat-label>Password</mat-label>
          <input matInput type="password" placeholder="Enter password" required>
          <mat-icon matPrefix>lock</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
          <mat-label>Confirm Password</mat-label>
          <input matInput type="password" placeholder="Confirm password" required>
          <mat-icon matPrefix>lock</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
          <mat-label>Country</mat-label>
          <mat-select>
            <mat-option value="us">United States</mat-option>
            <mat-option value="uk">United Kingdom</mat-option>
            <mat-option value="ca">Canada</mat-option>
            <mat-option value="au">Australia</mat-option>
          </mat-select>
        </mat-form-field>

        <div style="margin-bottom: 24px;">
          <mat-checkbox>I agree to receive marketing emails</mat-checkbox>
        </div>

        <div style="margin-bottom: 24px;">
          <mat-checkbox required>I accept the Terms of Service and Privacy Policy</mat-checkbox>
        </div>

        <button mat-raised-button color="primary" type="submit" style="width: 100%;">
          Create Account
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
        <h2 style="margin-top: 0; text-align: center;">Sign In</h2>
        
        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 16px;">
          <mat-label>Email</mat-label>
          <input matInput type="email" placeholder="your@email.com" required>
          <mat-icon matPrefix>person</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" style="width: 100%; margin-bottom: 8px;">
          <mat-label>Password</mat-label>
          <input matInput type="password" placeholder="Enter password" required>
          <mat-icon matPrefix>lock</mat-icon>
        </mat-form-field>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
          <mat-checkbox>Remember me</mat-checkbox>
          <a href="#" style="text-decoration: none; color: #3f51b5; font-size: 14px;">Forgot password?</a>
        </div>

        <button mat-raised-button color="primary" type="submit" style="width: 100%; margin-bottom: 16px;">
          Sign In
        </button>

        <div style="text-align: center; font-size: 14px; color: #666;">
          Don't have an account? <a href="#" style="text-decoration: none; color: #3f51b5;">Sign up</a>
        </div>
      </form>
    `,
  }),
};