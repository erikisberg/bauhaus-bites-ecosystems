
import { ReactNode, createContext, useContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new QueryClient for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (renamed from cacheTime)
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// WordPress context for potential future expansion
const WordPressContext = createContext({});

export const useWordPress = () => useContext(WordPressContext);

interface WordPressProviderProps {
  children: ReactNode;
}

export const WordPressProvider = ({ children }: WordPressProviderProps) => {
  // We could add authentication, global state management, etc. here in the future
  
  return (
    <QueryClientProvider client={queryClient}>
      <WordPressContext.Provider value={{}}>
        {children}
      </WordPressContext.Provider>
    </QueryClientProvider>
  );
};

export default WordPressProvider;
