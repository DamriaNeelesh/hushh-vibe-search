'use client';

import React, { useEffect, useState } from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { isBrowser } from '../utils/browserUtils';

export default function TermsOfUseClient() {
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
      <Heading as="h1" mb={6}>Terms of Use</Heading>
      <Box>
        <Text mb={4}>
          Welcome to Hushh Vibe Search. By accessing or using our service, you agree to be bound by these Terms of Use.
        </Text>
        {/* Rest of your terms content */}
      </Box>
    </Container>
  );
} 