import React, { useState, useEffect } from "react";
import ImageUpload from "../VibeUpload/VibeUpload"; // Adjust the import path as necessary
import { Box, Button, Image } from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import images from '../../../resources/images/images'

const VibeUpload = ({ onClose }) => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      minH={'100vh'}
      bottom="0"
      bg="black"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      zIndex="1000"
    >
      <Box position="relative">
        <Image src={images.AddImge} alt="Upload your vibe via image" />
        <FiX
          size={24}
          color="white"
          position="absolute"
          top="10px"
          right="10px"
          cursor="pointer"
          onClick={onClose}
        />
      </Box>
      <Button mt={4} colorScheme="teal" onClick={onClose}>
        Select Image
      </Button>
      <ImageUpload />
    </Box>
  );
};

export default VibeUpload;