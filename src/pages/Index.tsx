
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
      image: "https://images.unsplash.com/photo-1623265300797-4a3541e1a9a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
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
