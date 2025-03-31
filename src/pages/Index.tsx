
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import HeroSection from '../components/home/HeroSection';
import MissionSection from '../components/home/MissionSection';
import NewsSection from '../components/home/NewsSection';
import CitiesSection from '../components/home/CitiesSection';
import JoinSection from '../components/home/JoinSection';
import LinkedInFeedSection from '../components/home/LinkedInFeedSection';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "BAUHAUS BITES",
      subtitle: "Transforming urban and peri-urban food systems into sustainable, inclusive, and vibrant ecosystems.",
      image: "/lovable-uploads/6d6466da-efef-42db-afda-e1194d2311e9.png"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  // For debugging purposes
  console.log("Current slide image:", slides[currentSlide].image);
  
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <HeroSection 
        title={slides[currentSlide].title} 
        subtitle={slides[currentSlide].subtitle}
        imageUrl={slides[currentSlide].image}
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
