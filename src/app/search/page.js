'use client'
import React, { useState, useEffect } from 'react';
import { Box, Flex, IconButton, Input, Button, Text } from '@chakra-ui/react';
// import { SearchIcon } from '@chakra-ui/icons';
import SearchIcon from '../components/svg/searchIcon.svg';
import CameraIcon from '../components/svg/cameraIcon.svg'
import axios from 'axios';
import styles from './Search.module.css';
import Header from '../components/header';
import Image from 'next/image';
import Footer from '../components/footer';
import VibeText from '../components/svg/vibeText.svg';
import IntroModal from '../components/primitive/introModal';

const Search = () => {
  const [query, setQuery] = useState('');
  const [userImage, setUserImage] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search?query=${query}`);
      console.log('Search Result:', response.data);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };


  useEffect(() => {
    // Simulate fetching user data from session
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/session');
        setUserImage(response.data.imageUrl);
      } catch (error) {
        console.error('Error fetching user session:', error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
    <Header/>
    <IntroModal/>
        <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh"
      backgroundColor="#FFFFFF"
      className={styles.vibeContainer}
    >
      <Box fontSize="4xl" fontWeight="bold" mb={{md:'3rem',base:'1.5rem'}}>
        <Image src={VibeText} alt='Vibe Search' />
      </Box>
      <Box
        width={{ base: '90%', md: '60%', lg: '40%' }}
        padding={{ base: '2', md: '4' }}
        // boxShadow="lg"
        backgroundColor="white"
        border={'1px solid #DFE1E5'}
        borderRadius="md"
      >
        <Flex alignItems="center" gap={'2'}>
        <Image src={SearchIcon} alt='Vibe Search' /> 
          <Input
            placeholder="Search for fashion..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            borderRadius="full"
            flexGrow={1}
            border="none"
            _focus={{ outline: 'none', boxShadow: 'none' }}
          />
          <Image
            aria-label="Search"
            src={CameraIcon}
            onClick={handleSearch}
            marginLeft="2"
            // _hover={{ backgroundColor: 'purple.600' }}
            borderRadius="full"
          />
        </Flex>
        
      </Box>
      <Flex display={'flex'} gap={{md:'2.5rem',base:'1rem'}} marginTop="4" justifyContent="space-between">
          <Button bg={'#F8F9FA'} p={'10px'} borderRadius={'4px'} border={'1px solid #F8F9FA'} variant="outline" size="sm" onClick={() => {}}>
            Past Searches
          </Button>
          <Button bg={'#F8F9FA'} p={'10px'} borderRadius={'4px'} border={'1px solid #F8F9FA'} variant="outline" size="sm" onClick={() => {}}>
            Fashion Dice Roll
          </Button>
        </Flex>
    </Flex>
    <Footer/>
    </>
  
  );
};

export default Search;