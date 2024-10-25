"use client";
import React, { useState } from "react";
import { Flex, Box, Text, HStack, Button, Input } from "@chakra-ui/react";
import Vintage from "../svg/home2/vintage.svg";
import { FiUpload, FiX } from "react-icons/fi";
import CoffeeLoving from "../svg/home2/coffeeLoving.svg";
import CyberPunk from "../svg/home2/cyberPunk.svg";
import SearchBox from "../utilities/SearchBox/SearchBox";
import Model1 from "../svg/home2/model1.svg";
import Model2 from "../svg/home2/model2.svg";
import Image from "next/image";
import ImageUpload from "../../components/Upload/uploadComponent";
import styles from "./Home.module.css";
import AnimatedSearchBox from "./AnimatedSearchbox/AnimatedSearchBox";

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
      <div className={`${styles.Home2} figtree`}>
        {/* Left Section */}
        <div className={`${styles.Home2__ChooseAVibe} `}>
          <Image
            className={`${styles.Home2__Vibe} `}
            src={Vintage}
            alt="Vintage Patterns"
          />
          <Image
            className={`${styles.Home2__Vibe}`}
            src={CoffeeLoving}
            alt="Coffee Loving Bookworm"
          />
          <Image
            className={`${styles.Home2__Vibe} `}
            src={CyberPunk}
            alt="Cyberpunk Neon Outfits"
          />
        </div>

        {/* Right Section */}
        <div className={`${styles.Home2__Text}`}>
          <div className={styles.Home2__Title}>
            <Text
              color={"#273434"}
              fontSize={{ md: "2.5rem", base: "1.25rem" }}
              letterSpacing={"-0.25px"}
              lineHeight={{ md: "44px", base: "32px" }}
              fontWeight="700"
            >
              Search like you talk...
            </Text>
          </div>
          <div className={`${styles.Home2__TitleMobile} figtree`}>
            Search like you talk...
          </div>
          <div className={`${styles.Home2__Desc} `}>
            Type in anything - "Boho dress for summer" or "Outfit <br></br>{" "}
            inspired by that cool movie poster".
          </div>
          <div className={`${styles.Home2__SearchBox} `}>
            {/* <SearchBox /> */}
            <AnimatedSearchBox />
          </div>
          <div className={`${styles.Home2__SearchBoxMobile} `}>
            <SearchBox boxWidth={88} />
          </div>
          <div className={`${styles.Home2__Tagline} `}>
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
          </div>
          <div className={`${styles.Home2__TaglineMobile} `}>
            <div>click the vibes on the Below to check them out</div>
          </div>
        </div>

        {/* Image Upload and Link Upload UI */}
      </div>
      <div className={`${styles.Home2__ImageUpload}`}>
        {/* Left Section - Image Upload */}
        <div className={`${styles.Home2__ImageUploadText} figtree`}>
          <div className={`${styles.Home2__ImageUploadTitle}`}>
            See It, Find It
          </div>
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
          <div className={`${styles.Home2__ImageUploadDialog}`}>
            <ImageUpload />
          </div>
          <div className={`${styles.Home2__Tagline}`}>
            <Text
              fontWeight="400"
              fontSize={{ md: "1rem", base: "0.5rem" }}
              lineHeight={"19.2px"}
              color={"#596168CF"}
            >
              click the vibes on the left to check them out →
            </Text>
          </div>
        </div>

        {/* Right Section - Models */}
        <div className={`${styles.Home2__ModelsFlex}`}>
          <div className={`${styles.Home2__Models}`}>
            <img
              src={Model1.src}
              alt="Vibe Search Model 1"
              className={`${styles.Home2__Model1}`}
            />
            <img
              src={Model2.src}
              alt="Vibe Search Model 2"
              className={`${styles.Home2__Model2}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2;
