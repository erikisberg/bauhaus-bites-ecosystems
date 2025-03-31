
import WPAPI from 'wpapi';

// Initialize the WordPress API
// Note: In a real environment, this would be an environment variable
const apiUrl = 'https://bauhaus-bites-wp.example.com/wp-json';

// Create WordPress API instance
const wp = new WPAPI({
  endpoint: apiUrl,
});

// Helper to format WordPress post data into our app's content model
const formatPost = (post: any) => {
  return {
    id: post.slug,
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""), // Strip HTML
    content: post.content.rendered,
    date: new Date(post.date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || undefined,
  };
};

// Format for pages with potential custom fields like slides
const formatPage = (page: any) => {
  // Extract slides from ACF if available, or provide default
  const slides = page.acf?.slides || [];
  
  return {
    id: page.slug,
    title: page.title.rendered,
    content: page.content.rendered,
    // Include slides array for home page or other pages that might use it
    slides: slides.length > 0 ? slides : [
      {
        title: page.title.rendered,
        subtitle: page.excerpt?.rendered ? page.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "") : "",
        image: page._embedded?.['wp:featuredmedia']?.[0]?.source_url || undefined
      }
    ]
  };
};

// Format city data from WordPress
const formatCity = (city: any) => {
  return {
    id: city.id,
    name: city.title.rendered,
    image: city._embedded?.['wp:featuredmedia']?.[0]?.source_url || undefined,
    shortDescription: city.excerpt?.rendered 
      ? city.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "") 
      : "",
    description: city.content.rendered,
    category: city.acf?.category || "",
    features: city.acf?.features || [],
    gallery: city.acf?.gallery?.map((item: any) => item.url) || []
  };
};

// Format publication data from WordPress
const formatPublication = (pub: any) => {
  return {
    id: pub.id,
    title: pub.title.rendered,
    authors: pub.acf?.authors || "Unknown authors",
    date: pub.acf?.publication_year || new Date(pub.date).getFullYear().toString(),
    description: pub.excerpt?.rendered 
      ? pub.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "") 
      : "",
    link: pub.acf?.external_link || `#publication-${pub.id}`
  };
};

// Format media resource data from WordPress
const formatMediaResource = (media: any) => {
  return {
    id: media.id,
    title: media.title.rendered,
    type: media.acf?.media_type || "Video",
    duration: media.acf?.duration || "00:00",
    thumbnail: media._embedded?.['wp:featuredmedia']?.[0]?.source_url || undefined,
    link: media.acf?.video_link || `#media-${media.id}`
  };
};

// Format toolkit data from WordPress
const formatToolkit = (toolkit: any) => {
  return {
    id: toolkit.id,
    title: toolkit.title.rendered,
    description: toolkit.excerpt?.rendered 
      ? toolkit.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "") 
      : "",
    fileSize: toolkit.acf?.file_size || "1.0 MB",
    link: toolkit.acf?.download_link || `#toolkit-${toolkit.id}`
  };
};

