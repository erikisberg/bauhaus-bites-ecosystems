
import { useQuery } from '@tanstack/react-query';
import { ArrowRight, FileText } from 'lucide-react';
import { wpService } from '../../services/wordpress';

// Define interface for publication data
interface Publication {
  id: number;
  title: string;
  authors: string;
  date: string;
  description: string;
  link: string;
}

const PublicationsSection = () => {
  // Fetch publications from WordPress
  const { data: publications = [], isLoading: isLoadingPublications } = useQuery({
    queryKey: ['publications'],
    queryFn: wpService.getPublications
  });

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-4">
            Publications
          </span>
          <h2 className="text-3xl font-bold text-bauhaus-dark mb-4">
            Research Papers & Reports
          </h2>
          <p className="text-gray-700 max-w-3xl">
            Explore our research publications on urban food systems, Nature-Based Solutions, 
            and sustainable food environments.
          </p>
        </div>
        
        {isLoadingPublications ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map(i => (
              <div key={i} className="border border-gray-200 rounded-lg p-4 animate-pulse">
                <div className="flex items-start">
                  <div className="mr-3 mt-1">
                    <div className="bg-gray-200 h-5 w-5 rounded-full" />
                  </div>
                  <div className="w-full">
                    <div className="h-5 bg-gray-200 rounded mb-2 w-3/4" />
                    <div className="h-4 bg-gray-200 rounded mb-2 w-1/2" />
                    <div className="h-16 bg-gray-200 rounded mb-3" />
                    <div className="h-4 bg-gray-200 rounded w-1/4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {publications.map((pub: Publication) => (
              <div key={pub.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 shrink-0">
                    <FileText className="text-bauhaus-accent h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-bauhaus-dark mb-1">{pub.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{pub.authors} • {pub.date}</p>
                    <p className="text-gray-700 text-sm mb-3 line-clamp-2">{pub.description}</p>
                    <a href={pub.link} className="inline-flex items-center text-bauhaus-accent hover:text-bauhaus-dark font-medium transition-colors text-sm">
                      Read publication
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicationsSection;
