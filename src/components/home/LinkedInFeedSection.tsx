
import { useEffect } from 'react';

const LinkedInFeedSection = () => {
  useEffect(() => {
    // Load the Elfsight script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-bauhaus-dark">
            Connect With Us
          </h2>
          <p className="max-w-3xl mx-auto leading-relaxed text-bauhaus-medium/80">
            Follow our latest updates and join the conversation on LinkedIn
          </p>
        </div>
        
        <div className="mx-auto">
          {/* Elfsight LinkedIn Feed Widget */}
          <div 
            className="elfsight-app-741c871a-27ab-4b08-8f61-7bc2177fce35" 
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInFeedSection;
