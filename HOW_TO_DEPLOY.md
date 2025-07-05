# How to Deploy - Simple Steps

## The Problem
Your app failed to deploy because it's configured as a "static" website, but this is actually a full-stack application with a database and server.

## The Solution (3 Simple Steps)

### Step 1: Build Your App
Run this command in the Shell:
```bash
npm run build
```

### Step 2: Run the Deployment Fix Script
```bash
./scripts/fix-deployment.sh
```

### Step 3: Change Deployment Settings
1. Go to the **"Deploy"** tab in Replit
2. Click **"Configure"** or **"Settings"**
3. Change **"Deployment Target"** from **"Static"** to **"Autoscale"**
4. Make sure it shows:
   - Build Command: `npm run build`
   - Run Command: `npm start`
5. Click **"Deploy"**

## Why This Works
- **Static** deployments only serve HTML files (like a simple website)
- **Autoscale** deployments run a server (like your app needs)
- Your app needs a server to connect to the database and handle user requests

## If It Still Doesn't Work
1. Make sure the deployment type is set to **"Autoscale"** not **"Static"**
2. Check that your environment variables are set (especially `DATABASE_URL`)
3. Try running `npm start` locally first to make sure the server works

That's it! Your app should deploy successfully after these changes.