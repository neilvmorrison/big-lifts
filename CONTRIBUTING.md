# Contributing to Big Lifts

Thank you for your interest in contributing to Big Lifts! This document provides guidelines and information for contributors.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Issue Guidelines](#issue-guidelines)

## 🤝 Code of Conduct

This project adheres to a code of conduct that we expect all contributors to follow. Please be respectful, inclusive, and constructive in all interactions.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager
- Git
- Supabase CLI
- Basic knowledge of React, Next.js, and TypeScript

### Setting Up Development Environment

1. **Fork and Clone**

   ```bash
   git clone https://github.com/your-username/big-lifts.git
   cd big-lifts
   ```

2. **Install Dependencies**

   ```bash
   yarn install
   ```

3. **Set Up Environment**

   - Copy `.env.example` to `.env.local`
   - Fill in the required environment variables
   - Start Supabase locally: `supabase start`

4. **Run Development Server**
   ```bash
   yarn dev
   ```

## 🔄 Development Process

### Branch Strategy

- **Main Branch**: `main` - Production-ready code
- **Feature Branches**: `feature/description` - New features
- **Bug Fix Branches**: `fix/description` - Bug fixes
- **Hotfix Branches**: `hotfix/description` - Critical fixes

### Workflow

1. **Create an Issue**

   - Check existing issues first
   - Use appropriate labels
   - Provide clear description and acceptance criteria

2. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**

   - Follow coding standards
   - Write tests for new functionality
   - Update documentation as needed

4. **Test Your Changes**

   ```bash
   yarn lint
   yarn build
   ```

5. **Commit Changes**

   - Use conventional commit messages
   - Keep commits focused and atomic
   - Reference issues in commit messages

6. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## 📝 Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type unless absolutely necessary
- Use strict type checking

### React/Next.js

- Use functional components with hooks
- Follow Next.js App Router conventions
- Use proper error boundaries
- Implement proper loading states
- Prefer shadcn/ui components for UI elements

### Code Style

- Use Prettier for code formatting
- Follow ESLint rules
- Use meaningful variable and function names
- Write self-documenting code
- Add comments for complex logic

### File Organization

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   └── feature/      # Feature-specific components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── types/            # TypeScript type definitions
└── constants/        # Application constants
```

### Component Guidelines

- Use PascalCase for component names
- Export components as default exports
- Use proper prop types with TypeScript
- Implement proper error handling
- Make components accessible (a11y)
- Prefer shadcn/ui components over custom implementations
- Use the `cn()` utility from `@/lib/utils` for conditional classes

### shadcn/ui Guidelines

- Install new components using: `npx shadcn@latest add [component-name]`
- Customize components in `src/components/ui/` as needed
- Follow the "new-york" style preset configuration
- Use Lucide React icons (configured in components.json)
- Leverage Tailwind CSS classes for styling

### API Guidelines

- Use proper HTTP methods
- Implement error handling
- Add input validation
- Use consistent response formats
- Document API endpoints

## 🧪 Testing

### Testing Strategy

- **Unit Tests**: Test individual functions and components
- **Integration Tests**: Test component interactions
- **E2E Tests**: Test complete user workflows

### Writing Tests

```typescript
// Example component test
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with correct text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});
```

### Running Tests

```bash
yarn test              # Run all tests
yarn test:watch        # Run tests in watch mode
yarn test:coverage     # Run tests with coverage
```

## 📤 Submitting Changes

### Pull Request Process

1. **Create Pull Request**

   - Use the provided PR template
   - Reference related issues
   - Provide clear description of changes

2. **PR Requirements**

   - All tests must pass
   - Code must be linted and formatted
   - Documentation must be updated
   - Changes must be reviewed

3. **Review Process**
   - At least one approval required
   - Address all review comments
   - Keep PR focused and manageable

### Commit Message Format

Use conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:

```
feat(auth): add magic link authentication
fix(ui): resolve button alignment issue
docs(readme): update setup instructions
```

## 🐛 Issue Guidelines

### Bug Reports

When reporting bugs, please include:

- **Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: OS, browser, Node.js version
- **Screenshots**: If applicable

### Feature Requests

When requesting features, please include:

- **Description**: Clear description of the feature
- **Use Case**: Why this feature is needed
- **Proposed Solution**: How you think it should work
- **Alternatives**: Other solutions considered

### Issue Labels

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `priority: high`: High priority
- `priority: medium`: Medium priority
- `priority: low`: Low priority

## 🔧 Development Tools

### Recommended VS Code Extensions

- ES7+ React/Redux/React-Native snippets
- TypeScript Importer
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint
- GitLens

### Useful Commands

```bash
# Database operations
supabase start              # Start local Supabase
supabase db reset           # Reset database
supabase gen types typescript --local > src/lib/supabase/types/database.ts

# Development
yarn dev                    # Start dev server
yarn build                  # Build for production
yarn lint                   # Run linter
yarn type-check             # Run TypeScript check
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## ❓ Getting Help

- Check existing issues and discussions
- Join our community discussions
- Ask questions in GitHub Discussions
- Contact maintainers directly for urgent issues

## 🎉 Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to Big Lifts! 🚀
