"use client";
import React, { useState } from "react";
import { Flex, Box, Text, Button, Input } from "@chakra-ui/react";
import Vintage from "../svg/home2/vintage.svg";
import { FiUpload, FiX } from "react-icons/fi";
import CoffeeLoving from "../svg/home2/coffeeLoving.svg";
import CyberPunk from "../svg/home2/cyberPunk.svg";
import SearchBox from "../utilities/SearchBox/SearchBox";
import Model1 from "../svg/home2/model1.svg";
import Model2 from "../svg/home2/model2.svg";
import Image from "next/image";
import ImageUpload from '../../components/Upload/uploadComponent'

const Home2 = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
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
    <>
      <Flex
        fontFamily={"Figtree, sans-serif"}
        justify="space-between"
        minH={"100vh"}
        align="center"
        p={8}
      >
        {/* Left Section */}
        <Box
          display={"flex"}
          alignItems={"flex-end"}
          justifyContent={"flex-end"}
          flexDirection={"column"}
          gap={{ md: "1.5rem", base: "0.75rem" }}
        >
          <Box mb={4}>
            <Image src={Vintage} alt="Vintage Patterns" />
          </Box>
          <Box mb={4}>
            <Image src={CoffeeLoving} alt="Coffee Loving Bookworm" />
          </Box>
          <Box>
            <Image src={CyberPunk} alt="Cyberpunk Neon Outfits" />
          </Box>
        </Box>

        {/* Right Section */}
        <Box
          gap={{ md: "1rem", base: "0.5rem" }}
          display={"flex"}
          flexDirection={"column"}
          textAlign={"left"}
        >
          <Text
            color={"#273434"}
            fontSize={{ md: "2.5rem", base: "1.25rem" }}
            letterSpacing={"-0.25px"}
            lineHeight={{ md: "44px", base: "32px" }}
            fontWeight="700"
          >
            Search like you talk...
          </Text>
          <Text
            color={"#606060"}
            fontWeight={"400"}
            letterSpacing={"-0.25px"}
            lineHeight={"27px"}
            fontSize={{ md: "1.25rem", base: "0.8rem" }}
          >
            Type in anything - "Boho dress for summer" or "Outfit <br></br>{" "}
            inspired by that cool movie poster".
          </Text>
          <SearchBox />
          <Text
            cursor={"pointer"}
            mt={2}
            fontWeight={"400"}
            fontSize={{ md: "1rem", base: "0.5rem" }}
            lineHeight={"19.2px"}
            color="#596168CF"
          >
            ← click the vibes on the left to check them out
          </Text>
        </Box>

        {/* Image Upload and Link Upload UI */}
      </Flex>
      <Flex
        fontFamily={"Figtree, sans-serif"}
        pos={"relative"}
        minH={"100vh"}
        justify="center"
        gap={{ md: "2rem", base: "1rem" }}
        mx={{ md: "2rem", base: "0" }}
        align="center"
      >
        {/* Left Section - Image Upload */}
        <Box  p={{md:'4rem'}} display={'flex'} textAlign={'left'} alignItems={'flex-start'} flexDirection={'column'} gap={{md:'1rem',base:'0.5rem'}} flex={1}>
          <Text
            color={"#273434"}
            fontWeight={"700"}
            fontSize={{ md: "2.5rem", base: "1.25rem" }}
            lineHeight={{ md: "44px", base: "32px" }}
            letterSpacing={"-0.25px"}
          >
            See It, Find It
          </Text>
          <Text
            letterSpacing={"-0.25px"}
            color={"#606060"}
            lineHeight={{ md: "27px", base: "25px" }}
            fontWeight={"400"}
            fontSize={{ md: "1.25rem", base: "0.75rem" }}
          >
            Upload an image - Love that jacket on Instagram? <br></br> Vibe
            Search will find it (or something even better).
          </Text>

          <ImageUpload/>
          
          <Text fontWeight='400' fontSize={{md:'1rem',base:'0.5rem'}} lineHeight={'19.2px'} color={'#596168CF'}>click the vibes on the left to check them out →</Text>
        </Box>

        {/* Right Section - Models */}
        <Box
          p={2}
          justifyContent={'flex-start'}
          flexDirection={"column"}
          alignItems={"center"}
          minH="100vh"
          mx={{ md: 4, base: 2 }}
          flex={1}
          pos="relative"
          display="flex"
        >
          <Image
            src={Model1}
            alt="Model 1"
            boxSize="200px"
            style={{
              zIndex: 1,
              position: "relative",
              left: "0%",
              top: "0",
            }}
          />
          <Image
            src={Model2}
            alt="Model 2"
            boxSize="150px"
            style={{
              zIndex: 2,
              position: "absolute",
              left: "55%",
              top: "20%",
            }}
          />
        </Box>
      </Flex>
    </>
  );
};

export default Home2;
