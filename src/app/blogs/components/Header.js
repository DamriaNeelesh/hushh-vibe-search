import React from 'react';
import { Box, Flex, Text, IconButton, useDisclosure, Stack, Button } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import VibeText from '../../components/svg/vibeText.svg';
import Image from 'next/image';

const Header = () => {

  return (
    <Box bg={'white'} display={'flex'} flexDirection={{md:'row'}} alignItems={'center'} justifyContent={'space-between'} px={4} boxShadow="md">
      <Flex h={16} alignItems="center" gap={{md:'2rem'}}>
        <Image src={VibeText} alt='Vibe Search' width={'50'} height={'50'} />
        <Flex display={{ base: 'none', md: 'flex' }}    >
          <Text mx={2} color={'#273434'}>Latest Blogs</Text>
          <Text mx={2} color={'#624737'}>Product Updates</Text>
        </Flex>
      </Flex>
      
      <Button bg={'#FFB6C1'} color={'white'} borderRadius={'5px'}>
        Sync With Our Updates
      </Button>
     
    </Box>
  );
};

export default Header;