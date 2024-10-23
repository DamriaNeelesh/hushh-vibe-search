import React from 'react';
import { Box, Flex, IconButton, Text, Avatar } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import UserIcon from './svg/userIcon.svg';
import Image from 'next/image';

const Header = ({ userImage }) => {
  return (
    <Flex
      width="100%"
      maxH={{md:'3rem',base:'2rem'}}
      padding="4"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="white"
      position="fixed"
      top="0"
      zIndex="1"
      boxShadow="sm"
    >
      <IconButton
        aria-label="Menu"
        icon={<HamburgerIcon />}
        variant="ghost"
        _hover={{ backgroundColor: 'gray.100' }}
      />
      <Image size="sm" src={UserIcon} alt='User Profile'/>
    </Flex>
  );
};

export default Header;