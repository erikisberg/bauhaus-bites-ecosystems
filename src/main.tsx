
import './index.css';

// In development, use the regular React entry
if (import.meta.env.DEV) {
  import('./entry-client');
}

// This helps react-snap know when the page has been loaded
// Add type definition for snapSaveState
declare global {
  interface Window {
    snapSaveState: () => void;
    __PRELOADED_STATE__: any;
  }
}

window.snapSaveState = () => {
  (window as any).__PRELOADED_STATE__ = { ready: true };
};
