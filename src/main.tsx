
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root")!;

if (rootElement.hasChildNodes()) {
  // If the root element has children, that means the app is being hydrated after pre-rendering
  createRoot(rootElement).hydrate(<App />);
} else {
  // Normal rendering for development
  createRoot(rootElement).render(<App />);
}

// This helps react-snap know when the page has been loaded
window.snapSaveState = () => {
  (window as any).__PRELOADED_STATE__ = { ready: true };
};
