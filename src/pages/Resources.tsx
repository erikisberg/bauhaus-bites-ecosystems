
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ResourcesHero from '../components/resources/ResourcesHero';
import PublicationsSection from '../components/resources/PublicationsSection';
import MediaResourcesSection from '../components/resources/MediaResourcesSection';
import ToolkitsSection from '../components/resources/ToolkitsSection';
import RecentArticlesSection from '../components/resources/RecentArticlesSection';

const Resources = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-16">
        <ResourcesHero />
        <PublicationsSection />
        <MediaResourcesSection />
        <ToolkitsSection />
        <RecentArticlesSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Resources;