// API functions
export const wpService = {
  // Get all posts
  getPosts: async () => {
    try {
      const posts = await wp.posts().embed().get();
      return posts.map(formatPost);
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  },

  // Get a single post by slug
  getPostBySlug: async (slug: string) => {
    try {
      const posts = await wp.posts().slug(slug).embed().get();
      if (posts && posts.length > 0) {
        return formatPost(posts[0]);
      }
      return null;
    } catch (error) {
      console.error(`Error fetching post by slug ${slug}:`, error);
      return null;
    }
  },

  // Get pages
  getPages: async () => {
    try {
      const pages = await wp.pages().embed().get();
      return pages.map((page: any) => formatPage(page));
    } catch (error) {
      console.error('Error fetching pages:', error);
      return [];
    }
  },

  // Get a single page by slug
  getPageBySlug: async (slug: string) => {
    try {
      const pages = await wp.pages().slug(slug).embed().get();
      if (pages && pages.length > 0) {
        return formatPage(pages[0]);
      }
      return null;
    } catch (error) {
      console.error(`Error fetching page by slug ${slug}:`, error);
      return null;
    }
  },
  
  // Get navigation menu
  getMenu: async () => {
    try {
      // This endpoint may vary based on your WordPress setup
      // You might need a plugin like WP-REST-API-V2-Menus to expose menus
      const response = await fetch(`${apiUrl}/menus/v1/menus/main-menu`);
      const data = await response.json();
      return data.items || [];
    } catch (error) {
      console.error('Error fetching menu:', error);
      return [];
    }
  },

  // Get all cities
  getCities: async () => {
    try {
      // Assuming 'city' is the custom post type name in WordPress
      const cities = await wp.posts().type('city').embed().get();
      return cities.map(formatCity);
    } catch (error) {
      console.error('Error fetching cities:', error);
      // Return fallback city data if API fails
      return getDefaultCities();
    }
  },

  // Get a single city by ID
  getCityById: async (id: string) => {
    try {
      const city = await wp.posts().type('city').id(id).embed().get();
      return formatCity(city);
    } catch (error) {
      console.error(`Error fetching city with ID ${id}:`, error);
      // Return a fallback city if API fails
      const defaultCity = getDefaultCities().find(c => c.id.toString() === id);
      return defaultCity || null;
    }
  },
  
  // Get publications
  getPublications: async () => {
    try {
      // Assuming 'publication' is the custom post type name in WordPress
      const publications = await wp.posts().type('publication').embed().get();
      return publications.map(formatPublication);
    } catch (error) {
      console.error('Error fetching publications:', error);
      // Return fallback publications if API fails
      return getDefaultPublications();
    }
  },
  
  // Get media resources
  getMediaResources: async () => {
    try {
      // Assuming 'media' is the custom post type name in WordPress
      const mediaResources = await wp.posts().type('media').embed().get();
      return mediaResources.map(formatMediaResource);
    } catch (error) {
      console.error('Error fetching media resources:', error);
      // Return fallback media resources if API fails
      return getDefaultMediaResources();
    }
  },
  
  // Get toolkits
  getToolkits: async () => {
    try {
      // Assuming 'toolkit' is the custom post type name in WordPress
      const toolkits = await wp.posts().type('toolkit').embed().get();
      return toolkits.map(formatToolkit);
    } catch (error) {
      console.error('Error fetching toolkits:', error);
      // Return fallback toolkits if API fails
      return getDefaultToolkits();
    }
  }
};

// Default cities data as fallback
function getDefaultCities() {
  return [
    {
      id: 1,
      name: "Amsterdam",
      image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      shortDescription: "Creating connected food networks through urban canal systems.",
      description: "Amsterdam's Bauhaus Bites initiative focuses on utilizing the city's famous canal system as a network for sustainable food distribution, connecting urban farms to local markets and communities.",
      category: "Urban Waters",
      features: [
        "Floating gardens on canal barges",
        "Hydroponics systems integrated with historical buildings",
        "Water-based food distribution network",
        "Community gardening spaces along canals"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1558551649-e44c8f992010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1512470053050-8d2635a6206b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      ]
    },
    // ... more default cities would go here
  ];
}

// Default publications data as fallback
function getDefaultPublications() {
  return [
    {
      id: 1,
      title: "Nature-Based Solutions for Urban Food Systems",
      authors: "Smith, J., Johnson, A., et al.",
      date: "2023",
      description: "This paper explores the integration of Nature-Based Solutions in urban food environments, with case studies from European cities.",
      link: "#"
    },
    {
      id: 2,
      title: "Food Environments and Social Inclusivity",
      authors: "Garcia, M., Patel, S., et al.",
      date: "2023",
      description: "An examination of how food environments can be designed to promote social inclusivity and community engagement.",
      link: "#"
    },
    {
      id: 3,
      title: "Measuring Sustainability in Urban Food Systems",
      authors: "Müller, T., Chen, L., et al.",
      date: "2022",
      description: "A framework for measuring and evaluating the sustainability of urban food systems, with metrics and indicators.",
      link: "#"
    }
  ];
}

// Default media resources data as fallback
function getDefaultMediaResources() {
  return [
    {
      id: 1,
      title: "Urban Farming Innovations",
      type: "Video",
      duration: "12:34",
      thumbnail: "https://images.unsplash.com/photo-1585952354446-edf896bbbd0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "Community Gardens: Building Social Capital",
      type: "Video",
      duration: "08:45",
      thumbnail: "https://images.unsplash.com/photo-1445052520430-32c8ebc92fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "Sustainable Food Distribution Systems",
      type: "Video",
      duration: "15:20",
      thumbnail: "https://images.unsplash.com/photo-1595925889916-2a1d773a0613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      link: "#"
    }
  ];
}

// Default toolkits data as fallback
function getDefaultToolkits() {
  return [
    {
      id: 1,
      title: "Urban Gardening Starter Guide",
      description: "A comprehensive guide for communities looking to establish urban gardens in various settings.",
      fileSize: "2.4 MB",
      link: "#"
    },
    {
      id: 2,
      title: "Food System Assessment Toolkit",
      description: "Methods and tools for assessing the sustainability and inclusivity of local food systems.",
      fileSize: "3.8 MB",
      link: "#"
    },
    {
      id: 3,
      title: "Community Engagement Strategies",
      description: "Approaches for involving diverse community members in food environment projects.",
      fileSize: "1.7 MB",
      link: "#"
    }
  ];
}
