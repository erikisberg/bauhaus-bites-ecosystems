
import { ReactNode, createContext, useContext } from 'react';

// Create WordPress context
const WordPressContext = createContext({});

export const useWordPress = () => useContext(WordPressContext);

interface WordPressProviderProps {
  children: ReactNode;
}

export const WordPressProvider = ({ children }: WordPressProviderProps) => {
  return (
    <WordPressContext.Provider value={{}}>
      {children}
    </WordPressContext.Provider>
  );
};

export default WordPressProvider;
