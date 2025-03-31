
import Hero from '../Hero';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const HeroSection = ({ title, subtitle, imageUrl }: HeroSectionProps) => {
  return (
    <Hero 
      title={title} 
      subtitle={subtitle} 
      imageUrl={imageUrl}
    />
  );
};

export default HeroSection;
