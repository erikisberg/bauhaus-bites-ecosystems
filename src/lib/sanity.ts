
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Your Sanity project configuration
export const client = createClient({
  projectId: 'your-project-id', // Replace with your Sanity project ID
  dataset: 'production',
  useCdn: true, // Set to false if you want to ensure fresh content
  apiVersion: '2023-05-03', // Use the latest API version
});

// Create an image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
}

// Type definitions for our Sanity content
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  image: SanityImage;
}

export interface Project {
  title: string;
  description: string;
  image: SanityImage;
}

export interface Partner {
  name: string;
  logo: SanityImage;
  website: string;
}

export interface City {
  name: string;
  image: SanityImage;
  description: string;
}

// Generic content fetching function
export async function fetchContent<T>(type: string): Promise<T[]> {
  return client.fetch<T[]>(`*[_type == "${type}"]`);
}

// Specific fetchers
export async function fetchHero(): Promise<Hero[]> {
  return fetchContent<Hero>('hero');
}

export async function fetchProjects(): Promise<Project[]> {
  return fetchContent<Project>('project');
}

export async function fetchPartners(): Promise<Partner[]> {
  return fetchContent<Partner>('partner');
}

export async function fetchCities(): Promise<City[]> {
  return fetchContent<City>('city');
}
