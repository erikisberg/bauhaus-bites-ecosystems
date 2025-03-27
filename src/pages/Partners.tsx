
import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Link } from 'lucide-react';

const Partners = () => {
  const [displayMode, setDisplayMode] = useState<'grid' | 'list'>('grid');
  
  const partners = [
    {
      id: 1,
      name: "EcoCities Research Institute",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
      description: "Leading urban sustainability research focusing on nature-based solutions for cities.",
      website: "https://example.com/ecocities",
      category: "Research",
    },
    {
      id: 2,
      name: "GreenFood Network",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
      description: "Connecting sustainable food producers with urban communities.",
      website: "https://example.com/greenfood",
      category: "Food Systems",
    },
    {
      id: 3,
      name: "Urban Agriculture Alliance",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
      description: "Promoting urban farming initiatives across European cities.",
      website: "https://example.com/urbanag",
      category: "Agriculture",
    },
    {
      id: 4,
      name: "Bauhaus Design Collective",
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
      description: "Creative design solutions for sustainable urban environments.",
      website: "https://example.com/bauhausdesign",
      category: "Design",
    },
    {
      id: 5,
      name: "Community Food Labs",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
      description: "Experimental food innovation spaces in urban settings.",
      website: "https://example.com/foodlabs",
      category: "Innovation",
    },
    {
      id: 6,
      name: "European Urban Planners Network",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
      description: "Collaborative network of urban planning professionals.",
      website: "https://example.com/eupn",
      category: "Urban Planning",
    },
    {
      id: 7,
      name: "Sustainable Food Policy Institute",
      logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
      description: "Informing food policy decisions for healthier cities.",
      website: "https://example.com/foodpolicy",
      category: "Policy",
    },
    {
      id: 8,
      name: "City Farms Collective",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=250&q=80",
      description: "Network of small-scale urban farms and gardens.",
      website: "https://example.com/cityfarms",
      category: "Agriculture",
    }
  ];
  
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-16">
        <div className="bg-bauhaus-dark text-white py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Partners</h1>
              <p className="text-xl text-white/80 animate-fade-in-delay-1">
                Collaborating with leading organizations across Europe to build sustainable, inclusive food systems.
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-4">
                  Collaboration Network
                </span>
                <h2 className="text-3xl font-bold text-bauhaus-dark">Our Valued Partners</h2>
                <p className="text-gray-600 mt-2 max-w-2xl">
                  Bauhaus Bites brings together a diverse ecosystem of organizations committed to transforming urban food systems.
                </p>
              </div>
              
              <div className="flex mt-6 md:mt-0 space-x-2 self-start">
                <Button 
                  variant="outline" 
                  className={displayMode === 'grid' ? 'bg-bauhaus-accent/10 text-bauhaus-accent' : ''}
                  onClick={() => setDisplayMode('grid')}
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="7" height="7" x="3" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <rect width="7" height="7" x="3" y="14" rx="1" />
                    <rect width="7" height="7" x="14" y="14" rx="1" />
                  </svg>
                  Grid
                </Button>
                <Button 
                  variant="outline"
                  className={displayMode === 'list' ? 'bg-bauhaus-accent/10 text-bauhaus-accent' : ''}
                  onClick={() => setDisplayMode('list')}
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                  List
                </Button>
              </div>
            </div>
            
            {displayMode === 'grid' ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {partners.map((partner) => (
                  <Card key={partner.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-gray-100 flex items-center justify-center p-8">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="text-sm text-bauhaus-accent mb-1">{partner.category}</div>
                      <h3 className="font-semibold text-bauhaus-dark">{partner.name}</h3>
                      <a 
                        href={partner.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center text-sm text-bauhaus-accent hover:underline"
                      >
                        <Link className="h-3 w-3 mr-1" />
                        Visit website
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {partners.map((partner) => (
                  <Card key={partner.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-48 h-48 bg-gray-100 flex items-center justify-center p-6 shrink-0">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`} 
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <CardContent className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                          <div className="text-sm text-bauhaus-accent mb-1">{partner.category}</div>
                          <h3 className="font-semibold text-bauhaus-dark text-xl mb-2">{partner.name}</h3>
                          <p className="text-gray-600">{partner.description}</p>
                        </div>
                        <a 
                          href={partner.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center text-bauhaus-accent hover:underline"
                        >
                          Visit website
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
        
        <section className="py-16 px-4 bg-bauhaus-light">
          <div className="max-w-7xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-4">
              Join Our Network
            </span>
            <h2 className="text-3xl font-bold text-bauhaus-dark mb-6">Become a Partner</h2>
            <p className="max-w-2xl mx-auto text-gray-700 mb-8">
              We're constantly looking to expand our collaborative network with organizations that share our vision 
              for sustainable, inclusive food systems.
            </p>
            <Button 
              size="lg" 
              className="bg-bauhaus-accent hover:bg-bauhaus-accent/90"
              onClick={() => window.location.href = '/contact'}
            >
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Partners;
