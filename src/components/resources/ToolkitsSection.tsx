
import { useQuery } from '@tanstack/react-query';
import { Download } from 'lucide-react';
import { wpService } from '../../services/wordpress';

// Define interface for toolkit data
interface Toolkit {
  id: number;
  title: string;
  description: string;
  fileSize: string;
  link: string;
}

const ToolkitsSection = () => {
  // Fetch toolkits from WordPress
  const { data: toolkits = [], isLoading: isLoadingToolkits } = useQuery({
    queryKey: ['toolkits'],
    queryFn: wpService.getToolkits
  });

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-4">
            Downloads
          </span>
          <h2 className="text-3xl font-bold text-bauhaus-dark mb-6">
            Toolkits & Guides
          </h2>
          <p className="text-gray-700 max-w-3xl">
            Download practical guides and toolkits for implementing sustainable food environments in your community.
          </p>
        </div>
        
        {isLoadingToolkits ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="border border-gray-200 rounded-lg p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-3 w-3/4" />
                <div className="h-20 bg-gray-200 rounded mb-6" />
                <div className="h-4 bg-gray-200 rounded mb-3 w-1/4" />
                <div className="h-4 bg-gray-200 rounded w-1/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {toolkits.map((toolkit: Toolkit) => (
              <div key={toolkit.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow h-full flex flex-col">
                <h3 className="text-xl font-bold text-bauhaus-dark mb-3">{toolkit.title}</h3>
                <p className="text-gray-700 mb-6 flex-grow">{toolkit.description}</p>
                <div className="mt-auto">
                  <div className="text-sm text-gray-500 mb-3">PDF • {toolkit.fileSize}</div>
                  <a href={toolkit.link} className="inline-flex items-center text-bauhaus-accent hover:text-bauhaus-dark font-medium transition-colors">
                    <Download className="mr-2 w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ToolkitsSection;
