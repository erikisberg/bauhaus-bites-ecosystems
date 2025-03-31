
import { useRef } from 'react';
import FeaturedProject from '../FeaturedProject';

const MissionSection = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="section-padding bg-bauhaus-light" ref={sectionsRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-4">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-bauhaus-dark mb-6">
            Reimagining Food Environments
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Rooted in the principles of the New European Bauhaus, our mission is to reimagine food environments 
            that are healthier, greener, and more connected to nature while celebrating cultural diversity and community.
          </p>
        </div>
        
        <FeaturedProject
          image="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          title="Sustainable Food Ecosystems"
          description="Over the next three years, we will co-create and test new 'Bauhaus Bites Food Environments' in seven European cities, blending cutting-edge Nature-Based Solutions (NBS) with sustainable dietary practices. By focusing on local needs, social inclusivity, and the beauty of shared spaces, we aim to demonstrate how food systems can positively shape our cities and communities."
        />
        
        <FeaturedProject
          image="https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          title="Nature-Based Solutions"
          description="By integrating Nature-Based Solutions into urban food systems, we're creating resilient environments that benefit both people and the planet. Our approach combines traditional knowledge with innovative technologies to address food security challenges while enhancing biodiversity and improving urban livability."
          reverse
        />
      </div>
    </section>
  );
};

export default MissionSection;
