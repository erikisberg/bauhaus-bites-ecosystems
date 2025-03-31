
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const rootElement = document.getElementById('root');
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
    },
  },
});

// If we have a preloaded state, use it to initialize the query client
if (window.__PRELOADED_STATE__) {
  try {
    const state = window.__PRELOADED_STATE__;
    if (state.queryCache) {
      queryClient.setQueryData(state.queryCache);
    }
  } catch (error) {
    console.error('Error hydrating query client:', error);
  }
}

// Use hydrateRoot for SSR or createRoot for CSR
if (rootElement.hasAttribute('data-ssr')) {
  hydrateRoot(
    rootElement,
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  );
} else {
  createRoot(rootElement).render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
