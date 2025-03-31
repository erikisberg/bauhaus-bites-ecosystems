
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
  }
};
