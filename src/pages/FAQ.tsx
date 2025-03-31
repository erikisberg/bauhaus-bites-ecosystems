
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqCategories = [
    {
      title: 'About the Project',
      items: [
        {
          question: 'What is Bauhaus Bites?',
          answer: 'Bauhaus Bites is an innovative EU-funded project transforming urban and peri-urban food systems into sustainable, inclusive, and vibrant ecosystems. Over a three-year period, we are co-creating and testing new "Bauhaus Bites Food Environments" in seven European cities, blending cutting-edge Nature-Based Solutions (NBS) with sustainable dietary practices.'
        },
        {
          question: 'How is Bauhaus Bites related to the New European Bauhaus?',
          answer: 'Bauhaus Bites is rooted in the principles of the New European Bauhaus, which combines sustainability, aesthetics, and inclusivity. We apply these principles to food environments, reimagining spaces that are healthier, greener, and more connected to nature while celebrating cultural diversity and community.'
        },
        {
          question: 'Which cities are participating in the project?',
          answer: 'The project is being implemented in seven European cities: Amsterdam, Barcelona, Copenhagen, Milan, Prague, Vienna, and Warsaw. Each city has its own unique food culture and challenges, allowing us to test our approaches in diverse urban contexts.'
        },
        {
          question: 'What are the main goals of Bauhaus Bites?',
          answer: 'Our main goals include: (1) Developing innovative food environments that integrate Nature-Based Solutions, (2) Creating inclusive community spaces around food, (3) Promoting sustainable dietary practices, (4) Establishing replicable models that can be adapted to different urban contexts across Europe, and (5) Contributing to EU climate and biodiversity goals.'
        }
      ]
    },
    {
      title: 'Participation Opportunities',
      items: [
        {
          question: 'How can I get involved in Bauhaus Bites?',
          answer: 'There are multiple ways to get involved: (1) Participate in local workshops and events in our seven cities, (2) Collaborate as a stakeholder if you represent a food-related organization, (3) Apply to become a partner organization, or (4) Follow our research and implementation learnings. Visit our Contact page to express your interest.'
        },
        {
          question: 'Can I participate if I don\'t live in one of the seven project cities?',
          answer: 'Yes! While our direct implementations are in the seven project cities, we welcome knowledge sharing, partnerships, and collaborations from across Europe and beyond. Our learnings and models are designed to be adaptable to various contexts.'
        },
        {
          question: 'I\'m a researcher interested in sustainable food systems. How can I collaborate?',
          answer: 'We welcome academic collaborations and are open to sharing our methodologies and findings. Please contact our research coordinator via the Contact page, specifying your research interests and potential collaboration ideas.'
        },
        {
          question: 'Are there opportunities for students to get involved?',
          answer: 'Yes, we offer internships, thesis project opportunities, and student workshops throughout the project duration. These opportunities are posted on our Resources page and social media channels as they become available.'
        }
      ]
    },
    {
      title: 'Funding and Administration',
      items: [
        {
          question: 'How is Bauhaus Bites funded?',
          answer: 'Bauhaus Bites is funded by the European Union under Grant Agreement nr 101182352, as part of the New European Bauhaus initiative. The project operates with a consortium of partners across Europe.'
        },
        {
          question: 'What is the timeframe for the Bauhaus Bites project?',
          answer: 'The project runs for three years, with research, implementation, testing, and knowledge dissemination phases. Our goal is to create sustainable models that continue beyond the initial funding period.'
        },
        {
          question: 'Are there funding opportunities for local initiatives that align with Bauhaus Bites?',
          answer: 'While we don\'t directly provide grants to external projects, we do collaborate with aligned initiatives and can provide guidance on potential EU funding sources for sustainable food system projects. Contact us for more information.'
        },
        {
          question: 'Who administers the Bauhaus Bites project?',
          answer: 'The project is administered by a consortium of leading European universities, research institutions, municipalities, and NGOs specialized in sustainable food systems, urban planning, and community engagement.'
        }
      ]
    },
    {
      title: 'Impact and Outcomes',
      items: [
        {
          question: 'How will the success of Bauhaus Bites be measured?',
          answer: 'We measure success through multiple indicators: (1) Environmental impact reductions, (2) Community engagement and inclusivity metrics, (3) Food system transformation indicators, (4) Policy adoption of our models and recommendations, and (5) Knowledge dissemination and replication in other contexts.'
        },
        {
          question: 'Will the research and findings from Bauhaus Bites be publicly available?',
          answer: 'Yes, we are committed to open knowledge sharing. Research papers, case studies, methodologies, and implementation guides will be made available through our Resources page and through academic publications.'
        },
        {
          question: 'How will Bauhaus Bites continue after the EU funding period ends?',
          answer: 'We are developing sustainability plans for each implementation site, including community ownership models, local government integration, and ongoing funding structures to ensure the long-term impact of our work.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <div className="pt-16">
        <div className="bg-bauhaus-dark text-white py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-white/80 hover:text-white">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-white font-medium">FAQ</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Frequently Asked Questions</h1>
              <p className="text-xl text-white/80 animate-fade-in-delay-1">
                Find answers to common questions about the Bauhaus Bites project, participation opportunities, and more.
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-bauhaus-accent/10 text-bauhaus-accent rounded-full mb-4">
                Knowledge Base
              </span>
              <h2 className="text-3xl font-bold text-bauhaus-dark mb-6">
                Everything You Need to Know
              </h2>
              <p className="text-gray-600">
                Browse through our comprehensive FAQ section or use the category links below to jump to specific topics.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {faqCategories.map((category, index) => (
                <a
                  key={index}
                  href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 bg-bauhaus-lighter rounded-full text-bauhaus-dark hover:bg-bauhaus-light transition-colors"
                >
                  {category.title}
                </a>
              ))}
            </div>
            
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex} 
                  id={category.title.toLowerCase().replace(/\s+/g, '-')}
                  className="scroll-mt-24"
                >
                  <h3 className="text-2xl font-bold text-bauhaus-dark mb-6 border-b pb-3">
                    {category.title}
                  </h3>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem 
                        key={itemIndex} 
                        value={`${categoryIndex}-${itemIndex}`}
                        className="border-b border-gray-200"
                      >
                        <AccordionTrigger className="text-left font-medium text-bauhaus-dark hover:text-bauhaus-accent hover:no-underline py-5">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 pb-6">
                          <p>{item.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 px-4 bg-bauhaus-lighter">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-bauhaus-dark">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-700 mb-8">
              If you have more specific questions about Bauhaus Bites or would like to discuss potential collaborations, 
              we're here to help. Reach out to our team directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button 
                  className="bg-bauhaus-accent hover:bg-bauhaus-accent/90 text-white"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/resources">
                <Button 
                  variant="outline"
                  className="border-bauhaus-medium text-bauhaus-dark hover:bg-bauhaus-medium/10"
                >
                  Explore Resources
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
