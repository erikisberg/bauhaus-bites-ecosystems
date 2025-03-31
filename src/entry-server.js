
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { wpService } from './services/wordpress';

export async function render(url) {
  // Create a new query client for each render
  const queryClient = new QueryClient();
  
  // Prefetch WordPress data based on the current route
  if (url === '/' || url.startsWith('/cities')) {
    await queryClient.prefetchQuery({
      queryKey: ['cities'],
      queryFn: wpService.getCities
    });
  }
  
  if (url === '/resources' || url.startsWith('/resources')) {
    await queryClient.prefetchQuery({
      queryKey: ['publications'],
      queryFn: wpService.getPublications
    });
    
    await queryClient.prefetchQuery({
      queryKey: ['mediaResources'],
      queryFn: wpService.getMediaResources
    });
    
    await queryClient.prefetchQuery({
      queryKey: ['toolkits'],
      queryFn: wpService.getToolkits
    });
  }
  
  if (url.startsWith('/articles') || url.startsWith('/resources/article')) {
    await queryClient.prefetchQuery({
      queryKey: ['news'],
      queryFn: wpService.getPosts
    });
  }
  
  // Render the app
  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </QueryClientProvider>
  );
  
  // Get dehydrated state from query client
  const dehydratedState = queryClient.getQueryState();
  
  return {
    html,
    preloadedState: {
      queryCache: dehydratedState
    }
  };
}
