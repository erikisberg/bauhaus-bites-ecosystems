
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface NewsArticleProps {
  title: string;
  description: string;
  date: string;
  image?: string;
  link?: string;
  id?: string;
}

const NewsArticle = ({ title, description, date, image, link, id }: NewsArticleProps) => {
  const articleUrl = id ? `/resources/article/${id}` : link;
  
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
      {image && (
        <Link to={articleUrl || '#'} className="block aspect-video w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      )}
      <CardHeader>
        <div className="text-sm text-muted-foreground mb-2">{date}</div>
        <CardTitle className="line-clamp-2">
          <Link to={articleUrl || '#'} className="hover:text-bauhaus-accent transition-colors">
            {title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700 line-clamp-3">{description}</p>
      </CardContent>
      {articleUrl && (
        <CardFooter className="pt-0">
          <Link 
            to={articleUrl} 
            className="text-bauhaus-accent hover:text-bauhaus-dark flex items-center gap-1 transition-colors"
          >
            Read more <ArrowRight className="h-4 w-4" />
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default NewsArticle;
