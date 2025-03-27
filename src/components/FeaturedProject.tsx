
import { useEffect, useRef } from 'react';

interface FeaturedProjectProps {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const FeaturedProject = ({ image, title, description, reverse = false }: FeaturedProjectProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === contentRef.current) {
              entry.target.classList.add(reverse ? 'animate-fade-in-right' : 'animate-fade-in-left');
              entry.target.classList.remove('opacity-0');
            }
            if (entry.target === imageRef.current) {
              entry.target.classList.add(reverse ? 'animate-fade-in-left' : 'animate-fade-in-right');
              entry.target.classList.remove('opacity-0');
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    
    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, [reverse]);
  
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16 py-16`}>
      <div 
        ref={imageRef}
        className="opacity-0 w-full md:w-1/2 overflow-hidden rounded-lg shadow-xl"
      >
        <div className="relative aspect-video animate-image-glow">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
          />
        </div>
      </div>
      
      <div 
        ref={contentRef}
        className="opacity-0 w-full md:w-1/2 space-y-4"
      >
        <h3 className="text-bauhaus-dark text-2xl md:text-3xl font-bold">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedProject;
