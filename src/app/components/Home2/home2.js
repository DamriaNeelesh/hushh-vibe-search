"use client";
import React from "react";
import {Text} from "@chakra-ui/react";
import home2Resources from './resources/home2Resources'
import SearchBox from "../utilities/SearchBox/SearchBox";
import ImageUpload from "../../components/Upload/uploadComponent";
import styles from "./Home.module.css";
import AnimatedSearchBox from "./AnimatedSearchbox/AnimatedSearchBox";
import ChooseAVibe from './ChooseAVibe/ChooseAVibe'

const Home2 = () => {
  return (
    <div className={`${styles.Home2Wrapper} `}>
      <div className={`${styles.Home2} figtree`}>
        {/* Left Section */}
        <ChooseAVibe />
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
      <div className={`${styles.Home2__ImageUploadWrapper}`}>
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
                src={home2Resources.Model1.src}
                alt="Vibe Search Model 1"
                className={`${styles.Home2__Model1}`}
              />
              <img
                src={home2Resources.Model2.src}
                alt="Vibe Search Model 2"
                className={`${styles.Home2__Model2}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
