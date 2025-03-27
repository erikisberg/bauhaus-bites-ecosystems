
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const About = () => {
  const [version, setVersion] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="pt-16">
        <div className="bg-bauhaus-dark text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Bauhaus Bites</h1>
            </div>
          </div>
        </div>
        
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10">
              {/* Left column with logo and image */}
              <div className="md:w-1/3">
                <div className="mb-8">
                  <img 
                    src="/lovable-uploads/b86fdb01-5237-490e-9d40-0dbfcf9542be.png" 
                    alt="Bauhaus Bites Logo" 
                    className="w-40 h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
                    alt="Fresh vegetables and fruits" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Right column with approach content */}
              <div className="md:w-2/3">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-bauhaus-dark mb-2 flex items-center">
                    Our Approach <span className="text-red-500 ml-2 text-base font-normal">(version {version})</span>
                  </h2>
                  
                  {version === 1 && (
                    <>
                      <p className="text-lg mb-6">We merge science, policy, and local action to:</p>
                      
                      <ul className="space-y-6">
                        <li className="flex gap-3">
                          <span className="text-bauhaus-accent font-bold">•</span>
                          <div>
                            <span className="font-bold">Design Inclusive Spaces:</span> Collaborating with residents to transform urban areas into hubs of cultural and culinary innovation.
                          </div>
                        </li>
                        
                        <li className="flex gap-3">
                          <span className="text-bauhaus-accent font-bold">•</span>
                          <div>
                            <span className="font-bold">Implement Nature-Based Solutions:</span> Harnessing green infrastructure to boost biodiversity, climate resilience, and food production.
                          </div>
                        </li>
                        
                        <li className="flex gap-3">
                          <span className="text-bauhaus-accent font-bold">•</span>
                          <div>
                            <span className="font-bold">Foster Community Practices:</span> Building networks of knowledge-sharing to encourage local food traditions, sustainable practices, and healthy living.
                          </div>
                        </li>
                        
                        <li className="flex gap-3">
                          <span className="text-bauhaus-accent font-bold">•</span>
                          <div>
                            <span className="font-bold">Drive Policy Change:</span> Developing science-backed tools and strategies for broader adoption and policy alignment across Europe.
                          </div>
                        </li>
                      </ul>
                    </>
                  )}
                  
                  {version === 2 && (
                    <>
                      <p className="text-lg mb-6">
                        At the heart of our mission, we seamlessly blend science, policy, and local action to create a brighter future. We start by designing inclusive spaces, working hand-in-hand with residents to transform urban areas into vibrant hubs of cultural and culinary innovation. Our efforts don't stop there; we implement nature-based solutions, leveraging green infrastructure to enhance biodiversity, bolster climate resilience, and boost food production.
                      </p>
                      
                      <p className="text-lg mb-6">
                        We also foster community practices, building robust networks of knowledge-sharing that celebrate local food traditions, promote sustainable practices, and encourage healthy living. Finally, we drive policy change by developing science-backed tools and strategies that facilitate broader adoption and policy alignment across Europe.
                      </p>
                    </>
                  )}
                </div>
                
                {/* Version navigation dots */}
                <div className="flex justify-center space-x-4 my-8">
                  {[1, 2].map((v) => (
                    <button
                      key={v}
                      onClick={() => setVersion(v)}
                      className={`w-6 h-6 rounded-full ${v === version ? 'bg-bauhaus-dark' : 'bg-gray-200'}`}
                      aria-label={`View version ${v}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-10 px-4 bg-bauhaus-accent text-white">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
              <img 
                src="/lovable-uploads/762fcc46-54af-43c7-b3fe-ba84541a49f3.png" 
                alt="EU Flag" 
                className="h-16"
              />
              <div className="text-left">
                <h2 className="text-2xl font-bold">
                  Funded by the European Union
                </h2>
              </div>
            </div>
            
            <p className="text-sm text-white/90 max-w-4xl mx-auto">
              Funded by the European Union under the Grant Agreement nr 101182352. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or European Research Executive Agency (REA). Neither the European Union nor the granting authority can be held responsible for them.
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
