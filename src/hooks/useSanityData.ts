
import { useQuery } from '@tanstack/react-query';
import * as sanity from '../lib/sanity';

// Generic hook for fetching Sanity data
export function useSanityData<T>(
  type: string, 
  queryKey: string, 
  fallbackData: T[] = []
) {
  const { data, isLoading, error } = useQuery({
    queryKey: [queryKey],
    queryFn: () => sanity.fetchContent<T>(type),
  });

  return {
    data: data || fallbackData,
    isLoading,
    error,
  };
}

// Specific hooks for different content types
export function useHeroData() {
  const fallbackData = [{
    title: "BAUHAUS BITES",
    subtitle: "Transforming urban and peri-urban food systems into sustainable, inclusive, and vibrant ecosystems.",
    image: {
      _type: 'image',
      asset: {
        _ref: '',
        _type: 'reference'
      }
    }
  }];

  return useSanityData<sanity.Hero>('hero', 'heroData', fallbackData);
}

export function useProjectsData() {
  return useSanityData<sanity.Project>('project', 'projectsData');
}

export function usePartnersData() {
  return useSanityData<sanity.Partner>('partner', 'partnersData');
}

export function useCitiesData() {
  return useSanityData<sanity.City>('city', 'citiesData');
}
