#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distPublicPath = path.resolve(projectRoot, 'dist', 'public');
const distPath = path.resolve(projectRoot, 'dist');

console.log('🚀 Post-build deployment script starting...');

// Check if dist/public exists (built by Vite)
if (fs.existsSync(distPublicPath)) {
  console.log('📁 Found dist/public directory, copying files for deployment...');
  
  // Read all files from dist/public
  const files = fs.readdirSync(distPublicPath);
  
  // Copy each file to dist root
  files.forEach(file => {
    const srcPath = path.join(distPublicPath, file);
    const destPath = path.join(distPath, file);
    
    if (fs.statSync(srcPath).isDirectory()) {
      // Copy directory recursively
      fs.cpSync(srcPath, destPath, { recursive: true });
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
    }
    
    console.log(`✓ Copied ${file} to dist root`);
  });
  
  console.log('✅ All files copied successfully for deployment!');
} else {
  console.log('❌ dist/public directory not found, skipping file copy');
}

// Check if index.html exists in dist root
const indexPath = path.join(distPath, 'index.html');
if (fs.existsSync(indexPath)) {
  console.log('✅ index.html found in dist root - deployment ready!');
} else {
  console.log('❌ index.html not found in dist root - deployment may fail');
}

// Check if server file exists
const serverPath = path.join(distPath, 'index.js');
if (fs.existsSync(serverPath)) {
  console.log('✅ Server file (index.js) found in dist - backend ready!');
} else {
  console.log('❌ Server file (index.js) not found in dist - backend may fail');
}

console.log('\n📝 Deployment Summary:');
console.log('  - Frontend files: Copied from dist/public to dist');
console.log('  - Backend server: Available in dist/index.js');
console.log('  - Ready for autoscale deployment with npm start');
console.log('\n⚠️  IMPORTANT: Make sure deployment is set to "autoscale" not "static"!');