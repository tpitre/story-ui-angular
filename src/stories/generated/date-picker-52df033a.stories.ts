import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

const meta: Meta = {
  title: 'Generated/Date Picker',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        FormsModule,
      ],
    }),
  ],
  parameters: { layout: 'centered' },
  argTypes: {
    dateChange: { action: 'date changed' },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <mat-form-field>
        <mat-label>Choose a date</mat-label>
        <input matInput [matDatepicker]="picker" (dateChange)="dateChange($event)">
        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
    `,
  }),
};

export const WithInitialValue: Story = {
  render: (args) => ({
    props: {
      ...args,
      selectedDate: new Date(),
    },
    template: `
      <mat-form-field>
        <mat-label>Choose a date</mat-label>
        <input matInput [matDatepicker]="picker" [(ngModel)]="selectedDate" (dateChange)="dateChange($event)">
        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
    `,
  }),
};

export const WithMinMaxDates: Story = {
  render: (args) => ({
    props: {
      ...args,
      minDate: new Date(2024, 0, 1),
      maxDate: new Date(2024, 11, 31),
    },
    template: `
      <mat-form-field>
        <mat-label>Choose a date in 2024</mat-label>
        <input matInput [matDatepicker]="picker" [min]="minDate" [max]="maxDate" (dateChange)="dateChange($event)">
        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
    `,
  }),
};

export const Disabled: Story = {
  render: (args) => ({
    props: args,
    template: `
      <mat-form-field>
        <mat-label>Choose a date</mat-label>
        <input matInput [matDatepicker]="picker" disabled>
        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
      </mat-form-field>
    `,
  }),
};

export const DateRange: Story = {
  render: (args) => ({
    props: args,
    template: `
      <mat-form-field>
        <mat-label>Enter a date range</mat-label>
        <mat-date-range-input [rangePicker]="rangePicker">
          <input matStartDate placeholder="Start date" (dateChange)="dateChange($event)">
          <input matEndDate placeholder="End date" (dateChange)="dateChange($event)">
        </mat-date-range-input>
        <mat-datepicker-toggle matIconSuffix [for]="rangePicker"></mat-datepicker-toggle>
        <mat-date-range-picker #rangePicker></mat-date-range-picker>
      </mat-form-field>
    `,
  }),
};

export const TouchUI: Story = {
  render: (args) => ({
    props: args,
    template: `
      <mat-form-field>
        <mat-label>Choose a date</mat-label>
        <input matInput [matDatepicker]="picker" (dateChange)="dateChange($event)">
        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker touchUi></mat-datepicker>
      </mat-form-field>
    `,
  }),
};