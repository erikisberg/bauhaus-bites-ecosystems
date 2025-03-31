
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

const Logo = ({ className, size = 'md', linkProps }: LogoProps) => {
  const sizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  return (
    <Link 
      to="/" 
      className={cn("flex items-center", className)}
      {...linkProps}
    >
      <img 
        src="/lovable-uploads/f4894067-6e81-43ce-8cd8-7809081a1d57.png" 
        alt="Bauhaus Bites Logo" 
        className={cn("transition-all duration-300", sizes[size])}
      />
    </Link>
  );
};

export default Logo;
