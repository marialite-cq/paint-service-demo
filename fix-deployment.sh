#!/bin/bash

echo "=== Fixing Deployment Structure ==="

# Run the build
echo "Building the application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✓ Build completed successfully"
else
    echo "✗ Build failed"
    exit 1
fi

# Check if dist/public exists
if [ -d "dist/public" ]; then
    echo "✓ Found dist/public directory"
    
    # Copy all files from dist/public to dist root
    echo "Copying files from dist/public to dist root..."
    cp -r dist/public/* dist/
    
    # Verify index.html exists in dist root
    if [ -f "dist/index.html" ]; then
        echo "✓ index.html found in dist root"
        echo "✓ Deployment structure fixed!"
        
        # List the contents
        echo ""
        echo "=== Dist directory contents ==="
        ls -la dist/
        
        echo ""
        echo "=== Deployment ready! ==="
        echo "You can now deploy with autoscale configuration:"
        echo "- Build command: npm run build"
        echo "- Run command: npm start"
        
    else
        echo "✗ index.html not found in dist root"
        exit 1
    fi
else
    echo "✗ dist/public directory not found"
    exit 1
fi