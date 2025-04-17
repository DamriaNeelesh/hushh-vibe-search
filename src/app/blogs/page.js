import dynamic from 'next/dynamic';
import Resources from "../resources/resources";

export const metadata = {
  title: "Blogs - Vibe Search",
  description: "Read the latest blogs from Vibe Search",
  keywords: "blogs, articles, Vibe Search",
  openGraph: {
    title: "Blogs - Vibe Search",
    description: "Read the latest blogs from Vibe Search",
    images: [Resources.images.VibeLogo.src],
    url: "https://www.vibesearch.ai/blogs",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Dynamically import the client component with SSR disabled
const BlogsClient = dynamic(() => import('./BlogsClient'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function BlogsPage() {
  return <BlogsClient />;
}