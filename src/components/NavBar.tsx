
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [{
    name: 'HOME',
    path: '/'
  }, {
    name: 'ABOUT',
    path: '/about'
  }, {
    name: 'CITIES',
    path: '/cities'
  }, {
    name: 'PARTNERS',
    path: '/partners'
  }, {
    name: 'RESOURCES',
    path: '/resources'
  }, {
    name: 'CONTACT',
    path: '/contact'
  }];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bauhaus-dark/95 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-bauhaus-dark">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Logo size="md" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`link-underline px-1 py-2 text-sm font-medium tracking-wider transition-colors relative
                  ${isActive(item.path) 
                    ? 'text-bauhaus-secondary font-bold' 
                    : 'text-white/90 hover:text-white'}`}>
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-bauhaus-secondary rounded-full"></span>
                )}
              </Link>)}
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-bauhaus-highlight focus:outline-none" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-bauhaus-dark/95 backdrop-blur-md">
          {navItems.map(item => <Link key={item.name} to={item.path} className={`block px-3 py-2 rounded-md text-base font-medium relative
                ${isActive(item.path) 
                  ? 'text-bauhaus-secondary font-bold bg-bauhaus-dark/50' 
                  : 'text-white/90 hover:text-white'}`}>
              {item.name}
              {isActive(item.path) && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/2 bg-bauhaus-secondary rounded-r-full"></span>
              )}
            </Link>)}
        </div>
      </div>
    </nav>;
};

export default NavBar;
