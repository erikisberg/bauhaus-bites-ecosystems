
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../ui/badge';

const CitiesSection = () => {
  const cities = [
    {
      id: 1,
      name: "Amsterdam",
      image: "https://images.unsplash.com/photo-1546636889-ba9fdd63583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80",
      category: "Urban Waters"
    },
    {
      id: 2,
      name: "Barcelona",
      image: "https://images.unsplash.com/photo-1516550893885-7b7791882062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
      category: "Mediterranean"
    },
    {
      id: 3,
      name: "Copenhagen",
      image: "https://images.unsplash.com/photo-1551352912-484163ad5be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      category: "Circular Economy"
    }
  ];
  
  return (
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
