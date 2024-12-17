"use client";
import SwipeGame from "./SwipeGame/SwipeGame";
import styles from "./CheckYourVibe.module.scss";
import SwipeLeftInstruction from "./SwipeLeftInstruction/SwipeLeftInstruction";
import SwipeRightInstruction from "./SwipeRightInstruction/SwipeRightInstruction";
import SwipeLeftInstructionMobile from "./SwipeLeftInstructionMobile/SwipeLeftInstructionMobile";
import SwipeRightInstructionMobile from "./SwipeRightInstructionMobile/SwipeRightInstructionMobile";
import { useState } from "react";
import FashionCard from "./SwipeGame/FashionCard/FashionCard";
import cardData from "./SwipeGame/resources/config/cardData";
import { useEffect } from "react";
import figtree from "../../../fonts/Figtree";
import Lottie from 'react-lottie';
import TickAnimation from "../../../components/gif/tickAnimation.json"
import { useBreakpointValue } from '@chakra-ui/react';

export default function CheckYourVibe() {
  let [isAllSwiped, setIsAllSwiped] = useState(false);
  let [rights, setRights] = new useState([]);
  let [lefts, setLefts] = new useState([]);
  const [cards, setCards] = useState(cardData);
  const [showCheckYourVibe, setShowCheckYourVibe] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: TickAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCheckYourVibe(true);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setShowCheckYourVibe(false);
    setShowSuccess(true);
  };

  useEffect(() => {
    cards.length == 0 ? setIsAllSwiped(true) : "";
  }, [cards]);

  return (
    <>
      {isAllSwiped ? (
        // <FashionCard cardData={cardData} rights={rights}></FashionCard>
        <div className={styles.SuccessMessage}>
          <div className={styles.SuccessAnimation}>
            <Lottie options={defaultOptions} height={100} width={100} />
            <p>Success! Your vibe has been checked.</p>
          </div>
        </div>
      ) : (
        <div className={`${styles.CheckYourVibe} ${figtree.className}`}>
          <div className={`${styles.CheckYourVibe__Title}`}>Find items from your photos videos or  
          shown in your favorite social media </div>
          <div className={`${styles.CheckYourVibe__SubTitle}`}>
          is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard 
          </div>
          <div
            className={`${styles.CheckYourVibe__SwipeGameMobile}  ${figtree.className}`}
          >
            {/* <div className={`${styles.CheckYourVibe__AnimsWrapperMobile}`}>
              <SwipeLeftInstructionMobile></SwipeLeftInstructionMobile>
              <SwipeRightInstructionMobile></SwipeRightInstructionMobile>
            </div> */}
            <div className={`${styles.CheckYourVibe__SwipeGameMobile}`}>
              <SwipeGame
                setIsAllSwiped={setIsAllSwiped}
                rights={rights}
                setRights={setRights}
                lefts={lefts}
                setLefts={setLefts}
                cards={cards}
                setCards={setCards}
              ></SwipeGame>
            </div>
          </div>
          <div
            className={`${styles.CheckYourVibe__SwipeGame}  ${figtree.className}`}
          >
            <SwipeLeftInstruction></SwipeLeftInstruction>
            <SwipeGame
              setIsAllSwiped={setIsAllSwiped}
              rights={rights}
              setRights={setRights}
              lefts={lefts}
              setLefts={setLefts}
              cards={cards}
              setCards={setCards}
            ></SwipeGame>
            {/* <SwipeRightInstruction></SwipeRightInstruction> */}
            <button onClick={handleSkip} className={styles.SkipButton}>
                Skip For Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}
