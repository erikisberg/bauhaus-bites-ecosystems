
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroSection from '../components/home/HeroSection';
import MissionSection from '../components/home/MissionSection';
import NewsSection from '../components/home/NewsSection';
import CitiesSection from '../components/home/CitiesSection';
import JoinSection from '../components/home/JoinSection';
import LinkedInFeedSection from '../components/home/LinkedInFeedSection';
import MetaTags from '../components/MetaTags';
import { wpService } from '../services/wordpress';

// Define interfaces for our data types
interface Slide {
  title: string;
  subtitle: string;
  image: string;
}

interface HomePageData {
  id: string;
  title: string;
  content: string;
  slides: Slide[];
}

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Fetch home page data from WordPress
  const { data: homePageData, isLoading } = useQuery({
    queryKey: ['homePage'],
    queryFn: async () => {
      // Fetch the homepage content
      const page = await wpService.getPageBySlug('home');
      return page as HomePageData;
    },
  });
  
  // Default slide if WordPress data isn't available yet
  const defaultSlides = [
    {
      title: "BAUHAUS BITES",
      subtitle: "Transforming urban and peri-urban food systems into sustainable, inclusive, and vibrant ecosystems.",
      image: "/lovable-uploads/6d6466da-efef-42db-afda-e1194d2311e9.png"
    }
  ];
  
  // Use WordPress data for slides if available
  const slides = homePageData?.slides || defaultSlides;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  // For debugging purposes
  console.log("Current slide image:", slides[currentSlide]?.image);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-bauhaus-accent"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <MetaTags 
        title="Bauhaus Bites | Sustainable Urban Food Environments"
        description="An EU-funded initiative transforming urban and peri-urban food systems into sustainable, inclusive, and vibrant ecosystems."
        keywords="Bauhaus Bites, food environments, sustainability, urban food systems, EU project, New European Bauhaus"
      />
      
      <NavBar />
      
      <HeroSection 
        title={slides[currentSlide]?.title || defaultSlides[0].title} 
        subtitle={slides[currentSlide]?.subtitle || defaultSlides[0].subtitle}
        imageUrl={slides[currentSlide]?.image || defaultSlides[0].image}
      />
      
      <MissionSection />
      
      <NewsSection />
      
      <CitiesSection />
      
      <JoinSection />
      
      <LinkedInFeedSection />
      
      <Footer />
    </div>
  );
};

export default Index;
