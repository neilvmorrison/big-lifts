# Big Lifts

Big Lifts is a comprehensive fitness-focused application that empowers athletes of all levels to reach their peak performance. Create workout plans, generate Workouts of the Day, track your calorie intake and plan your meals, monitor your progress visually by uploading progress photos. Use our library of exsting workout programs or build your own using our exhaustive library of exercises and track your progress down to the set using our robust progress tracking system.

## 🚀 Tech Stack

### Frontend

- **Next.js 15.5.3** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5.9.3** - Type safety and developer experience
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Modern component library built on Radix UI and Tailwind CSS
- **Radix UI** - Accessible component primitives (used by shadcn/ui)
- **Lucide React** - Icon library
- **React Icons** - Additional icon components

### Backend & Database

- **Supabase** - Backend-as-a-Service
  - PostgreSQL database
  - Authentication (magic link auth)
  - Real-time subscriptions
  - Row Level Security (RLS)
- **Supabase SSR** - Server-side rendering support

### Development Tools

- **ESLint** - Code linting
- **Turbopack** - Fast bundler for development
- **PostCSS** - CSS processing
- **Yarn** - Package manager

### Key Features

- Magic link authentication
- User profile management
- Dashboard with activity overview
- Modern UI with shadcn/ui components
- Responsive design with dark/light theme support
- Type-safe API handling
- Form validation and error handling

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **Yarn** package manager
- **Git**
- **Supabase CLI** (for local development)

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd big-lifts
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Optional: OpenAI API Key for Supabase AI features
OPENAI_API_KEY=your_openai_api_key
```

### 4. Database Setup

#### Option A: Use Remote Supabase Instance

1. Create a new project at [supabase.com](https://supabase.com)
2. Run the migration:
   ```bash
   supabase db push
   ```
3. Generate TypeScript types:
   ```bash
   yarn db:gen-types
   ```

#### Option B: Local Development with Supabase CLI

1. Start Supabase locally:
   ```bash
   supabase start
   ```
2. Apply migrations:
   ```bash
   supabase db reset
   ```
3. Generate TypeScript types:
   ```bash
   yarn db:gen-types
   ```

### 5. Start Development Server

```bash
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### 6. Access Supabase Studio (Local Development)

If using local Supabase, you can access the dashboard at [http://localhost:54323](http://localhost:54323).

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (dashboard)/       # Dashboard route group
│   ├── api/               # API routes
│   ├── authentication/    # Auth pages
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Feature-specific components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries
│   ├── api/              # API handling
│   ├── auth.ts           # Authentication utilities
│   ├── supabase/         # Supabase configuration
│   └── utils.ts          # Utility functions (includes shadcn/ui cn helper)
├── constants/             # Application constants
└── middleware.ts          # Next.js middleware

supabase/
├── config.toml           # Supabase configuration
└── migrations/           # Database migrations

components.json            # shadcn/ui configuration
```

## 🧪 Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build the application for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn db:gen-types` - Generate TypeScript types from Supabase schema

## 🔧 Development Workflow

### Database Changes

1. Create a new migration:
   ```bash
   supabase migration new your_migration_name
   ```
2. Write your SQL in the generated migration file
3. Apply the migration:
   ```bash
   supabase db reset  # For local development
   # or
   supabase db push   # For remote database
   ```
4. Regenerate types:
   ```bash
   yarn db:gen-types
   ```

### Adding New Features

1. Create components in `src/components/`
2. Add API routes in `src/app/api/`
3. Update types in `src/lib/supabase/types/database.ts` if needed
4. Test thoroughly before submitting PR

### Working with shadcn/ui Components

This project uses shadcn/ui for UI components. To add new components:

1. **Install a new component:**
   ```bash
   npx shadcn@latest add [component-name]
   ```
2. **Available components:** Check the [shadcn/ui documentation](https://ui.shadcn.com/docs/components) for all available components

3. **Customization:** Components are located in `src/components/ui/` and can be customized as needed

4. **Configuration:** The shadcn/ui configuration is in `components.json` with the "new-york" style preset

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📚 API Documentation

### Authentication

- **Magic Link Login**: `POST /api/auth/signin`
- **Sign Out**: `POST /api/auth/signout`
- **User Profile**: `GET /api/user/profile`

### Database Schema

The application uses a PostgreSQL database with the following main tables:

- `user_profiles` - User information and metadata
- `auth.users` - Supabase authentication users

## 🐛 Troubleshooting

### Common Issues

1. **Supabase Connection Issues**

   - Verify your environment variables
   - Check if Supabase project is active
   - Ensure RLS policies are properly configured

2. **Type Generation Issues**

   - Run `supabase db reset` to ensure schema is up to date
   - Check if migration files are properly formatted

3. **Build Issues**
   - Clear `.next` folder and rebuild
   - Check for TypeScript errors
   - Verify all dependencies are installed

### Getting Help

- Check the [Supabase Documentation](https://supabase.com/docs)
- Review [Next.js Documentation](https://nextjs.org/docs)
- Open an issue in this repository

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on how to get started.

## 📝 Pull Request Template

When submitting a pull request, please use our [Pull Request Template](.github/pull_request_template.md) to ensure all necessary information is included.
