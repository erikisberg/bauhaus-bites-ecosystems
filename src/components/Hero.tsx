
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
}

const Hero = ({ title, subtitle, imageUrl }: HeroProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const subtitleElement = subtitleRef.current;
    const imageElement = imageRef.current;
    const buttonElement = buttonRef.current;

    if (titleElement) {
      titleElement.classList.add('animate-fade-in');
      titleElement.classList.remove('opacity-0');
    }

    if (subtitleElement) {
      subtitleElement.classList.add('animate-fade-in-delay-1');
      subtitleElement.classList.remove('opacity-0');
    }

    if (imageElement) {
      imageElement.classList.add('animate-fade-in-delay-2');
      imageElement.classList.remove('opacity-0');
    }

    if (buttonElement) {
      buttonElement.classList.add('animate-fade-in-delay-3');
      buttonElement.classList.remove('opacity-0');
    }
  }, []);

  // Ensure the background image is properly referenced
  const backgroundImageUrl = imageUrl || "/lovable-uploads/6d6466da-efef-42db-afda-e1194d2311e9.png";
  
  // For debugging purposes
  console.log("Background image URL:", backgroundImageUrl);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full-screen background image */}
      <div 
        ref={imageRef}
        className="opacity-0 absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{ 
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        {/* Dark overlay with teal tint to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-bauhaus-dark/80 to-bauhaus-dark/50"></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-16">
        <h1 
          ref={titleRef}
          className="opacity-0 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-4xl mb-6"
        >
          {title}
        </h1>
        <p 
          ref={subtitleRef}
          className="opacity-0 text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mb-10"
        >
          {subtitle}
        </p>
        <a 
          ref={buttonRef}
          href="#learn-more"
          className="opacity-0 group px-6 py-3 bg-bauhaus-accent text-white rounded-md font-medium inline-flex items-center hover:bg-bauhaus-accent/90 transition-all"
        >
          Learn More
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      <div 
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        id="learn-more"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
