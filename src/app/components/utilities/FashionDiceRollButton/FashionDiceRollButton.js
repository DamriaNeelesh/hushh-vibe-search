"use client";
import { HStack, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Lottie from "lottie-react";
import Dice from "../../svg/dice.svg";
import diceAnimation from "../../gif/diceAnimation.json";
import { useState, useEffect } from "react";
import styles from "./FashionDiceRoll.module.scss";
import figtree from "../../../fonts/Figtree";
import fashionDiceRoll from "./fashionDiceRoll/fashionDiceRoll";
import { useRouter } from 'next/navigation';

export default function FashionDiceRoll({ buttonWidth }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`${styles.FashionDiceRoll} ${figtree.className}`}
      style={{ minWidth: buttonWidth ? buttonWidth : "inherit" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => fashionDiceRoll(router)}
    >
      {isHovered ? (
        <Lottie
          className={styles.FashionDiceRoll__Dice}
          animationData={diceAnimation}
          style={{ width: "32pt", height: "32pt" }}
          width="34"
          height="34"
          loop={true}
        />
      ) : (
        <Image
          className={styles.FashionDiceRoll__Dice}
          src={Dice}
          alt="Hushh Fashion Dice"
        />
      )}
      <Text
        color="#222222"
        fontWeight="700"
        lineHeight="22px"
        fontSize={{ md: "1rem", base: "0.65rem" }}
      >
        Fashion Dice Roll
      </Text>
    </div>
  );
}
