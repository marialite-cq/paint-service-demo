# Painting Service Website

A modern, responsive single-page website for a professional painting service company. Built with React, Express, and PostgreSQL.

## Quick Start

```bash
# Development
npm run dev

# Production Build
npm run build

# Start Production Server
npm start
```

## Deployment Fix

If you encounter deployment errors, the issue is likely that the deployment is configured as "static" instead of "autoscale". This is a full-stack Express application, not a static site.

### Fix Steps:

1. **Change deployment type** in Replit:
   - Go to Deploy tab
   - Change from "Static" to "Autoscale"
   - Build command: `npm run build`
   - Run command: `npm start`

2. **Or run the automated fix**:
   ```bash
   ./fix-deployment.sh
   ```

## Architecture

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Express.js + PostgreSQL
- **Database**: Drizzle ORM with Neon Database
- **UI**: Radix UI components with custom styling

## Features

- Responsive design with mobile-first approach
- Professional painting services showcase
- Contact form with WhatsApp integration
- Smooth animations and scroll effects
- Modern color scheme (blue, orange, white)
- PostgreSQL database integration

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Development/production mode

For detailed deployment troubleshooting, see `DEPLOYMENT_GUIDE.md`.