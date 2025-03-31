
import { useState } from 'react';
import NewsArticle from './NewsArticle';
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from './ui/pagination';

interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
}

const ArticleFeed = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Sample articles data - in a real app, this would likely come from an API
  const articles: Article[] = [
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
    },
    {
      id: "paris-food-waste",
      title: "Paris Launches Innovative Food Waste Reduction Program",
      description: "The city of Paris has initiated a comprehensive program to reduce food waste by 50% within the next five years through community engagement and technology.",
      date: "March 27, 2023",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "berlin-community-garden",
      title: "Berlin Expands Community Garden Network to 100 Locations",
      description: "Berlin's urban development office announces plans to expand its successful community garden program to 100 locations throughout the city by 2025.",
      date: "February 18, 2023",
      image: "https://images.unsplash.com/photo-1561397441-3167f49c3fb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: "milan-edible-landscapes",
      title: "Milan Transforms Urban Landscapes with Edible Plants",
      description: "Milan's innovative approach to urban design now includes edible landscapes, integrating fruit trees and vegetable gardens into public spaces.",
      date: "January 22, 2023",
      image: "https://images.unsplash.com/photo-1602049837703-d088bec8eca4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: "london-food-policy",
      title: "London Adopts New Sustainable Food Policy Framework",
      description: "London has unveiled a comprehensive food policy framework that prioritizes sustainability, equity, and resilience in the city's food system.",
      date: "December 10, 2022",
      image: "https://images.unsplash.com/photo-1556715371-bdb0d523c870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: "copenhagen-food-districts",
      title: "Copenhagen Creates Specialized Food Districts to Promote Local Cuisine",
      description: "Copenhagen's new urban planning initiative establishes specialized food districts to showcase local products and traditional Danish cuisine.",
      date: "November 5, 2022",
      image: "https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }
  ];

  // Calculate pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentArticles.map((article) => (
          <NewsArticle
            key={article.id}
            id={article.id}
            title={article.title}
            description={article.description}
            date={article.date}
            image={article.image}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    className="cursor-pointer"
                  />
                </PaginationItem>
              )}
              
              {pageNumbers.map((page) => {
                // Show first page, current page, last page, and pages directly before and after current
                const shouldShowPage = 
                  page === 1 || 
                  page === totalPages || 
                  (page >= currentPage - 1 && page <= currentPage + 1);
                
                if (shouldShowPage) {
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={page === currentPage}
                        onClick={() => handlePageChange(page)}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                } else if (
                  (page === 2 && currentPage > 3) || 
                  (page === totalPages - 1 && currentPage < totalPages - 2)
                ) {
                  return <PaginationEllipsis key={page} />;
                }
                
                return null;
              })}
              
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => handlePageChange(currentPage + 1)} 
                    className="cursor-pointer"
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default ArticleFeed;
