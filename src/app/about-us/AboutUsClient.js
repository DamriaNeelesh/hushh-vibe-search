'use client';

import React, { useEffect, useState } from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { isBrowser } from '../utils/browserUtils';

export default function AboutUsClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render content after component is mounted in browser
  if (!mounted && !isBrowser()) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxW="container.lg" py={10}>
      <Heading as="h1" mb={6}>About Us</Heading>
      <Box>
        <Text mb={4}>
          Hushh is a company dedicated to providing innovative search solutions.
        </Text>
        {/* Rest of your about us content */}
      </Box>
    </Container>
  );
} 