
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface NewsArticleProps {
  title: string;
  description: string;
  date: string;
  image?: string;
  link?: string;
}

const NewsArticle = ({ title, description, date, image, link }: NewsArticleProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <div className="text-sm text-muted-foreground mb-2">{date}</div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700 line-clamp-3">{description}</p>
      </CardContent>
      {link && (
        <CardFooter className="pt-0">
          <a 
            href={link} 
            className="text-bauhaus-accent hover:text-bauhaus-dark flex items-center gap-1 transition-colors"
          >
            Read more <ArrowRight className="h-4 w-4" />
          </a>
        </CardFooter>
      )}
    </Card>
  );
};

export default NewsArticle;
