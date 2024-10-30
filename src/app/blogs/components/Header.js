'use client'
import React, { useState } from 'react';
import { Box, Flex, Text, IconButton, Stack, Button, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import VibeText from '../../components/svg/vibeText.svg';
import Image from 'next/image';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
  <>  
    <Box bg={'white'} display={'flex'} flexDirection={{md:'row'}} alignItems={'center'} justifyContent={'space-between'} px={4} boxShadow="md">
      <Flex h={16} alignItems="center" gap={{md:'2rem',base:'1rem'}}>
      <IconButton
        size="md"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label="Toggle Menu"
        display={{ md: 'none' }}
        onClick={toggleMenu}
      />
        <Image src={VibeText} alt='Vibe Search' width={'50'} height={'50'} />
        
        <Flex display={{ base: 'none', md: 'flex' }}    >
          <Text mx={2} color={'#273434'}>Latest Blogs</Text>
          <Text mx={2} color={'#624737'}>Product Updates</Text>
        </Flex>

      </Flex>
      <Button bg={'#FFB6C1'} display={{base:'none',md:'block'}} color={'white'} borderRadius={'5px'}>
        Sync With Our Updates
      </Button>
    </Box>

    <Drawer isOpen={isOpen} placement="left" onClose={toggleMenu}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
            <Stack as="nav" spacing={4} mt={10}>
              <Text>Latest Blogs</Text>
              <Text>Product Updates</Text>
            </Stack>
            <Button mt={4} bg={'#FFB6C1'} color={'white'} borderRadius={'5px'} width="100%">
              Sync With Our Updates
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
  </>  
  );
};

export default Header;