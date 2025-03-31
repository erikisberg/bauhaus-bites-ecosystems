
import { useEffect, useState } from 'react';
import { Newspaper, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsArticle from '../NewsArticle';
import { wpService } from '../../services/wordpress';
import { useQuery } from '@tanstack/react-query';

const NewsSection = () => {
  const { data: newsArticles = [], isLoading, error } = useQuery({
    queryKey: ['news'],
    queryFn: wpService.getPosts,
  });
  
  // Show only the first 3 articles
  const displayedArticles = newsArticles.slice(0, 3);
  
  if (isLoading) {
    return (
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-4 flex items-center justify-center gap-1 mx-auto w-fit">
              <Newspaper className="w-3 h-3" /> Latest News
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-bauhaus-dark mb-6">
              Loading News...
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Error loading news:', error);
  }
  
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-4 flex items-center justify-center gap-1 mx-auto w-fit">
            <Newspaper className="w-3 h-3" /> Latest News
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-bauhaus-dark mb-6">
            Stay Updated with Bauhaus Bites
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Discover the latest developments, research findings, and success stories from our initiatives across Europe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedArticles.map((article, index) => (
            <NewsArticle
              key={index}
              id={article.id}
              title={article.title}
              description={article.description}
              date={article.date}
              image={article.image}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/resources" className="inline-flex items-center text-bauhaus-accent hover:text-bauhaus-dark font-medium transition-colors">
            View All News
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
