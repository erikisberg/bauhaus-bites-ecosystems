
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const JoinSection = () => {
  return (
    <section className="section-padding bg-bauhaus-accent text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Initiative
          </h2>
          <p className="max-w-3xl mx-auto leading-relaxed text-white/90">
            Want to hear the latest from our project? Follow us on social media or get in touch directly.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="px-6 py-3 bg-white text-bauhaus-accent rounded-md font-medium hover:bg-white/90 transition-colors inline-flex items-center justify-center"
          >
            Contact Us
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <a
            href="#"
            className="px-6 py-3 bg-transparent border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center"
          >
            Follow on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
