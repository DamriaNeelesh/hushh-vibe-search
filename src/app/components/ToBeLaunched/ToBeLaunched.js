'use client';

import React, { useState, useEffect } from "react";
import Description from "./Description/Description";
import CompaniesMarquee from "./CompaniesMarquee/CompaniesMarquee";
import utilities from "../utilities/utilities";
import styles from "./ToBeLaunched.module.scss";
import LandingScreenContent from "../LandingScreenContent/LandingScreenContent";
import Resources from "../../resources/resources";
import CheckYourVibe from "./CheckYourVibe/CheckYourVibe";
import toBeLaunchedMetadata from "./toBeLaunchedMetadata";
import DownArrow from "./DownArrow/DownArrow";
import Header from "./Header/Header";
import Image from "next/image";
import config from "../../resources/config/config";
import { CloseButton } from "@chakra-ui/react";
import { useBreakpointValue } from '@chakra-ui/react';
import services from "../../services/services";
import WelcomeAboardModal from "./WelcomeAboardModal/WelcomeAboardModal";
import HushhButtonWrapper from "../HushhButtonWrapper";

export const metadata = toBeLaunchedMetadata;

export default function ToBeLaunched() {
  // console.log(process.env.NEXT_PUBLIC_SITE_ENV);
  const [showCheckYourVibe, setShowCheckYourVibe] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });
  let [isSignedIn, setIsSignedIn] = useState(false);
  let [fullName, setFullName] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    setInterval(() => {
      if (!isSignedIn) {
        services.authentication.isLoggedIn(setIsSignedIn);
        console.log('Signed In:',isSignedIn)
      }
      // setIsSignedIn(true)
    }, 500);
  }, [isSignedIn]);

  useEffect(() => {
    if (isSignedIn) {
      services.authentication.getFullName(setFullName);
    }
  }, [isSignedIn]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCheckYourVibe(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check if the user has just signed up
    if (isSignedUp) {
      setIsModalOpen(true);
    }
  }, [isSignedUp]);

  const handleClose = () => {
    setShowCheckYourVibe(false);
  };

  const handleSkip = () => {
    setShowCheckYourVibe(false);
    setShowSuccess(true);
  };

  return (
    <>
             {/* {config.featureFlags.vibeCheck ? <CheckYourVibe></CheckYourVibe> : <CheckYourVibe></CheckYourVibe>} */}
             {/* {showCheckYourVibe && isMobile && isSignedIn && (
        <div className={styles.CheckYourVibePopup}>
          <button onClick={handleClose} className={styles.CloseButton}><CloseButton/></button>
            <CheckYourVibe />
        </div>
      )} */}
             <div className={styles.container}>
      <Header
        isSignedUp={isSignedUp}
        setIsSignedUp={setIsSignedUp}
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
      <div className={styles.ToBeLaunched__Content} >
        {/* <div className={styles.ToBeLaunched__VibeLogoMobile}>
          <Image
            alt="Vibe Search"
            src={Resources.images.VibeLogo.src}
            width={"125"}
            height={"51"}
          />
        </div> */}
        <Description></Description>
        <div className={styles.ToBeLaunched__CompaniesMarquee}>
          <CompaniesMarquee></CompaniesMarquee>
        </div>
        <div className={styles.ToBeLaunched__CompaniesMarqueeMobile}>
          <CompaniesMarquee isMobile={true}></CompaniesMarquee>
        </div>
      </div>
      <DownArrow></DownArrow>
      
      <LandingScreenContent></LandingScreenContent>
      <CheckYourVibe />
      <WelcomeAboardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <HushhButtonWrapper />
    </div>
    </>
   
  );
}
