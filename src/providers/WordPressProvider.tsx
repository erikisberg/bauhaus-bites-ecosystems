
import { ReactNode, createContext, useContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create WordPress context
const WordPressContext = createContext({});

// Create a QueryClient with optimized settings for SSR
const createQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (renamed from cacheTime)
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// Use an existing client for SSR or create a new one for CSR
let queryClient: QueryClient;
if (typeof window !== 'undefined') {
  // Client-side: create a new client if one doesn't exist
  queryClient = (window as any).__queryClient || createQueryClient();
  (window as any).__queryClient = queryClient;
} else {
  // Server-side: always create a new client
  queryClient = createQueryClient();
}

export const useWordPress = () => useContext(WordPressContext);

interface WordPressProviderProps {
  children: ReactNode;
}

export const WordPressProvider = ({ children }: WordPressProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WordPressContext.Provider value={{}}>
        {children}
      </WordPressContext.Provider>
    </QueryClientProvider>
  );
};

export default WordPressProvider;
