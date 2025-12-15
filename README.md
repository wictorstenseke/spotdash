# SpotDash

A modern web application for managing soundboards with a clean, responsive interface. Built with Vite, React, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework**: Vite + React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (latest)
- **Data Fetching**: TanStack Query
- **Routing**: TanStack Router
- **Layout**: react-grid-layout + react-resizable
- **Drag & Drop**: dnd-kit (ready for future implementation)
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build
```

### Preview Production Build

```bash
# Preview production build locally
npm run preview
```

### Linting & Formatting

```bash
# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

## Project Structure

```
spotdash/
├── src/
│   ├── app/              # Application setup (unused for now)
│   ├── components/       # Shared components
│   │   └── ui/          # shadcn/ui components
│   ├── features/        # Feature-specific components
│   ├── lib/             # Utilities and configurations
│   │   ├── hooks/       # Custom React hooks
│   │   ├── firebase.ts  # Firebase placeholder (not wired)
│   │   ├── query-client.ts  # TanStack Query setup
│   │   └── utils.ts     # Utility functions
│   ├── pages/           # Page components (unused - using routes instead)
│   ├── routes/          # TanStack Router routes
│   │   ├── __root.tsx   # Root layout with navigation
│   │   ├── index.tsx    # Landing page with sign-in form
│   │   └── dashboard.tsx # Dashboard with grid layout
│   ├── styles/          # Additional styles (if needed)
│   ├── index.css        # Global styles with Tailwind
│   └── main.tsx         # Application entry point
├── components.json      # shadcn/ui configuration
├── .editorconfig        # Editor configuration
├── .prettierrc          # Prettier configuration
└── eslint.config.js     # ESLint configuration
```

## Features

### Landing Page (`/`)
- Simple sign-in form UI (no authentication yet)
- Email and password inputs
- "Sign in" button
- "Continue as guest" button
- Note: This is UI-only, no actual authentication

### Dashboard (`/dashboard`)
- Responsive grid layout with 5 group tiles
- Each group contains:
  - Group title (Group 1-5)
  - Placeholder sound buttons
- Draggable and resizable layout using react-grid-layout

### Navigation
- Top navigation bar with links to Landing and Dashboard
- Clean, minimal design

## Architecture Notes

### TanStack Query
- Configured with sensible defaults (5-minute stale time)
- Placeholder query example in `src/lib/hooks/usePlaceholderQuery.ts`
- Ready for real data fetching when backend is available

### TanStack Router
- File-based routing with type safety
- Routes are automatically generated
- Developer tools included for debugging

### Styling
- Tailwind CSS v4 with modern `@import` syntax
- shadcn/ui components for consistent design
- CSS variables for theming support

### DnD Kit
- Installed and ready for drag-and-drop functionality
- Not yet implemented in the UI

## Next Steps: Firebase Integration

This project is prepared for Firebase integration. When ready to integrate:

1. **Authentication (Firebase Auth)**
   - Replace UI-only sign-in with actual Firebase authentication
   - Implement user session management
   - Add protected routes

2. **Database (Firestore)**
   - Store soundboard configurations
   - Persist user preferences
   - Real-time synchronization

3. **Hosting (Firebase Hosting)**
   - Deploy the production build
   - Configure custom domain

4. **Functions (Firebase Functions)**
   - Server-side logic for complex operations
   - Background tasks

The Firebase configuration placeholder is located at `src/lib/firebase.ts`.

## Development Notes

- The project uses npm only (no pnpm or yarn)
- Path aliases are configured (`@/` points to `src/`)
- ESLint and Prettier are configured for code quality
- The setup is minimal and ready to extend

## Contributing

When adding new features:
1. Follow the existing folder structure
2. Use shadcn/ui components when possible
3. Run `npm run format` before committing
4. Ensure `npm run lint` passes

## License

Private project
