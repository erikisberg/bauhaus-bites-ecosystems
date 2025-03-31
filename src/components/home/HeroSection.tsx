
import Hero from '../Hero';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const HeroSection = ({ title, subtitle, imageUrl }: HeroSectionProps) => {
  // For debugging purposes
  console.log("HeroSection received imageUrl:", imageUrl);
  
  return (
    <Hero 
      title={title} 
      subtitle={subtitle} 
      imageUrl={imageUrl}
    />
  );
};

export default HeroSection;
