# Vestegnens Rengøring - Project Documentation

## Overview

This is a modern, responsive single-page website for Vestegnens Rengøring, a family-owned cleaning company in Denmark with 8 years of experience. The application serves as a business website showcasing services, contact information, and allowing customers to request quotes through a contact form.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth transitions and scroll animations
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ES modules)
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: connect-pg-simple for PostgreSQL-based sessions

### Development Architecture
- **Monorepo Structure**: Shared code between client and server
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Type Safety**: Shared TypeScript interfaces and schemas
- **Path Aliases**: Configured for clean imports across the application

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero Section**: Main landing area with call-to-action buttons
- **About Section**: Company information and credentials
- **Services Section**: Three-column layout showcasing service offerings
- **Business Hours**: Operating hours and location information
- **Contact Form**: Lead generation form for quote requests
- **Footer**: Additional company information and links

### Backend Components
- **Route Handler**: Centralized route registration system
- **Storage Interface**: Abstracted data access layer with PostgreSQL database implementation
- **User Management**: Basic user schema and CRUD operations
- **Middleware**: Request logging and error handling
- **Database Connection**: Neon PostgreSQL with connection pooling

### Database Schema
- **Users Table**: Basic user management with username/password
- **Extensible Design**: Ready for additional tables (services, bookings, etc.)

## Data Flow

### Client-Side Flow
1. User visits website through static HTML entry point
2. React application loads with TanStack Query provider
3. Components use scroll animations and smooth navigation
4. Contact form submissions prepare data for API endpoints
5. Toast notifications provide user feedback

### Server-Side Flow
1. Express server handles API requests under `/api` prefix
2. Storage interface abstracts database operations
3. Request/response logging for debugging
4. Error handling middleware catches and formats errors
5. Static file serving for production builds

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **@radix-ui/***: Headless UI components
- **class-variance-authority**: Type-safe CSS variants

### Development Dependencies
- **tsx**: TypeScript execution for development
- **esbuild**: Fast bundling for production
- **vite**: Development server and build tool
- **@replit/vite-plugin-***: Replit integration plugins

## Deployment Strategy

### Development Mode
```bash
npm run dev
```
- Runs backend with tsx in watch mode
- Vite dev server with HMR for frontend
- Replit-specific plugins for development environment

### Production Build
```bash
npm run build
```
- Vite builds optimized frontend bundle
- esbuild compiles backend to single file
- Static files served from Express in production

### Production Start
```bash
npm start
```
- Runs compiled backend serving static frontend
- Environment variables for database connection
- Production-optimized asset serving

### Database Management
```bash
npm run db:push
```
- Pushes schema changes to database
- Uses Drizzle Kit for migration management
- Requires DATABASE_URL environment variable

## Changelog

Changelog:
- July 04, 2025. Initial setup for NOSHTA Cleaning Services
- July 04, 2025. Updated to Danish company "Vestegnens Rengøring" with complete translation and localization
- July 04, 2025. Transformed website to painting service with new branding:
  - Created custom SVG logo with red square, green rectangle, orange "PAINTING" and red "SERVICE" text
  - Updated all content from cleaning to painting services
  - Changed services to painting-specific offerings with ZAR pricing
  - Updated contact information (noshtacleaning@gmail.com, +27 82 593 5387, Cape Town address)
  - Redesigned contact section with modern living room background and floating painting icons
  - Created blue footer with circular contact icons
  - Added professional painting background image to hero section
  - Updated color scheme to match logo (orange, red, green)
- July 04, 2025. Updated logo and improved Services section:
  - Replaced SVG logo with vintage colorful logo featuring paint squares and "PAINTING SERVICE" text
  - Fixed all Services section images to use consistent paint rollers image
  - Cleaned up Services section to show 3 main services (Interior, Exterior, Commercial)
  - Ensured all content is properly translated to English
  - Applied new logo to Navigation and Footer components
- July 04, 2025. Database Integration:
  - Added PostgreSQL database using Neon Database (serverless PostgreSQL)
  - Replaced in-memory storage with database storage implementation
  - Updated storage.ts to use Drizzle ORM for database operations
  - Successfully pushed database schema with user management functionality
  - All user data now persists in the database instead of memory
- July 04, 2025. Color Scheme Update:
  - Changed red color to royal blue (hsl(225, 73%, 57%)) throughout the website
  - Updated green color to bright lime green (hsl(85, 100%, 45%)) based on user specification
  - Modified hero section gradient to use orange-to-blue instead of orange-to-red
  - Updated navigation, contact forms, buttons, and footer to use new blue color
  - Services section now uses lime green background with updated text colors
  - Changed green/lime to bright orange (hsl(30, 100%, 50%)) based on user's second specification
  - Services section background now uses orange, WhatsApp button changed to orange
- July 04, 2025. Deployment Configuration Fixes:
  - Identified deployment failure due to static vs autoscale configuration mismatch
  - Created deployment guide documenting the need to change from static to autoscale deployment
  - Built scripts to handle build output directory structure (dist/public to dist)
  - Created fix-deployment.sh script to automate the deployment preparation process
  - Documented proper deployment configuration and troubleshooting steps
  - Added comprehensive deployment fix script and updated deployment guide with clear manual steps

## User Preferences

Preferred communication style: Simple, everyday language.