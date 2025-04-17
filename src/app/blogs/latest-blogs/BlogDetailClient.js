'use client';

import React, { useEffect, useState } from 'react';
import { Box, Container, Heading, Text, Image, Spinner } from '@chakra-ui/react';
// Assuming BlogDetailPage component handles the actual display logic
import BlogDetailPageContent from './BlogDetailPage'; // Rename your existing component if needed

export default function BlogDetailClient({ blogData, loading, error }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || loading) {
    return (
      <Container centerContent py={10}>
        <Spinner size="xl" />
        <Text mt={4}>Loading blog post...</Text>
      </Container>
    );
  }

  if (error) {
     return <Container py={10}><Text color="red.500">Error loading blog post: {error}</Text></Container>;
  }
  
  if (!blogData) {
     return <Container py={10}><Text>Blog post not found.</Text></Container>;
  }

  // Pass the fetched data to the actual content component
  return <BlogDetailPageContent blogData={blogData} />;
} 