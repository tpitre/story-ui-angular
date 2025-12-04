/**
 * Angular Material Design System Considerations for Story UI
 *
 * This file provides design system context to the AI for generating
 * accurate Storybook stories using Angular Material components.
 */

export const considerations = `
## Angular Material Design System Guidelines

### Import Conventions
- Import Material modules in the component's imports array
- Use standalone components with direct imports
- Icons use 'mat-icon' with Material Icons font

### Theme Colors
Angular Material uses the Material Design color system:
- Primary: Main brand color (blue by default)
- Accent: Secondary actions (pink by default)
- Warn: Error/warning states (red by default)

### Component Best Practices

#### Buttons (mat-button, mat-raised-button, mat-flat-button)
- Use mat-raised-button for primary actions (elevated)
- Use mat-flat-button for prominent actions (filled)
- Use mat-stroked-button for outlined style
- Use mat-button for text-only buttons
- Use color="primary" for main actions
- Use color="warn" for destructive actions

#### Cards (mat-card)
- Use mat-card-header for title sections
- Use mat-card-content for body content
- Use mat-card-actions for action buttons
- Use mat-card-image for media

#### Form Fields (mat-form-field)
- Always wrap inputs in mat-form-field
- Use appearance="outline" for outlined style
- Use appearance="fill" for filled style
- Include mat-label for accessibility
- Use mat-error for validation messages

#### Typography
- Use Angular Material typography classes
- mat-headline-1 through mat-headline-6
- mat-body-1, mat-body-2 for body text
- mat-caption for small text

### Spacing
- Use Angular Material's spacing utilities
- Standard spacing: 8px, 16px, 24px, 32px
- Use CSS gap or margin for layout spacing

### Layout
- Use Angular Flex Layout or CSS Flexbox/Grid
- mat-grid-list for grid layouts
- mat-sidenav-container for navigation layouts

### Icons
- Import MatIconModule
- Use <mat-icon>icon_name</mat-icon>
- Icons from Material Icons library
- Common: 'add', 'edit', 'delete', 'menu', 'close'

### Accessibility
- Use proper aria labels on icon buttons
- Ensure color contrast meets WCAG standards
- Use mat-label for form fields
- Support keyboard navigation

### Common Patterns
- Dialogs: Use MatDialog service with component
- Navigation: mat-toolbar and mat-sidenav
- Lists: mat-list with mat-list-item
- Tables: mat-table for data display
- Tabs: mat-tab-group with mat-tab
`;

export default considerations;
