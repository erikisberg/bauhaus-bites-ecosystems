
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();
  
  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  });
  
  // Use vite's connect instance as middleware
  app.use(vite.middlewares);
  
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    
    try {
      // 1. Read index.html
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8'
      );
      
      // 2. Apply Vite HTML transforms
      template = await vite.transformIndexHtml(url, template);
      
      // 3. Load the server entry
      const { render } = await vite.ssrLoadModule('/src/entry-server.js');
      
      // 4. Render the app HTML
      const { html, preloadedState } = await render(url);
      
      // 5. Inject the app-rendered HTML into the template
      const appHtml = template
        .replace(`<!--app-html-->`, html)
        .replace('<!--preloaded-state-->', 
          `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>`);
      
      // 6. Send the rendered HTML back
      res.status(200).set({ 'Content-Type': 'text/html' }).end(appHtml);
    } catch (e) {
      // If an error is caught, let Vite fix the stack trace for better debugging
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
  
  app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
  });
}

createServer();
