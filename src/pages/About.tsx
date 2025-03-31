import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-16">
        <div className="bg-bauhaus-dark text-white py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Bauhaus Bites</h1>
              <p className="text-xl text-white/80 animate-fade-in-delay-1">
                An innovative EU-funded project transforming urban and peri-urban food systems
                into sustainable, inclusive, and vibrant ecosystems.
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-4">
                  Our Mission
                </span>
                <h2 className="text-3xl font-bold text-bauhaus-dark mb-6">
                  Creating Sustainable Food Environments
                </h2>
                <p className="text-gray-700 mb-4">
                  Rooted in the principles of the New European Bauhaus, our mission is to reimagine food environments 
                  that are healthier, greener, and more connected to nature while celebrating cultural diversity and community.
                </p>
                <p className="text-gray-700 mb-4">
                  Over the next three years, we will co-create and test new "Bauhaus Bites Food 
                  Environments" in seven European cities, blending cutting-edge Nature-Based 
                  Solutions (NBS) with sustainable dietary practices.
                </p>
                <p className="text-gray-700">
                  By focusing on local needs, social inclusivity, and the beauty of shared spaces, 
                  we aim to demonstrate how food systems can positively shape our cities and communities.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-bauhaus-accent/10 rounded-xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Urban garden" 
                  className="relative rounded-lg shadow-lg w-full h-auto z-10"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-bauhaus-light">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-bauhaus-dark">
              Join Our Journey
            </h2>
            <p className="max-w-3xl mx-auto text-gray-700 mb-8">
              Be part of our mission to transform urban food systems across Europe. Together, we can create 
              sustainable, inclusive, and beautiful food environments that benefit communities and our planet.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-bauhaus-accent text-white rounded-md hover:bg-bauhaus-accent/90 transition-colors"
            >
              Get Involved Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Team collaboration" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              
              <div className="order-1 md:order-2">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-4">
                  Our Team
                </span>
                <h2 className="text-3xl font-bold text-bauhaus-dark mb-6">
                  A Collaborative Network
                </h2>
                <p className="text-gray-700 mb-4">
                  Bauhaus Bites brings together a diverse network of researchers, urban planners, 
                  food systems experts, community organizers, and sustainability advocates from 
                  across Europe.
                </p>
                <p className="text-gray-700 mb-6">
                  Our interdisciplinary approach enables us to tackle the complex challenges of 
                  urban food systems through multiple perspectives, fostering innovation and 
                  practical solutions.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-bauhaus-accent hover:text-bauhaus-dark font-medium transition-colors"
                >
                  Get in touch with our team
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
