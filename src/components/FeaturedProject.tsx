
import { useState } from 'react';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { motion } from 'framer-motion';

interface FeaturedProjectProps {
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const FeaturedProject = ({
  image,
  title,
  description,
  reverse = false,
}: FeaturedProjectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Split description into preview and expanded content
  const previewLength = 150;
  const previewText = description.substring(0, previewLength) + (description.length > previewLength ? '...' : '');
  const expandedText = description.substring(previewLength);

  return (
    <div className="my-12 md:my-20">
      <div 
        className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg">
          <div className={`absolute inset-0 bg-bauhaus-accent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-20' : ''}`} />
          <img 
            src={image} 
            alt={title} 
            className={`w-full h-64 md:h-96 object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : ''} ${isHovered ? 'animate-image-glow' : ''}`}
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <div className={`transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}>
            <h3 className="text-2xl font-bold text-bauhaus-dark mb-4">{title}</h3>
            <p className="text-gray-700 leading-relaxed">{previewText}</p>
            
            {description.length > previewLength && (
              <Collapsible 
                open={isOpen} 
                onOpenChange={setIsOpen}
                className="mt-2"
              >
                <CollapsibleContent className="text-gray-700 leading-relaxed mt-2 animate-accordion-down">
                  {expandedText}
                </CollapsibleContent>
                
                <CollapsibleTrigger asChild>
                  <button 
                    className="flex items-center gap-2 text-bauhaus-accent hover:text-bauhaus-secondary transition-colors mt-2 font-medium"
                  >
                    {isOpen ? (
                      <>
                        <Minus size={16} />
                        Read less
                      </>
                    ) : (
                      <>
                        <Plus size={16} />
                        Read more
                      </>
                    )}
                  </button>
                </CollapsibleTrigger>
              </Collapsible>
            )}
          </div>
          
          <a 
            href="#" 
            className={`inline-flex items-center mt-4 text-bauhaus-accent hover:text-bauhaus-secondary gap-1 transition-all duration-300 font-medium ${isHovered ? 'gap-2' : ''}`}
          >
            Learn more 
            <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
