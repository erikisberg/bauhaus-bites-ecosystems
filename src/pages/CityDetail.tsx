
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { wpService } from '../services/wordpress';

interface City {
  id: number;
  name: string;
  image: string;
  description: string;
  shortDescription: string;
  category?: string;
  features: string[];
  gallery: string[];
}

const CityDetail = () => {
  const { cityId } = useParams();
  
  const { data: city, isLoading, error } = useQuery({
    queryKey: ['city', cityId],
    queryFn: () => wpService.getCityById(cityId as string),
    enabled: !!cityId,
  });
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-bauhaus-accent"></div>
      </div>
    );
  }
  
  if (error || !city) {
    console.error('Error loading city:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-bauhaus-dark mb-4">City Not Found</h1>
          <p className="mb-6">The city you're looking for doesn't exist or couldn't be loaded.</p>
          <Link to="/cities">
            <Button>Back to Cities</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-16">
        <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
          <img 
            src={city.image} 
            alt={city.name} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bauhaus-dark to-transparent opacity-70" />
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
            <div className="max-w-7xl mx-auto">
              <Link to="/cities" className="inline-flex items-center text-white hover:text-bauhaus-accent mb-4 transition-colors">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Cities
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{city.name}</h1>
              {city.category && (
                <Badge className="bg-bauhaus-accent/80 hover:bg-bauhaus-accent text-white font-medium backdrop-blur-sm">
                  {city.category}
                </Badge>
              )}
            </div>
          </div>
        </div>
        
        <section className="py-12 md:py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div dangerouslySetInnerHTML={{ __html: city.description }} className="text-xl text-gray-700 mb-10 leading-relaxed" />
            
            {city.features && city.features.length > 0 && (
              <div className="bg-bauhaus-light p-6 md:p-8 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-bauhaus-dark mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {city.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-bauhaus-accent mr-2 text-xl">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {city.gallery && city.gallery.length > 0 && (
              <>
                <h2 className="text-2xl font-bold text-bauhaus-dark mb-6">Photo Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {city.gallery.map((image, index) => (
                    <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={image} 
                        alt={`${city.name} ${index + 1}`} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default CityDetail;
