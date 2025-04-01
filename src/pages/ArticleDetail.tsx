
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, FileText } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// Sample article data - in a real app, this would come from an API or database
const articlesData = [
  {
    id: "urban-farming-barcelona",
    title: "New Urban Farming Initiative Launches in Barcelona",
    description: "The Barcelona city council has approved a groundbreaking urban farming initiative that will transform unused spaces into community gardens.",
    content: `
      <p>The Barcelona city council has unanimously approved a groundbreaking urban farming initiative that aims to transform unused urban spaces into thriving community gardens. This innovative program, set to launch next month, will repurpose vacant lots, rooftops, and other underutilized urban areas into productive green spaces where residents can grow fresh produce.</p>
      
      <p>The initiative is part of Barcelona's broader commitment to sustainable urban development and food security. By converting empty spaces into urban farms, the city hopes to address multiple challenges: increasing access to fresh, locally grown food; reducing the urban heat island effect; creating community gathering spaces; and providing educational opportunities for citizens of all ages.</p>
      
      <p>"This project represents a significant step forward in our vision for a more sustainable and resilient Barcelona," stated Mayor Ana Garcia at the press conference announcing the initiative. "Urban farming not only produces food but also builds community connections, improves air quality, and enhances biodiversity in our city."</p>
      
      <h3>Community Engagement at the Core</h3>
      
      <p>A key aspect of the initiative is its focus on community involvement. Local residents will have the opportunity to lease small plots in the community gardens for a nominal fee, and educational programs will be offered to teach gardening skills to beginners. Schools will also be encouraged to participate, with dedicated plots allocated for educational purposes.</p>
      
      <p>The project will be implemented in phases, with the first five locations already identified in the Poblenou, Sants, Horta, Nou Barris, and Sant Andreu districts. These pilot sites will be developed over the next six months, with plans to expand to at least 20 additional locations across the city within the next two years.</p>
      
      <h3>Sustainable Urban Development</h3>
      
      <p>The urban farming initiative aligns with Barcelona's Climate Action Plan and its commitment to the European Green Deal. By increasing green spaces in the city, the project will contribute to carbon sequestration, improved air quality, and reduced urban temperatures. The gardens will also incorporate rainwater harvesting systems and solar-powered irrigation, exemplifying sustainable resource management.</p>
      
      <p>Local environmental groups have praised the initiative. "This is exactly the kind of forward-thinking urban planning we need," said Elena Martinez, director of Green Barcelona, a local environmental advocacy organization. "It transforms urban spaces into multifunctional areas that benefit both people and the planet."</p>
      
      <h3>Economic and Social Benefits</h3>
      
      <p>Beyond the environmental advantages, the urban farming initiative is expected to yield economic and social benefits. A portion of the produce grown will be donated to local food banks, addressing food insecurity in vulnerable communities. Additionally, the city council plans to establish a farmers' market where urban gardeners can sell their surplus produce, potentially creating small-scale entrepreneurial opportunities.</p>
      
      <p>The initiative will also create jobs, with positions for garden coordinators, educators, and maintenance staff. Priority will be given to unemployed residents from the neighborhoods where the gardens are located.</p>
      
      <p>As Barcelona embarks on this transformative journey toward urban agricultural integration, it joins a growing network of cities worldwide that are recognizing the multiple benefits of bringing food production back into urban spaces. The initiative represents a holistic approach to urban sustainability that addresses environmental, social, and economic dimensions simultaneously.</p>
    `,
    date: "June 15, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1516550893885-7b7791882062?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80",
  },
  {
    id: "nature-based-solutions-study",
    title: "Study Reveals Benefits of Nature-Based Solutions in Urban Food Systems",
    description: "A comprehensive study conducted across European cities demonstrates how nature-based solutions can significantly improve urban food security and sustainability.",
    content: `
      <p>A groundbreaking study published this week in the Journal of Urban Sustainability presents compelling evidence that nature-based solutions (NBS) can significantly enhance urban food systems, addressing challenges of food security and sustainability in European cities.</p>
      
      <p>The research, conducted over a three-year period across fifteen European cities, evaluated various NBS interventions in urban food production and their impacts on environmental quality, social cohesion, and economic viability. The results offer a comprehensive assessment of how cities can leverage natural processes to create more resilient and productive urban food systems.</p>
      
      <h3>Multifunctional Benefits Confirmed</h3>
      
      <p>According to Dr. Sofia Petrova, the study's lead author from the University of Copenhagen, "The data conclusively demonstrates that well-designed nature-based solutions deliver multiple co-benefits beyond just food production. These include improved air quality, reduced urban heat island effects, enhanced biodiversity, and strengthened community bonds."</p>
      
      <p>The study evaluated several types of NBS implementations, including rooftop gardens, vertical farming installations, community food forests, and regenerative urban agriculture plots. All interventions were assessed using a common framework that measured environmental, social, and economic outcomes.</p>
      
      <p>One of the most striking findings was the substantial increase in urban biodiversity associated with these food-producing spaces. Sites implementing NBS approaches showed an average increase of 37% in pollinator species and 29% in overall biodiversity compared to conventional urban spaces.</p>
      
      <h3>Climate Resilience and Adaptation</h3>
      
      <p>The study also highlighted the role of nature-based food systems in climate change adaptation and mitigation. Urban food forests and gardens demonstrated significant cooling effects, with average temperature reductions of 2-3°C during summer heat waves compared to surrounding urban areas.</p>
      
      <p>Additionally, the studied sites showed improved stormwater management capabilities, with NBS food production areas absorbing up to 60% more rainfall than conventional urban surfaces, thereby reducing flood risks and decreasing pressure on urban drainage systems.</p>
      
      <h3>Community and Social Impacts</h3>
      
      <p>"Perhaps the most surprising aspect of our findings was the magnitude of social benefits," noted Dr. Petrova. "Neighborhoods with active NBS food production sites reported significantly higher levels of social cohesion, community satisfaction, and even reduced crime rates in some cases."</p>
      
      <p>The study found that community-managed urban agriculture sites fostered intergenerational connections and provided valuable educational opportunities. Schools involved in NBS food production projects reported improved student engagement in science and environmental education, as well as enhanced nutritional awareness.</p>
      
      <h3>Economic Viability and Policy Implications</h3>
      
      <p>From an economic perspective, the research demonstrated that urban NBS food systems can be financially viable when properly supported through enabling policies. Several of the studied sites developed successful business models combining food production with educational programs, restaurant partnerships, and subscription services.</p>
      
      <p>The study concludes with a series of policy recommendations for European cities looking to integrate NBS approaches into their urban food strategies. These include developing dedicated funding mechanisms, creating supportive regulatory frameworks, providing technical assistance to community groups, and establishing governance structures that encourage cross-sector collaboration.</p>
      
      <p>As cities across Europe and beyond grapple with the dual challenges of climate change and food security, this comprehensive study provides valuable evidence that nature-based solutions offer a promising pathway toward more sustainable, resilient, and equitable urban food systems.</p>
    `,
    date: "May 28, 2023",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "amsterdam-vertical-farming",
    title: "Amsterdam Implements Vertical Farming Technology in Public Buildings",
    description: "Amsterdam is leading the way with innovative vertical farming installations in public buildings, bringing food production directly into urban centers.",
    content: `
      <p>The city of Amsterdam has unveiled a pioneering initiative to integrate vertical farming technology into public buildings, marking a significant step forward in urban agriculture. The project, officially launched last week, will see advanced hydroponic growing systems installed in schools, libraries, community centers, and municipal office buildings throughout the city.</p>
      
      <p>This initiative positions Amsterdam at the forefront of the urban farming movement in Europe, directly addressing challenges of food security, sustainability, and education through technological innovation.</p>
      
      <h3>Bringing Food Production into Everyday Spaces</h3>
      
      <p>The vertical farming installations vary in size and complexity depending on their location. The largest system, housed in the city's main library, features a 7-meter-tall growing wall in the central atrium, capable of producing over 200 kilograms of leafy greens and herbs monthly. Smaller units in schools and community centers are designed to be educational tools as well as practical food production systems.</p>
      
      <p>"What makes this initiative unique is that we're bringing food production into the everyday spaces where people work, learn, and gather," explained Joost van der Meer, Amsterdam's Commissioner for Sustainability. "It creates a visible connection between citizens and their food system while utilizing indoor spaces that were previously unproductive."</p>
      
      <p>The vertical farms use advanced hydroponic technology that requires no soil and uses 95% less water than conventional farming methods. LED lighting specifically calibrated for plant growth enables year-round production regardless of external weather conditions or seasons.</p>
      
      <h3>Educational Integration and Community Benefits</h3>
      
      <p>In schools, the vertical farming systems have been integrated into science and nutrition curricula, providing hands-on learning opportunities for students. Children participate in planting, monitoring, and harvesting crops, gaining practical knowledge about biology, technology, and food systems.</p>
      
      <p>"The response from students has been overwhelmingly positive," said Aneke Visser, principal of De Regenboog School, one of the first educational institutions to receive a vertical farming installation. "We've seen increased engagement in science classes and a genuine excitement about healthy eating. When children grow the food themselves, they're much more willing to eat vegetables."</p>
      
      <p>In community centers, the harvested produce is used in community kitchens and distributed to local residents, with priority given to low-income households and food assistance programs. This aspect of the initiative addresses food access inequities while building community connections.</p>
      
      <h3>Technical Innovation and Partnerships</h3>
      
      <p>The technology behind the vertical farming systems was developed through a partnership between the Municipality of Amsterdam, Amsterdam University of Applied Sciences, and GrowWise, a Dutch agricultural technology company. Each installation is equipped with sensors that collect data on plant growth, water usage, and environmental conditions, contributing to ongoing research on optimal indoor growing techniques.</p>
      
      <p>The systems are also designed to be highly efficient from an energy perspective. "We've integrated the vertical farms with the buildings' existing climate control systems wherever possible," noted Lars Brouwer, chief engineer at GrowWise. "In some cases, the heat generated by the LED lights is captured and redirected to help warm other parts of the building during winter months."</p>
      
      <h3>Expansion Plans and Future Vision</h3>
      
      <p>Following the successful installation of vertical farms in fifteen public buildings during this initial phase, Amsterdam plans to expand the program to at least fifty additional locations over the next three years. The city is also developing guidelines to encourage private businesses, apartment complexes, and hospitals to implement similar systems.</p>
      
      <p>"Our vision is to create a distributed network of food production throughout the urban landscape," said Commissioner van der Meer. "This decentralized approach builds resilience into our food system while making the most of our limited urban space."</p>
      
      <p>As cities worldwide seek solutions to create more sustainable urban environments, Amsterdam's integration of vertical farming into public infrastructure offers an innovative model that addresses multiple challenges simultaneously: food production, education, community building, and efficient use of urban space.</p>
    `,
    date: "April 12, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1546636889-ba9fdd63583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80",
  }
];

const ArticleDetail = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate fetching data from an API
    setLoading(true);
    
    // Find the article with the matching ID
    const foundArticle = articlesData.find(a => a.id === articleId);
    
    // Simulate network delay
    setTimeout(() => {
      setArticle(foundArticle || null);
      setLoading(false);
    }, 500);
  }, [articleId]);
  
  if (loading) {
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
  
  if (!article) {
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
          src={article.image} 
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
              {article.readTime}
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
