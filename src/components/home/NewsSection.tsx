
import { Newspaper, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsArticle from '../NewsArticle';

const NewsSection = () => {
  // Sample news articles data
  const newsArticles = [
    {
      id: "urban-farming-barcelona",
      title: "New Urban Farming Initiative Launches in Barcelona",
      description: "The Barcelona city council has approved a groundbreaking urban farming initiative that will transform unused spaces into community gardens.",
      date: "June 15, 2023",
      image: "https://images.unsplash.com/photo-1516550893885-7b7791882062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
    },
    {
      id: "nature-based-solutions-study",
      title: "Study Reveals Benefits of Nature-Based Solutions in Urban Food Systems",
      description: "A comprehensive study conducted across European cities demonstrates how nature-based solutions can significantly improve urban food security and sustainability.",
      date: "May 28, 2023",
      image: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: "amsterdam-vertical-farming",
      title: "Amsterdam Implements Vertical Farming Technology in Public Buildings",
      description: "Amsterdam is leading the way with innovative vertical farming installations in public buildings, bringing food production directly into urban centers.",
      date: "April 12, 2023",
      image: "https://images.unsplash.com/photo-1546636889-ba9fdd63583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80",
    }
  ];
  
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
          {newsArticles.map((article, index) => (
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
