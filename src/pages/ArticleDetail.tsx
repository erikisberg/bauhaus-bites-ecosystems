
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, FileText } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { wpService } from '../services/wordpress';
import { useQuery } from '@tanstack/react-query';

interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  image?: string;
}

const ArticleDetail = () => {
  const { articleId } = useParams<{ articleId: string }>();
  
  const { data: article, isLoading, error } = useQuery({
    queryKey: ['article', articleId],
    queryFn: () => wpService.getPostBySlug(articleId || ''),
    enabled: !!articleId,
  });

  // Calculate estimated reading time
  const readTime = article?.content ? 
    `${Math.max(1, Math.ceil(article.content.replace(/<[^>]*>/g, '').split(/\s+/).length / 200))} min read` : 
    '5 min read';
  
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <NavBar />
        <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-6 w-2/3"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (error || !article) {
    return (
      <div className="min-h-screen">
        <NavBar />
        <div className="pt-24 pb-16 px-4 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-bauhaus-dark mb-4">Article Not Found</h1>
          <p className="mb-8 text-gray-600">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/resources" className="inline-flex items-center text-bauhaus-accent hover:text-bauhaus-dark transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <NavBar />
      
      {/* Article Hero */}
      <div className="w-full h-80 md:h-96 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-bauhaus-dark/70 to-bauhaus-dark/30 z-10"></div>
        <img 
          src={article.image || 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'} 
          alt={article.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-5xl mx-auto h-full flex flex-col justify-end px-4 sm:px-6 pb-12">
          <div className="flex items-center text-white/80 text-sm mb-3 space-x-6">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {article.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{article.title}</h1>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              to="/resources" 
              className="inline-flex items-center text-bauhaus-accent hover:text-bauhaus-dark transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;
