# Deployment Guide for Painting Service Website

## Issue Overview
The deployment failed because the project is configured as a "static" deployment, but this is a full-stack Express application that needs to run a server.

## Current Configuration Issues
1. **Deployment Type**: Set to "static" instead of "autoscale"
2. **Build Output**: Vite builds to `dist/public` but deployment expects files in `dist`
3. **Server Requirements**: The app needs Express server running, not just static files

## Quick Fix Instructions

### Step 1: Run the Deployment Fix Script
```bash
./scripts/fix-deployment.sh
```
This will:
- Build your application
- Copy files from `dist/public` to `dist` root
- Prepare everything for deployment

### Step 2: Change Deployment Configuration (MANUAL)
In Replit, you need to manually change the deployment settings:

1. Go to the **"Deploy"** tab in Replit
2. Click on **"Configure"** or **"Settings"**
3. Change **"Deployment Target"** from **"Static"** to **"Autoscale"**
4. Ensure these settings:
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`
   - **Public Directory**: Remove this setting (not needed for autoscale)

### Step 3: Deploy
Click **"Deploy"** to deploy with the new configuration.

## Technical Details

### Why This Fix Works
1. **Autoscale vs Static**: 
   - Static deployments serve only HTML/CSS/JS files
   - Autoscale deployments run a server (Express in our case)
   - This app needs a server for API routes and database connections

2. **File Structure**: 
   - Vite builds frontend to `dist/public`
   - Our script copies these files to `dist` root for deployment
   - Express server in `dist/index.js` serves static files and handles API routes

3. **Production Flow**:
   - `npm run build` → Creates `dist/public` (frontend) + `dist/index.js` (server)
   - `npm start` → Runs the Express server in production mode
   - Express serves static files from `dist/public` and handles API routes

### Environment Variables
Ensure these are set in your Replit deployment:
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Set to "production"

### Troubleshooting
- If deployment still fails, check that `dist/index.html` exists after running the fix script
- Verify that `dist/index.js` (server file) exists
- Make sure the deployment type is set to "Autoscale" not "Static"

## Manual Deployment Steps

1. **Change deployment type** in the Replit deployment settings:
   - Go to the "Deploy" tab
   - Change from "Static" to "Autoscale"
   - Set the build command to: `npm run build`
   - Set the run command to: `npm start`

2. **Verify build output**:
   ```bash
   npm run build
   ```
   This should create:
   - `dist/public/` with frontend assets
   - `dist/index.js` with backend server

3. **Test production server locally**:
   ```bash
   npm start
   ```

## Architecture Notes

This is a full-stack application with:
- **Frontend**: React SPA built with Vite
- **Backend**: Express server with PostgreSQL database
- **API Routes**: RESTful endpoints for user management
- **Database**: PostgreSQL with Drizzle ORM

The app cannot be deployed as a static site because it requires:
- Server-side database operations
- API route handling
- Session management
- Dynamic content generation

## Post-Deployment Verification

After deployment, verify:
1. Website loads correctly at the provided URL
2. Navigation works (About, Services, Contact sections)
3. Contact form can be submitted
4. API endpoints respond correctly
5. Database connections work properly

## Troubleshooting

**If deployment still fails**:
1. Check build logs for errors
2. Verify environment variables are set
3. Ensure database is accessible
4. Check server logs for runtime errors

**Common issues**:
- Missing environment variables
- Database connection failures
- Static file serving problems
- Port configuration issues