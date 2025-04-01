
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const CityDetail = () => {
  const { cityId } = useParams();
  
  const cities = [
    {
      id: 1,
      name: "Amsterdam",
      image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      shortDescription: "Creating connected food networks through urban canal systems.",
      description: "Amsterdam's Bauhaus Bites initiative focuses on utilizing the city's famous canal system as a network for sustainable food distribution, connecting urban farms to local markets and communities. The project includes floating gardens, hydroponics facilities, and water-based transport of fresh produce to minimize carbon emissions.",
      category: "Urban Waters",
      features: [
        "Floating gardens on canal barges",
        "Hydroponics systems integrated with historical buildings",
        "Water-based food distribution network",
        "Community gardening spaces along canals"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1558551649-e44c8f992010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1512470053050-8d2635a6206b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      ]
    },
    {
      id: 2,
      name: "Barcelona",
      image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      shortDescription: "Revitalizing urban spaces with Mediterranean food traditions.",
      description: "Barcelona's project embraces the Mediterranean diet and local food culture, transforming underutilized urban spaces into productive food environments. The city is implementing vertical gardens on building façades, rooftop greenhouses, and community markets in public squares, all designed to withstand the Mediterranean climate while celebrating local culinary traditions.",
      category: "Mediterranean",
      features: [
        "Vertical gardens adapted to Mediterranean climate",
        "Rooftop greenhouse network",
        "Public square food markets",
        "Urban composting systems"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1464790719320-516ecd75af6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1503856348256-2278a419b27a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      ]
    },
    {
      id: 3,
      name: "Copenhagen",
      image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      shortDescription: "Leading the way in circular food systems and zero waste.",
      description: "Copenhagen's Bauhaus Bites project emphasizes circular economy principles within the food system. The city is developing neighborhood-scale food hubs that integrate production, processing, distribution, consumption, and waste management all within walking distance. A significant focus is placed on capturing and recycling nutrients, minimizing food waste, and optimizing energy use throughout the food cycle.",
      category: "Circular Economy",
      features: [
        "Neighborhood food circles with zero-waste goals",
        "Biogas production from food waste",
        "Year-round growing systems using renewable energy",
        "Digital food sharing platforms"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1534237710431-e2fc698436a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1520945948761-c731002218a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      ]
    },
    {
      id: 4,
      name: "Milan",
      image: "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80",
      shortDescription: "Bridging rural and urban food systems through innovative connections.",
      description: "Milan is focusing on strengthening the connections between the city and surrounding agricultural areas. The project includes creating green corridors that serve as both ecological and food production spaces, linking urban consumers directly with peri-urban farmers. Milan is also implementing food innovation labs where traditional Italian food heritage meets cutting-edge sustainable production techniques.",
      category: "Urban-Rural Link",
      features: [
        "Urban-rural food corridors",
        "Farmers' market networks",
        "Food innovation laboratories",
        "School-based food education gardens"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80",
        "https://images.unsplash.com/photo-1574236170880-db91ab4c9521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      ]
    },
    {
      id: 5,
      name: "Prague",
      image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      shortDescription: "Transforming historical sites into productive food landscapes.",
      description: "Prague's unique approach integrates food production into the city's rich historical fabric. The project transforms courtyards in the old city into productive gardens, creates edible landscapes around historical monuments, and repurposes industrial heritage sites as indoor vertical farms. A special emphasis is placed on preserving and promoting Central European food traditions while introducing sustainable innovations.",
      category: "Heritage",
      features: [
        "Historical courtyard food gardens",
        "Repurposed industrial buildings for vertical farming",
        "Edible landscaping around monuments",
        "Traditional food preservation workshops"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1458150945447-7fb764c11a92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1513805959324-461e83074be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      ]
    },
    {
      id: 6,
      name: "Vienna",
      image: "https://images.unsplash.com/photo-1516550893885-7b7791882062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      shortDescription: "Creating inclusive food environments through cultural diversity.",
      description: "Vienna's Bauhaus Bites project celebrates the city's cultural diversity through food. The initiative develops multiethnic community gardens in public housing areas, creates intercultural cooking and dining spaces, and establishes neighborhood food education centers. By bringing together traditional Austrian cuisine with international food practices, Vienna aims to foster social cohesion while promoting sustainable eating habits.",
      category: "Cultural Diversity",
      features: [
        "Multiethnic community gardens",
        "Intercultural cooking centers",
        "Neighborhood food education hubs",
        "Seasonal food preservation initiatives"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1516550893885-7b7791882062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        "https://images.unsplash.com/photo-1515091943808-9811bbbe329b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      ]
    },
    {
      id: 7,
      name: "Warsaw",
      image: "https://images.unsplash.com/photo-1607427293702-036707fc3663?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      shortDescription: "Revitalizing post-industrial areas through sustainable food production.",
      description: "Warsaw focuses on transforming post-industrial areas into productive food landscapes. The project includes converting brownfield sites into organic urban farms, creating food forests in underutilized spaces, and developing indoor farming in repurposed industrial buildings. A key element is the rehabilitation of soil using phytoremediation techniques, turning contaminated land into healthy food-producing environments.",
      category: "Industrial Revival",
      features: [
        "Brownfield conversion to organic farms",
        "Soil remediation through specialized planting",
        "Food forests in urban spaces",
        "Indoor farming in former industrial buildings"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1607427293702-036707fc3663?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      ]
    }
  ];
  
  const city = cities.find(city => city.id.toString() === cityId);
  
  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-bauhaus-dark mb-4">City Not Found</h1>
          <p className="mb-6">The city you're looking for doesn't exist.</p>
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
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              {city.description}
            </p>
            
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
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default CityDetail;
