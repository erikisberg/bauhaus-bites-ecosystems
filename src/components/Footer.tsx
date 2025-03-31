
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return <footer className="text-white bg-[#4b6871]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-gray-300 mt-3">
              Transforming urban and peri-urban food systems into sustainable, inclusive, and vibrant ecosystems.
            </p>
            <div className="pt-2">
              <img src="/lovable-uploads/24974377-6f77-438d-8808-8fa46d4d9927.png" alt="EU Flag" className="h-12" />
              <p className="text-xs text-gray-400 mt-2">
                Funded by the European Union under the Grant Agreement nr 101182352.
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/cities" className="text-gray-300 hover:text-white transition-colors">Cities</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Connect</h4>
            <p className="text-sm text-gray-300 mb-4">
              Follow us on social media for the latest updates on our project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-bauhaus-highlight transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-white hover:text-bauhaus-highlight transition-colors">
                Twitter
              </a>
              <a href="#" className="text-white hover:text-bauhaus-highlight transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Bauhaus Bites. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or European Research Executive Agency (REA). Neither the European Union nor the granting authority can be held responsible for them.
          </p>
        </div>
      </div>
    </footer>;
};

export default Footer;
