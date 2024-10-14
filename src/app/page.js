"use client";
/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Text,
  Button,
  VStack,
  HStack,
  Circle,
  useBreakpointValue,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slide1 from "./components/svg/slideImage1.svg";
import Slide2 from "./components/svg/slideImage2.svg";
import Slide3 from "./components/svg/slideImage3.svg";
import GoogleIcon from "./components/svg/googleIcon.svg";
import AppleIcon from "./components/svg/appleIcon.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SearchGif from "./components/gif/searchGif.gif";
import services from "./services/services";
import VibeText from "./components/svg/vibeText.svg";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "antd/es/modal/Modal";
import Resources from "./resources/resources";

const slides = [
  {
    image: Slide1,
    text: "Shop Smoothly,",
    text2: "Save the Maze for Game Night",
  },
  {
    image: Resources.images.VibeSearchGif,
    text: "Type like you talk,",
    text2: " Vibe gets it",
  },
  {
    image: Slide3,
    text: "Spot a style you love?",
    text2: "Let&apos;s find its twin",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // Check if the user has just signed up
    if (isSignedUp) {
      setIsModalOpen(true);
    }
  }, [isSignedUp]);

  useEffect(() => {
    setInterval(() => {
      isSignedUp ? "" : services.authentication.isLoggedIn(setIsSignedUp);
    }, 1000);
  }, []);

  useEffect(() => {
    isSignedUp ? setIsModalOpen(true) : "";
  }, [isSignedUp]);

  const handleGoogleSignIn = async () => {
    try {
      await services.authentication.googleSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Show modal after 1 second

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // 5 seconds delay for slide change

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Modal
        title="Welcome Aboard!"
        open={isModalOpen}
        footer={null}
        closable={false}
      >
        <p>
          Thank you for registering!
          <br></br>We'll notify you by email when we launch on{" "}
          <strong>October 20th</strong> and keep you updated on other exciting
          developments.
          <br></br>
          In the meantime, You can go over &nbsp;
          <a href="https://hushh.ai" target="_blank">
            hushh.ai
          </a>
          &nbsp; to learn more about us.
          <br></br>
          <br></br>
          <svg
            width="400"
            height="250"
            viewBox="0 0 400 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="400" height="250" rx="20" fill="#1A1A1A" />
            <g filter="url(#filter0_d)">
              <rect
                x="20"
                y="20"
                width="360"
                height="210"
                rx="10"
                stroke="#333333"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
            </g>
            <text
              x="40"
              y="120"
              fill="white"
              fontFamily="Operetta, sans-serif"
              fontSize="52"
              fontWeight="bold"
            >
              Vibe
            </text>
            <text
              x="40"
              y="170"
              fill="white"
              fontFamily="Figtree, sans-serif"
              fontSize="18"
            >
              Early Access Pass
            </text>
            <text
              x="40"
              y="210"
              fill="#999999"
              fontFamily="Figtree, sans-serif"
              fontSize="14"
            >
              20 Oct 2024
            </text>
            <defs>
              <filter
                id="filter0_d"
                x="15"
                y="15"
                width="370"
                height="220"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </p>
      </Modal>
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        minH="100vh"
        gap={{ base: "2rem", md: "0" }}
        position="relative"
      >
        <VStack
          align="start"
          justify="center"
          p={8}
          ml={4}
          spacing={4}
          flex={{ md: 1, base: 2 }}
          bg="white"
          position="relative" // Allow for absolute positioning inside
        >
          <Image src={VibeText} alt="Vibe Search" />
          <Text
            mb={{ md: "2rem", base: "0.5rem" }}
            color={"#000000"}
            fontSize={{ md: "1.25rem", base: "0.85rem" }}
            lineHeight={"24px"}
            fontWeight="600"
          >
            Product Discovery, Elevated
          </Text>
          <VStack
            maxW={{ md: "60%" }}
            gap={{ md: "1.2rem" }}
            my={{ md: "2rem", base: "1rem" }}
            textAlign={"left"}
            display={"flex"}
            alignItems={"flex-start"}
          >
            <Text
              color={"#596168"}
              fontWeight={"400"}
              lineHeight={"21.6px"}
              fontSize={{ md: "18px", base: "0.85rem" }}
            >
              <span style={{ fontWeight: "700" }}>
                Launching Oct 20th 2024!{" "}
              </span>
              <Text
                color={"#596168"}
                fontWeight={"400"}
                lineHeight={"21.6px"}
                fontSize={{ md: "18px", base: "0.85rem" }}
              >
                Vibe Search understands you. We decode natural language to
                personalize your product discovery. Get ready for a smarter
                shopping experience.
              </Text>
            </Text>
            <Text
              color={"#596168"}
              fontWeight={"400"}
              lineHeight={"21.6px"}
              fontSize={{ md: "18px", base: "0.85rem" }}
            >
              <span style={{ fontWeight: "700" }}>Sign up now </span>for early
              access and exclusive updates.
            </Text>
          </VStack>
          <div>
            {!isSignedUp && (
              <Button
                textAlign={"left"}
                justifyContent={"flex-start"}
                gap={{ md: "1rem", base: "0.5rem" }}
                color={"#0000008A"}
                bg={"#FFFFFF"}
                fontWeight={"500"}
                cursor={"pointer"}
                fontSize={{ md: "1.25rem", base: "1rem" }}
                p={"0.6rem"}
                w={{ md: "20rem", base: "14rem" }}
                borderRadius={"10px"}
                boxShadow="0px 2px 3px 0px #0000002B"
                onClick={handleGoogleSignIn}
              >
                <Image src={GoogleIcon} alt="Google Sign Up" /> Sign Up with
                Google
              </Button>
            )}
          </div>

          {/* Footer-like text at bottom left */}
          <Box
            position="absolute"
            bottom="0" // Align to the bottom
            left="0" // Align to the left
            p={4} // Add padding
          >
            <Link href={"https://www.hush1one.com"}>
              <Text
                fontFamily={"Figtree"}
                color={"#0000008A"}
                fontSize={{ md: "1rem", base: "0.75rem" }}
                fontWeight={"400"}
                lineHeight={"11px"}
              >
                Powered by{" "}
                <span style={{ fontWeight: "700", color: "#0000008A" }}>
                  hushh.ai
                </span>
                , a Hushh Labs project
              </Text>
            </Link>
          </Box>
        </VStack>

        <Box
          flex={1}
          bg="#F4F3F1"
          display={{ md: "flex", base: "none" }}
          alignItems="center"
          justifyContent="center"
          position="relative"
          flexDirection="column"
          minW={"650px"}
          // minH={'490px'}
          // maxW="640px"
          // maxH={'540px'}
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={slides[currentSlide].image}
                alt="Slide illustration"
                width={"579px"}
                height={"286px"}
                style={{ zIndex: "1", margin: "0 auto", display: "block" }}
              />
              <Text
                fontSize={{ md: "2rem", base: "1.15rem" }}
                fontWeight="700"
                textAlign="center"
                zIndex="2"
                lineHeight={{ md: "41.6px", base: "35px" }}
                letterSpacing="-1%"
                fontFamily="Figtree"
                mt={{ md: "3rem", base: "0.5rem" }}
              >
                {slides[currentSlide].text}
              </Text>
              <Text
                fontSize={{ md: "2rem", base: "1.15rem" }}
                fontWeight="700"
                textAlign="center"
                zIndex="2"
                lineHeight={{ md: "41.6px", base: "35px" }}
                letterSpacing="-1%"
                fontFamily="Figtree"
              >
                {slides[currentSlide].text2}
              </Text>
            </motion.div>
          </AnimatePresence>
          <HStack spacing={10} mt={16} position="absolute" bottom="60px">
            {slides.map((_, index) => (
              <Circle
                key={index}
                size="10px"
                bg={currentSlide === index ? "#1E1E48" : "#BBBBCA"}
                onClick={() => handleSlideChange(index)}
                cursor="pointer"
              />
            ))}
          </HStack>
        </Box>
      </Box>
    </>
  );
}
