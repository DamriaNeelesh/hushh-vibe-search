'use client'
import React, { useState } from 'react';
import { Box, Text, Input, Button, Flex } from '@chakra-ui/react';
import { FiUpload, FiX } from 'react-icons/fi';
import Image from 'next/image';
import CameraIcon from '../svg/colorcameraIcon.svg'
import { Image } from 'next/image';
const ImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
  };

  return (
    <Box
      borderRadius="xl"
      p={4}
      bg={'#FFFFFF'}
      textAlign="left"
      mt={{md:'2rem',base:'1rem'}}
      sx={{
        boxShadow: '0px 4px 6px 0px #0000000D, 0px 4px 50px 0px #00000014',
      }}
      w={'100%'}
      mx="auto"
      display={'flex'}
      flexDirection={'column'}
    >
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Image Upload
      </Text>

      <Box
        borderWidth="2px"
        borderStyle="dashed"
        borderRadius="md"
        p={4}
        mb={4}
        position="relative"
        textAlign={'center'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {uploadedImage ? (
          <Box display={'flex'} flexDirection={'column'} position="relative" textAlign={'center'}
          alignItems={'center'}
          justifyContent={'center'}>
            <Image src={uploadedImage} alt="Uploaded" boxSize="150px" width={'30'} height={'30'} />
            <Button
              position="absolute"
              top="0"
              right="0"
              size="sm"
              onClick={removeImage}
              colorScheme="red"
              variant="ghost"
            >
              <FiX />
            </Button>
          </Box>
        ) : (
          <>
           <Box display={'flex'} flexDirection={'column'} position="relative" textAlign={'center'}
          alignItems={'center'}
          justifyContent={'center'}>
            <Image src={CameraIcon} alt='Scan you vibe' />
            <Text mt={2}>
              Drag your image or{' '}
              <Button as="label" variant="link" cursor="pointer">
                browse
                <Input
                  type="file"
                  accept="image/jpeg, image/png"
                  onChange={handleImageUpload}
                  hidden
                />
              </Button>
            </Text>
            <Text fontSize="sm" color="gray.500">
              Only support .jpg, .png files
            </Text>
        </Box>
          </>
        )}
      </Box>

      <Flex align="center" my={2}>
  <Box flex="1" borderBottom="1px solid" borderColor="gray.300" />
  <Text fontSize="sm" color="gray.500" mx={2}>
    OR
  </Text>
  <Box flex="1" borderBottom="1px solid" borderColor="gray.300" />
</Flex>

      <Flex align="center" my={4}>
        <Input placeholder="https://sharefile.xyz/file.jpg" flex="1" mr={2} />
        <Button bg="#2D0D3A" color={'white'}>Upload</Button>
      </Flex>
    </Box>
  );
};

export default ImageUpload;