// This file can be run after the build process to pre-render the application
// Run with: node src/utils/runReactSnap.js
const { run } = require('react-snap');

run({
  // Pre-rendering configuration
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  puppeteerExecutablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
  // Include all routes that should be pre-rendered
  include: [
    '/',
    '/about',
    '/cities',
    '/partners',
    '/resources',
    '/faq',
    '/contact'
  ],
  // Wait for the network to be idle to ensure all content is loaded
  waitFor: 1000,
  // Useful for debugging
  debugLog: true,
  // Add meta tags for SEO
  inlineCss: true,
  // Keep the structure of your app
  removeBlobs: true,
  // Fix image loading
  fixInsertRule: true,
  // Improve performance
  skipThirdPartyRequests: false,
  // Handle JavaScript
  headless: true,
  // Use source maps
  sourceMaps: true,
});
