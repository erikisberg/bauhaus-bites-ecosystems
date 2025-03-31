
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-16">
        <div className="bg-bauhaus-dark text-white py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
              <p className="text-xl text-white/80 animate-fade-in-delay-1">
                Have questions about Bauhaus Bites? Interested in collaboration? 
                Get in touch with our team.
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-4">
                Get in Touch
              </span>
              <h2 className="text-3xl font-bold text-bauhaus-dark mb-6">
                We'd Love to Hear From You
              </h2>
              <p className="text-gray-700 mb-8">
                Whether you're interested in collaborating with us, learning more about our initiatives, 
                or have questions about sustainable food systems, our team is here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-bauhaus-accent/10 text-bauhaus-accent rounded-full">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-bauhaus-dark mb-1">Main Office</h3>
                    <p className="text-gray-700">
                      Bauhaus Bites Coordination<br />
                      Sustainable City Street 123<br />
                      1000 Brussels, Belgium
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-bauhaus-accent/10 text-bauhaus-accent rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-bauhaus-dark mb-1">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:info@bauhaus-bites.eu" className="hover:text-bauhaus-accent transition-colors">
                        info@bauhaus-bites.eu
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-bauhaus-accent/10 text-bauhaus-accent rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-bauhaus-dark mb-1">Phone</h3>
                    <p className="text-gray-700">
                      <a href="tel:+32-2-123-4567" className="hover:text-bauhaus-accent transition-colors">
                        +32 2 123 4567
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-bauhaus-light">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-4">
                Our Team
              </span>
              <h2 className="text-3xl font-bold text-bauhaus-dark mb-6">
                City Coordinators
              </h2>
              <p className="max-w-3xl mx-auto text-gray-700">
                Get in touch with our local coordinators in each of the seven project cities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {['Amsterdam', 'Barcelona', 'Copenhagen', 'Milan', 'Prague', 'Vienna', 'Warsaw'].map((city) => (
                <div key={city} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-bauhaus-dark mb-2">{city}</h3>
                  <p className="text-gray-700 mb-4">
                    Local Coordinator<br />
                    {city} Food Innovation Hub
                  </p>
                  <a 
                    href={`mailto:${city.toLowerCase()}@bauhaus-bites.eu`} 
                    className="text-bauhaus-accent hover:text-bauhaus-dark transition-colors"
                  >
                    {city.toLowerCase()}@bauhaus-bites.eu
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-bauhaus-accent text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Join Our Network
            </h2>
            <p className="max-w-2xl mx-auto mb-8">
              Interested in becoming part of the Bauhaus Bites network? We welcome partnerships with organizations, 
              researchers, and communities working on sustainable food systems.
            </p>
            <a 
              href="#"
              className="px-6 py-3 bg-white text-bauhaus-accent rounded-md font-medium hover:bg-white/90 transition-colors inline-flex items-center"
            >
              Partnership Opportunities
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
