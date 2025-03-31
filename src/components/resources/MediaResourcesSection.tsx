
import { useQuery } from '@tanstack/react-query';
import { Video } from 'lucide-react';
import { wpService } from '../../services/wordpress';

// Define interface for media resource data
interface MediaResource {
  id: number;
  title: string;
  type: string;
  duration: string;
  thumbnail: string;
  link: string;
}

const MediaResourcesSection = () => {
  // Fetch media resources from WordPress
  const { data: mediaResources = [], isLoading: isLoadingMedia } = useQuery({
    queryKey: ['mediaResources'],
    queryFn: wpService.getMediaResources
  });

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-4">
            Media
          </span>
          <h2 className="text-3xl font-bold text-bauhaus-dark mb-6">
            Videos & Presentations
          </h2>
          <p className="text-gray-700 max-w-3xl">
            Watch videos and presentations about our projects and initiatives across Europe.
          </p>
        </div>
        
        {isLoadingMedia ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="rounded-lg shadow-md animate-pulse">
                <div className="aspect-video bg-gray-200 rounded-t-lg" />
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded mb-2 w-1/2" />
                  <div className="h-6 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaResources.map((media: MediaResource) => (
              <div key={media.id} className="group overflow-hidden rounded-lg shadow-md">
                <div className="relative aspect-video">
                  <img src={media.thumbnail} alt={media.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white/80 text-sm mb-2">
                      <Video className="w-4 h-4 mr-2" />
                      <span>{media.type} • {media.duration}</span>
                    </div>
                    <h3 className="text-white text-lg font-bold">{media.title}</h3>
                  </div>
                  <a href={media.link} className="absolute inset-0 z-10" aria-label={`Watch ${media.title}`} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaResourcesSection;
