
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ArticleFeed from '../components/ArticleFeed';
import { ArrowRight, FileText, Video, Download, Link as LinkIcon, Newspaper } from 'lucide-react';
import { wpService } from '../services/wordpress';

// Define interfaces for our resource types
interface Publication {
  id: number;
  title: string;
  authors: string;
  date: string;
  description: string;
  link: string;
}

interface MediaResource {
  id: number;
  title: string;
  type: string;
  duration: string;
  thumbnail: string;
  link: string;
}

interface Toolkit {
  id: number;
  title: string;
  description: string;
  fileSize: string;
  link: string;
}

const Resources = () => {
  // Fetch publications from WordPress
  const { data: publications = [], isLoading: isLoadingPublications } = useQuery({
    queryKey: ['publications'],
    queryFn: wpService.getPublications
  });

  // Fetch media resources from WordPress
  const { data: mediaResources = [], isLoading: isLoadingMedia } = useQuery({
    queryKey: ['mediaResources'],
    queryFn: wpService.getMediaResources
  });

  // Fetch toolkits from WordPress
  const { data: toolkits = [], isLoading: isLoadingToolkits } = useQuery({
    queryKey: ['toolkits'],
    queryFn: wpService.getToolkits
  });

  return <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-16">
        <div className="bg-bauhaus-dark text-white py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Resources</h1>
              <p className="text-xl text-white/80 animate-fade-in-delay-1">
                Access publications, tools, and media resources from the Bauhaus Bites project.
              </p>
            </div>
          </div>
        </div>
        
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
        
        {/* Compact Article Feed just above the footer */}
        <section className="py-8 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-2">
                  <Newspaper className="w-3 h-3 inline mr-1" />
                  Latest News
                </span>
                <h2 className="text-2xl font-bold text-bauhaus-dark">Recent Articles</h2>
              </div>
            </div>
            
            <div className="mx-auto">
              <ArticleFeed />
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>;
};

export default Resources;
