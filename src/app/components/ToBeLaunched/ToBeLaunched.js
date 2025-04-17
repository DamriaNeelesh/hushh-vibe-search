'use client';

import React, { useState, useEffect } from "react";
import Description from "./Description/Description";
import CompaniesMarquee from "./CompaniesMarquee/CompaniesMarquee";
import styles from "./ToBeLaunched.module.scss";
import LandingScreenContent from "../LandingScreenContent/LandingScreenContent";
import Resources from "../../resources/config/config";
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
    <div className={styles.container}>
      <Header
        isSignedUp={isSignedUp}
        setIsSignedUp={setIsSignedUp}
        userDetails={userDetails}
        setUserDetails={setUserDetails}
      />
      <div className={styles.ToBeLaunched__Content}>
        <Description></Description>
        <div className={styles.ToBeLaunched__CompaniesMarquee}>
          <CompaniesMarquee></CompaniesMarquee>
        </div>
        <div className={styles.ToBeLaunched__CompaniesMarqueeMobile}>
          <CompaniesMarquee isMobile={true}></CompaniesMarquee>
        </div>
      </div>
      <DownArrow></DownArrow>
      
      <div className={styles.contentWrapper}>
        <LandingScreenContent></LandingScreenContent>
      </div>
      
      <WelcomeAboardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
