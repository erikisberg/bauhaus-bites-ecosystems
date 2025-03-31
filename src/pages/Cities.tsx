
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CityCard from '../components/CityCard';
import { wpService } from '../services/wordpress';

// Define interface for city data
interface City {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  category?: string;
}

const Cities = () => {
  // Fetch cities from WordPress
  const { data: cities, isLoading, error } = useQuery({
    queryKey: ['cities'],
    queryFn: wpService.getCities
  });
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-bauhaus-accent"></div>
      </div>
    );
  }
  
  if (error) {
    console.error('Error loading cities:', error);
  }
  
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-16">
        <div className="bg-bauhaus-dark text-white py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Cities</h1>
              <p className="text-xl text-white/80 animate-fade-in-delay-1">
                Discover how we're implementing innovative food environments across European cities,
                each tailored to local needs and cultures.
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities && cities.map((city: City, index: number) => (
                <Link key={city.id} to={`/cities/${city.id}`}>
                  <CityCard
                    name={city.name}
                    image={city.image}
                    description={city.shortDescription}
                    category={city.category}
                    index={index}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cities;
