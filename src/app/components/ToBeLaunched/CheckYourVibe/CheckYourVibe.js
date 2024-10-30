"use client"
import SwipeGame from "./SwipeGame/SwipeGame";
import styles from "./CheckYourVibe.module.css";
import SwipeLeftInstruction from "./SwipeLeftInstruction/SwipeLeftInstruction";
import SwipeRightInstruction from "./SwipeRightInstruction/SwipeRightInstruction";
import SwipeLeftInstructionMobile from "./SwipeLeftInstructionMobile/SwipeLeftInstructionMobile";
import SwipeRightInstructionMobile from "./SwipeRightInstructionMobile/SwipeRightInstructionMobile";
import { useState } from "react";
import FashionCard from "./SwipeGame/FashionCard/FashionCard";
import cardData from "./SwipeGame/resources/config/cardData";
import { useEffect } from "react";
export default function CheckYourVibe() {
  let [isAllSwiped, setIsAllSwiped] = useState(false);
  let [rights, setRights] = new useState([]);
  let [lefts, setLefts] = new useState([]);
  const [cards, setCards] = useState(cardData);
  useEffect(() => {
    cards.length == 0 ? setIsAllSwiped(true) : "";
  }, [cards]);
  return (
    <>
      {isAllSwiped ? (
        <FashionCard cardData={cardData} rights={rights}></FashionCard>
      ) : (
        <div className={`${styles.CheckYourVibe} figtree`}>
          <div className={`${styles.CheckYourVibe__Title}`}>Vibe Check</div>
          <div className={`${styles.CheckYourVibe__SubTitle}`}>
            Tell us your style - Click and swipe through different styles
          </div>
          <div className={`${styles.CheckYourVibe__SwipeGameMobile} figtree`}>
            <div className={`${styles.CheckYourVibe__AnimsWrapperMobile}`}>
              <SwipeLeftInstructionMobile></SwipeLeftInstructionMobile>
              <SwipeRightInstructionMobile></SwipeRightInstructionMobile>
            </div>
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
          <div className={`${styles.CheckYourVibe__SwipeGame} figtree`}>
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
            <SwipeRightInstruction></SwipeRightInstruction>
          </div>
        </div>
      )}
    </>
  );
}
