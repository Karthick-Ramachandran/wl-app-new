# Component Structure

This directory contains reusable components organized by their purpose and functionality.

## Directory Structure

```
components/
├── ui/           # Basic UI components (Button, Input, Label, Logo)
├── forms/        # Form-specific components (WaitlistForm)
├── layout/       # Layout components (HeroSection, SuccessSection, BackgroundElements)
└── README.md     # This file
```

## UI Components (`/ui`)

### Button
- **Props**: `children`, `onClick`, `type`, `disabled`, `variant`, `size`, `className`, `isLoading`
- **Variants**: `primary`, `secondary`, `outline`
- **Sizes**: `sm`, `md`, `lg`
- **Usage**: All buttons throughout the application

### Input
- **Props**: `id`, `name`, `type`, `value`, `onChange`, `placeholder`, `required`, `className`
- **Types**: `text`, `email`, `tel`, `url`
- **Usage**: Form inputs with consistent styling

### Label
- **Props**: `htmlFor`, `children`, `required`, `className`
- **Usage**: Form labels with consistent styling and required field indicators

### Logo
- **Props**: `size`, `className`, `showCenterLogo`
- **Sizes**: `sm`, `md`, `lg`
- **Usage**: HACC logo with optional center logo overlay

## Form Components (`/forms`)

### WaitlistForm
- **Props**: `onSubmit`, `isSubmitting`
- **Usage**: Complete waitlist form with validation and responsive layout

## Layout Components (`/layout`)

### HeroSection
- **Props**: `onGetStarted`
- **Usage**: Landing page hero section with animated text and CTA

### SuccessSection
- **Props**: `onShare`
- **Usage**: Success page with mobile/desktop responsive layouts

### BackgroundElements
- **Props**: None
- **Usage**: Background noise overlay and ellipse decoration

## Importing Components

Use the index files for clean imports:

```typescript
// UI Components
import { Button, Input, Label, Logo } from './components/ui';

// Layout Components
import { HeroSection, SuccessSection, BackgroundElements } from './components/layout';

// Form Components
import { WaitlistForm } from './components/forms';
```

## Styling

All components use Tailwind CSS classes and follow the existing design system:
- Font families: `font-mazius-regular`, `font-mazius-extraitalic`, `font-basier-narrow-medium`
- Colors: Primary `#4400B4`, Background `#F9F2E8`, Text `#605C52`
- Responsive design with mobile-first approach

## Validation

Form validation is handled in `/utils/validation.ts` with comprehensive error handling for:
- Required fields
- Email format validation
- Phone number validation (Indian format)
- Social media URL validation
- Name format validation 