# SPA Dashboard Application

A Single Page Application (SPA) built with React, TypeScript, and React Router that features protected routing, authentication, and a dashboard with nested routes.

## Features

- **React Router** with nested routes and protected routing
- **Authentication System** with context management and localStorage persistence
- **Dashboard Layout** with sidebar navigation
- **Responsive Design** with modern CSS
- **TypeScript** for type safety
- **Protected Routes** that require authentication
- **Multiple Pages** including Home, Login, Dashboard, Profile, Settings, and Notifications

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx          # Main navigation component
│   └── ProtectedRoute.tsx     # Route protection wrapper
├── contexts/
│   └── AuthContext.tsx        # Authentication context and logic
├── pages/
│   ├── Home.tsx               # Home page
│   ├── Login.tsx              # Login page
│   ├── Dashboard.tsx          # Dashboard layout with sidebar
│   ├── DashboardOverview.tsx   # Dashboard overview/landing
│   ├── Profile.tsx            # User profile page
│   ├── Settings.tsx           # Settings page
│   └── Notifications.tsx      # Notifications page
├── App.tsx                   # Main App component with routing
├── main.tsx                  # Application entry point
├── App.css                   # App-specific styles
└── index.css                 # Global styles
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173/`

## Usage

### Demo Credentials
To test the protected dashboard features, use these credentials:

- **Email:** `user@example.com`
- **Password:** `password`

### Navigation
- **Home Page:** Public page with application overview
- **Login Page:** Authentication page with demo credentials
- **Dashboard:** Protected area with:
  - Overview: Dashboard summary with stats
  - Profile: User information and preferences
  - Settings: Application configuration options
  - Notifications: Notification management system

### Protected Routing
The dashboard routes (`/dashboard/*`) are protected and require authentication:
- If a user tries to access a protected route without being logged in, they are redirected to the login page
- After successful login, users are redirected to their intended destination
- Authentication state is persisted in localStorage

### Features Breakdown

#### Authentication System
- Context-based state management
- localStorage persistence
- Protected route implementation
- Login/logout functionality
- User session management

#### Dashboard Features
- **Overview:** Quick stats and navigation cards
- **Profile:** User information, statistics, and preferences
- **Settings:** Appearance, notifications, and privacy settings
- **Notifications:** Interactive notification system with filtering

#### UI/UX Features
- Responsive design for mobile and desktop
- Hover effects and transitions
- Loading states
- Form validation
- Accessibility considerations

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **React Router 6** - Routing and navigation
- **Vite** - Build tool and development server
- **CSS3** - Styling with custom properties

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Build and Deployment

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Customization

### Adding New Pages
1. Create a new page component in `src/pages/`
2. Add the route in `src/App.tsx`
3. If it's a protected route, wrap it with `ProtectedRoute`

### Styling
- Global styles are in `src/index.css`
- App-specific styles are in `src/App.css`
- Component-specific styles can be added as CSS modules or inline styles

### Authentication
- Modify the `AuthContext.tsx` to implement real authentication
- Update the login logic to connect to your backend API
- Customize user data structure as needed

## License

This project is for educational purposes. Feel free to use it as a starting point for your own applications.
