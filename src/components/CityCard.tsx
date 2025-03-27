
import { useEffect, useRef } from 'react';

interface CityCardProps {
  name: string;
  image: string;
  description: string;
  index: number;
  onClick?: () => void;
}

const CityCard = ({ name, image, description, index, onClick }: CityCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
              entry.target.classList.remove('opacity-0');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) observer.observe(cardRef.current);
    
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [index]);
  
  return (
    <div 
      ref={cardRef}
      className="opacity-0 group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-bauhaus-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white text-xl font-bold mb-2">{name}</h3>
        <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{description}</p>
      </div>
    </div>
  );
};

export default CityCard;
