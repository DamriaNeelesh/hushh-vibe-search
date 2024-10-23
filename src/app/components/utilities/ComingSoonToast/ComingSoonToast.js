"use client"
import { Box, HStack, Text } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import { useToast } from "@chakra-ui/react";
const ComingSoonToast = (toast) => {
    toast({
      title: "Coming Soon!",
      description: "We are working on it.",
      status: "info",
      duration: 5000, // Shortened to a reasonable time
      isClosable: true,
      position: "top-right",
      containerStyle: {
        maxWidth: "320px", // Ensure the width of the toast is limited
        zIndex: 999999, // Make sure it's on top of everything
        position: "fixed", // Ensure it's fixed at the top
      },
      render: ({ onClose }) => (
        <Box
          p={4}
          bg="blue.500"
          color="white"
          borderRadius="md"
          boxShadow="lg"
          textAlign="left"
          onClick={onClose} // Clicking closes the toast
          cursor="pointer"
        >
          <HStack justify="space-between">
            <Text fontWeight="bold">Coming Soon!</Text>
            <FiX size={20} cursor="pointer" onClick={onClose} />
          </HStack>
          <Text fontSize="sm">We are working on it.</Text>
        </Box>
      ),
    });
  };

  export default ComingSoonToast;