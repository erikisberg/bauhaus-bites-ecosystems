
import { Newspaper } from 'lucide-react';
import ArticleFeed from '../ArticleFeed';

const RecentArticlesSection = () => {
  return (
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
  );
};

export default RecentArticlesSection;
