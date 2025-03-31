import { useEffect, useState, useRef } from 'react';
import Hero from '../components/Hero';
import FeaturedProject from '../components/FeaturedProject';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import NewsArticle from '../components/NewsArticle';
import { ArrowRight, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionsRef = useRef<HTMLDivElement>(null);
  
  const slides = [
    {
      title: "BAUHAUS BITES",
      subtitle: "Transforming urban and peri-urban food systems into sustainable, inclusive, and vibrant ecosystems.",
      image: "https://images.unsplash.com/photo-1623265300797-4a3541e1a9a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  // Sample news articles data
  const newsArticles = [
    {
      title: "New Urban Farming Initiative Launches in Barcelona",
      description: "The Barcelona city council has approved a groundbreaking urban farming initiative that will transform unused spaces into community gardens.",
      date: "June 15, 2023",
      image: "https://images.unsplash.com/photo-1516550893885-7b7791882062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
      link: "#"
    },
    {
      title: "Study Reveals Benefits of Nature-Based Solutions in Urban Food Systems",
      description: "A comprehensive study conducted across European cities demonstrates how nature-based solutions can significantly improve urban food security and sustainability.",
      date: "May 28, 2023",
      image: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "#"
    },
    {
      title: "Amsterdam Implements Vertical Farming Technology in Public Buildings",
      description: "Amsterdam is leading the way with innovative vertical farming installations in public buildings, bringing food production directly into urban centers.",
      date: "April 12, 2023",
      image: "https://images.unsplash.com/photo-1546636889-ba9fdd63583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80",
      link: "#"
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
      
      <Hero 
        title={slides[currentSlide].title} 
        subtitle={slides[currentSlide].subtitle}
        imageUrl={slides[currentSlide].image}
      />
      
      <section className="section-padding bg-bauhaus-light" ref={sectionsRef}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-bauhaus-dark mb-6">
              Reimagining Food Environments
            </h2>
            <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
              Rooted in the principles of the New European Bauhaus, our mission is to reimagine food environments 
              that are healthier, greener, and more connected to nature while celebrating cultural diversity and community.
            </p>
          </div>
          
          <FeaturedProject
            image="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            title="Sustainable Food Ecosystems"
            description="Over the next three years, we will co-create and test new 'Bauhaus Bites Food Environments' in seven European cities, blending cutting-edge Nature-Based Solutions (NBS) with sustainable dietary practices. By focusing on local needs, social inclusivity, and the beauty of shared spaces, we aim to demonstrate how food systems can positively shape our cities and communities."
          />
          
          <FeaturedProject
            image="https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            title="Nature-Based Solutions"
            description="By integrating Nature-Based Solutions into urban food systems, we're creating resilient environments that benefit both people and the planet. Our approach combines traditional knowledge with innovative technologies to address food security challenges while enhancing biodiversity and improving urban livability."
            reverse
          />
        </div>
      </section>
      
      {/* News Articles Carousel Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-4 flex items-center justify-center gap-1 mx-auto w-fit">
              <Newspaper className="w-3 h-3" /> Latest News
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-bauhaus-dark mb-6">
              Stay Updated with Bauhaus Bites
            </h2>
            <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
              Discover the latest developments, research findings, and success stories from our initiatives across Europe.
            </p>
          </div>
          
          <Carousel className="mx-auto max-w-5xl">
            <CarouselContent>
              {newsArticles.map((article, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-2">
                    <NewsArticle
                      title={article.title}
                      description={article.description}
                      date={article.date}
                      image={article.image}
                      link={article.link}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="relative static left-0 translate-y-0 ml-0" />
              <CarouselNext className="relative static right-0 translate-y-0 mr-0" />
            </div>
          </Carousel>
          
          <div className="mt-12 text-center">
            <a href="/resources" className="inline-flex items-center text-bauhaus-accent hover:text-bauhaus-dark font-medium transition-colors">
              View All News
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-4">
              Our Cities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-bauhaus-dark mb-6">
              Exploring Seven European Cities
            </h2>
            <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
              Discover how we're implementing innovative food environments across Europe,
              each tailored to local needs and cultures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1546636889-ba9fdd63583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
                alt="Amsterdam"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bauhaus-dark to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold">Amsterdam</h3>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1516550893885-7b7791882062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80"
                alt="Barcelona"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bauhaus-dark to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold">Barcelona</h3>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1551352912-484163ad5be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                alt="Copenhagen"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bauhaus-dark to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold">Copenhagen</h3>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/cities" className="inline-flex items-center text-bauhaus-accent hover:text-bauhaus-dark font-medium transition-colors">
              Explore All Cities
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-bauhaus-accent text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Initiative
            </h2>
            <p className="max-w-3xl mx-auto leading-relaxed text-white/90">
              Want to hear the latest from our project? Follow us on social media or get in touch directly.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-bauhaus-accent rounded-md font-medium hover:bg-white/90 transition-colors inline-flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a
              href="#"
              className="px-6 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
