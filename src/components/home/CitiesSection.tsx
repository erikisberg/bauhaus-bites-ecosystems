
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import { wpService } from '../../services/wordpress';

interface City {
  id: number;
  name: string;
  image: string;
  category?: string;
}

const CitiesSection = () => {
  const { data: allCities, isLoading } = useQuery({
    queryKey: ['cities'],
    queryFn: wpService.getCities
  });
  
  // Use only the first 3 cities for the homepage section
  const cities = allCities?.slice(0, 3) || [];
  
  if (isLoading) {
    return (
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="h-8 w-32 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="h-10 w-3/4 bg-gray-200 rounded mx-auto mb-6 animate-pulse"></div>
            <div className="h-20 w-1/2 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-4">
            Our Cities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-bauhaus-dark mb-6">
            Exploring European Cities
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Discover how we're implementing innovative food environments across Europe,
            each tailored to local needs and cultures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <Link key={index} to={`/cities/${city.id}`} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {city.category && (
                  <div className="absolute top-3 left-3 z-10">
                    <Badge 
                      className="bg-bauhaus-accent/80 hover:bg-bauhaus-accent text-white font-medium backdrop-blur-sm"
                    >
                      {city.category}
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bauhaus-dark to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold">{city.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/cities" className="inline-flex items-center text-bauhaus-accent hover:text-bauhaus-dark font-medium transition-colors">
            Explore All Cities
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
