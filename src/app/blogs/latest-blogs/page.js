import dynamic from 'next/dynamic';
import Resources from "../../resources/resources"; // Corrected path

// --- Data Fetching (Server Side) ---
// This function runs on the server to fetch data for the specific blog post.
// Replace this with your actual data fetching logic (e.g., fetch from CMS or API).
async function getBlogData() {
  // Example: Simulate fetching data
  // In a real app, you'd fetch based on a slug or ID from params
  await new Promise(resolve => setTimeout(resolve, 50)); // Simulate network delay
  return {
    title: 'Enhance Customer Satisfaction With Semantic Search & Parsing',
    category: 'ML TEAM',
    author: 'Hushh ML Team',
    date: 'August 15, 2024',
    imageUrl: '/path/to/your/blog/image.jpg', // Replace with actual image path
    content: `
      <p>In the competitive world of e-commerce, customer satisfaction reigns supreme. A key driver of satisfaction? A seamless and intuitive search experience...</p>
      <p>More content paragraphs go here...</p>
    `,
    // Add other necessary fields like author, date, image URL, etc.
  };
}

// --- Dynamic Metadata Generation (Server Side) ---
// This function generates metadata based on the fetched blog data.
export async function generateMetadata() {
  try {
    const blogData = await getBlogData(); // Fetch data again for metadata
    
    if (!blogData) {
      return {
        title: "Blog Post Not Found - Vibe Search",
        description: "The requested blog post could not be found.",
      };
    }

    return {
      title: `${blogData.title} - Vibe Search Blog`,
      description: blogData.content.substring(0, 160).replace(/<[^>]*>?/gm, '') + '...', // Generate a short description
      keywords: `blog, ${blogData.category}, ${blogData.title.split(' ').slice(0, 5).join(', ')}`, // Example keywords
      openGraph: {
        title: blogData.title,
        description: blogData.content.substring(0, 160).replace(/<[^>]*>?/gm, '') + '...',
        images: [blogData.imageUrl || Resources?.images?.VibeLogo?.src || '/default-og-image.png'],
        url: "https://www.vibesearch.ai/blogs/latest-blogs", // Replace with actual dynamic URL if possible
        type: 'article',
        article: {
           publishedTime: blogData.date, // Add published date if available
           authors: [blogData.author], // Add author if available
        }
      },
      twitter: {
        card: "summary_large_image",
      },
    };
  } catch (error) {
    console.error("Error generating metadata for blog post:", error);
    return {
      title: "Error Loading Blog Post - Vibe Search",
      description: "There was an error loading the blog post details.",
    };
  }
}


// --- Dynamic Import (Client Side Component) ---
const BlogDetailClient = dynamic(() => import('./BlogDetailClient'), {
  ssr: false,
  loading: () => <div>Loading blog post...</div> // Consistent loading state
});


// --- Page Component (Server Side) ---
// This server component fetches data and passes it to the client component.
export default async function LatestBlogPage() {
  let blogData = null;
  let loading = true;
  let error = null;

  try {
    blogData = await getBlogData();
    loading = false;
  } catch (err) {
    console.error("Error fetching blog data for page:", err);
    error = err.message || "Failed to load blog post.";
    loading = false;
  }

  return <BlogDetailClient blogData={blogData} loading={loading} error={error} />;
}