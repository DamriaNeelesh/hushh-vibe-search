"use client";
import React, { useState, useEffect } from "react";
import { Box, Flex, Input, Button } from "@chakra-ui/react";
import SearchIcon from "../components/svg/searchIcon.svg";
import CameraIcon from "../components/svg/cameraIcon.svg";
import axios from "axios";
import styles from "./search.module.css";
import Header from "../components/header";
import Image from "next/image";
import Footer from "../components/footer";
import VibeText from "../components/svg/vibeText.svg";
import IntroModal from "../components/primitive/introModal";
import { useRouter } from "next/navigation";
import { metadata } from "../components/pagesComponent/searchPage"; // Import metadata
import fashionDiceRoll from "../components/utilities/FashionDiceRollButton/fashionDiceRoll/fashionDiceRoll";
import Head from "next/head";
const Search = () => {
  const [fileImg, setFile] = useState(null);
  const [fileInputElement, setFileInput] = useState(null);
  const [userImage, setUserImage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setFileInput(document.getElementById("searchBox__fileInput"));
  }, []);

  const router = useRouter();

  const handleSearch = () => {
    if (localStorage && searchQuery !== "") {
      const searchHistory = localStorage.getItem("vibesearch-history") || "";
      localStorage.setItem(
        "vibesearch-history",
        searchHistory + "," + searchQuery
      );
    }
    router.push(`/components/SearchResults?query=${searchQuery}`);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/user/session");
        setUserImage(response.data.imageUrl);
      } catch (error) {}
    };
    fetchUserData();
  }, []);

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta name="twitter:card" content={metadata.twitter.card} />
      </Head>
      <Header />
      {/* <Home2/> */}
      <IntroModal />
      <Flex
        direction="column"
        align="center"
        justify="center"
        minHeight="100vh"
        backgroundColor="#FFFFFF"
        className={styles.vibeContainer}
      >
        <Box
          fontSize="4xl"
          fontWeight="bold"
          mb={{ md: "3rem", base: "1.5rem" }}
        >
          <Image
            src={VibeText}
            alt="Vibe Search"
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/")}
          />
        </Box>
        <Box
          width={{ base: "90%", md: "60%", lg: "40%" }}
          padding={{ base: "2", md: "4" }}
          backgroundColor="white"
          border={"1px solid #DFE1E5"}
          borderRadius="md"
        >
          <Flex alignItems="center" gap={"2"}>
            <Image src={SearchIcon} alt="Vibe Search" />
            <Input
              placeholder="Search for fashion..."
              type="text"
              id="searchBox__search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              borderRadius="full"
              flexGrow={1}
              border="none"
              _focus={{ outline: "none", boxShadow: "none" }}
            />
            <Image
              aria-label="Search"
              src={CameraIcon}
              onClick={handleSearch}
              marginLeft="2"
              borderRadius="full"
              alt="Hushh Vibe Search"
            />
          </Flex>
        </Box>
        <Flex
          display={"flex"}
          gap={{ md: "2.5rem", base: "1rem" }}
          marginTop="4"
          justifyContent="space-between"
        >
          <Button
            bg={"#F8F9FA"}
            p={"10px"}
            borderRadius={"4px"}
            border={"1px solid #F8F9FA"}
            variant="outline"
            size="sm"
            onClick={() => {}}
          >
            Past Searches
          </Button>
          <Button
            bg={"#F8F9FA"}
            p={"10px"}
            borderRadius={"4px"}
            border={"1px solid #F8F9FA"}
            variant="outline"
            size="sm"
            onClick={() => {
              fashionDiceRoll();
            }}
          >
            Fashion Dice Roll
          </Button>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default Search;
