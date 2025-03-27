
import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CityCard from '../components/CityCard';

const Cities = () => {
  const [selectedCity, setSelectedCity] = useState<number | null>(null);
  
  const cities = [
    {
      id: 1,
      name: "Amsterdam",
      image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      shortDescription: "Creating connected food networks through urban canal systems.",
      description: "Amsterdam's Bauhaus Bites initiative focuses on utilizing the city's famous canal system as a network for sustainable food distribution, connecting urban farms to local markets and communities. The project includes floating gardens, hydroponics facilities, and water-based transport of fresh produce to minimize carbon emissions.",
      features: [
        "Floating gardens on canal barges",
        "Hydroponics systems integrated with historical buildings",
        "Water-based food distribution network",
        "Community gardening spaces along canals"
      ]
    },
    {
      id: 2,
      name: "Barcelona",
      image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      shortDescription: "Revitalizing urban spaces with Mediterranean food traditions.",
      description: "Barcelona's project embraces the Mediterranean diet and local food culture, transforming underutilized urban spaces into productive food environments. The city is implementing vertical gardens on building façades, rooftop greenhouses, and community markets in public squares, all designed to withstand the Mediterranean climate while celebrating local culinary traditions.",
      features: [
        "Vertical gardens adapted to Mediterranean climate",
        "Rooftop greenhouse network",
        "Public square food markets",
        "Urban composting systems"
      ]
    },
    {
      id: 3,
      name: "Copenhagen",
      image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      shortDescription: "Leading the way in circular food systems and zero waste.",
      description: "Copenhagen's Bauhaus Bites project emphasizes circular economy principles within the food system. The city is developing neighborhood-scale food hubs that integrate production, processing, distribution, consumption, and waste management all within walking distance. A significant focus is placed on capturing and recycling nutrients, minimizing food waste, and optimizing energy use throughout the food cycle.",
      features: [
        "Neighborhood food circles with zero-waste goals",
        "Biogas production from food waste",
        "Year-round growing systems using renewable energy",
        "Digital food sharing platforms"
      ]
    },
    {
      id: 4,
      name: "Milan",
      image: "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80",
      shortDescription: "Bridging rural and urban food systems through innovative connections.",
      description: "Milan is focusing on strengthening the connections between the city and surrounding agricultural areas. The project includes creating green corridors that serve as both ecological and food production spaces, linking urban consumers directly with peri-urban farmers. Milan is also implementing food innovation labs where traditional Italian food heritage meets cutting-edge sustainable production techniques.",
      features: [
        "Urban-rural food corridors",
        "Farmers' market networks",
        "Food innovation laboratories",
        "School-based food education gardens"
      ]
    },
    {
      id: 5,
      name: "Prague",
      image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      shortDescription: "Transforming historical sites into productive food landscapes.",
      description: "Prague's unique approach integrates food production into the city's rich historical fabric. The project transforms courtyards in the old city into productive gardens, creates edible landscapes around historical monuments, and repurposes industrial heritage sites as indoor vertical farms. A special emphasis is placed on preserving and promoting Central European food traditions while introducing sustainable innovations.",
      features: [
        "Historical courtyard food gardens",
        "Repurposed industrial buildings for vertical farming",
        "Edible landscaping around monuments",
        "Traditional food preservation workshops"
      ]
    },
    {
      id: 6,
      name: "Vienna",
      image: "https://images.unsplash.com/photo-1516550893885-7b7791882062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      shortDescription: "Creating inclusive food environments through cultural diversity.",
      description: "Vienna's Bauhaus Bites project celebrates the city's cultural diversity through food. The initiative develops multiethnic community gardens in public housing areas, creates intercultural cooking and dining spaces, and establishes neighborhood food education centers. By bringing together traditional Austrian cuisine with international food practices, Vienna aims to foster social cohesion while promoting sustainable eating habits.",
      features: [
        "Multiethnic community gardens",
        "Intercultural cooking centers",
        "Neighborhood food education hubs",
        "Seasonal food preservation initiatives"
      ]
    },
    {
      id: 7,
      name: "Warsaw",
      image: "https://images.unsplash.com/photo-1607427293702-036707fc3663?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      shortDescription: "Revitalizing post-industrial areas through sustainable food production.",
      description: "Warsaw focuses on transforming post-industrial areas into productive food landscapes. The project includes converting brownfield sites into organic urban farms, creating food forests in underutilized spaces, and developing indoor farming in repurposed industrial buildings. A key element is the rehabilitation of soil using phytoremediation techniques, turning contaminated land into healthy food-producing environments.",
      features: [
        "Brownfield conversion to organic farms",
        "Soil remediation through specialized planting",
        "Food forests in urban spaces",
        "Indoor farming in former industrial buildings"
      ]
    }
  ];
  
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-16">
        <div className="bg-bauhaus-dark text-white py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Cities</h1>
              <p className="text-xl text-white/80 animate-fade-in-delay-1">
                Discover how we're implementing innovative food environments across seven European cities,
                each tailored to local needs and cultures.
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city, index) => (
                <CityCard
                  key={city.id}
                  name={city.name}
                  image={city.image}
                  description={city.shortDescription}
                  index={index}
                  onClick={() => setSelectedCity(city.id)}
                />
              ))}
            </div>
          </div>
        </section>
        
        {selectedCity && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 flex items-center justify-center p-4">
            <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedCity(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                ✕
              </button>
              
              {cities.find(city => city.id === selectedCity) && (
                <div className="p-6">
                  <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
                    <img
                      src={cities.find(city => city.id === selectedCity)?.image}
                      alt={cities.find(city => city.id === selectedCity)?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-bauhaus-dark mb-4">
                    {cities.find(city => city.id === selectedCity)?.name}
                  </h2>
                  
                  <p className="text-gray-700 mb-6">
                    {cities.find(city => city.id === selectedCity)?.description}
                  </p>
                  
                  <div className="bg-bauhaus-light p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-bauhaus-dark mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {cities.find(city => city.id === selectedCity)?.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-bauhaus-accent mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Cities;
