import React from 'react';
import { Box, SimpleGrid, Text, Heading, Link } from '@chakra-ui/react';
import Header from './components/Header';

const BlogCard = ({ category, title, description }) => (
  <Box borderWidth="1px" borderRadius="lg" display={'flex'} flexDirection={'column'} gap={{md:'1rem',base:'0.5rem'}} bg={'#FBFAF8'} overflow="hidden" p="6">
    <Text fontSize={{md:'0.85rem',base:'0.48rem'}} lineHeight={'16.8px'} fontWeight={'700'} color="#86549A" mb="2">{category}</Text>
    <Heading lineHeight={'25px'} fontSize={{md:'1.25rem',base:'0.75rem'}} size="md" fontWeight={'500'} color={'#000000'} mb="2">{title}</Heading>
    <Text fontSize={{md:'0.85rem',base:'0.45rem'}} lineHeight={'20px'} mb="4" fontWeight={'400'} color={'#5F6367'}>{description}</Text>
    <Link color="purple.500" href="/blogs/latest-blogs">Read more &rarr;</Link>
  </Box>
);

const BlogLandingPage = () => {
  const blogs = [
    {
      category: 'ML TEAM',
      title: 'Enhance Customer Satisfaction With Semantic Search & Parsing',
      description: 'In the competitive world of e-commerce, customer satisfaction reigns supreme. A key driver of satisfaction? A seamless and intuitive search experience...',
    },
    {
        category: 'ML TEAM',
        title: 'Enhance Customer Satisfaction With Semantic Search & Parsing',
        description: 'In the competitive world of e-commerce, customer satisfaction reigns supreme. A key driver of satisfaction? A seamless and intuitive search experience...',
      },
      {
        category: 'ML TEAM',
        title: 'Enhance Customer Satisfaction With Semantic Search & Parsing',
        description: 'In the competitive world of e-commerce, customer satisfaction reigns supreme. A key driver of satisfaction? A seamless and intuitive search experience...',
      },
      {
        category: 'ML TEAM',
        title: 'Enhance Customer Satisfaction With Semantic Search & Parsing',
        description: 'In the competitive world of e-commerce, customer satisfaction reigns supreme. A key driver of satisfaction? A seamless and intuitive search experience...',
      },
      {
        category: 'ML TEAM',
        title: 'Enhance Customer Satisfaction With Semantic Search & Parsing',
        description: 'In the competitive world of e-commerce, customer satisfaction reigns supreme. A key driver of satisfaction? A seamless and intuitive search experience...',
      },
      {
        category: 'ML TEAM',
        title: 'Enhance Customer Satisfaction With Semantic Search & Parsing',
        description: 'In the competitive world of e-commerce, customer satisfaction reigns supreme. A key driver of satisfaction? A seamless and intuitive search experience...',
      },
  ];

  return (
  <>  
    <Header/>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} p={5}>
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          category={blog.category}
          title={blog.title}
          description={blog.description}
        />
      ))}
    </SimpleGrid>
  </>  
  );
}

export default BlogLandingPage;