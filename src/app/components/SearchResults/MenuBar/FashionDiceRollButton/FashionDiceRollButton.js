import { HStack, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Lottie from "lottie-react";
import utilities from "../../../utilities/utilities";
import fashionDiceRoll from "../../services/fashionDiceRoll";
import Dice from "../../../svg/dice.svg";
import diceAnimation from "../../../gif/diceAnimation.json";
import ClockIcon from "../../../svg/clockHistory.svg";
import { useState } from "react";
export default function FashionDiceRoll() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <HStack pos={"absolute"} right={"7%"} gap={{ md: "1rem", base: "0.5rem" }}>
      <Box
        onClick={() => {
          utilities.ComingSoonToast(toast);
        }}
        cursor={"pointer"}
        border="1px solid #DFE1E5"
        borderRadius="10px"
        p={{ md: "0.85rem" }}
      >
        <Image
          src={ClockIcon}
          alt="Vibe History"
          width="18"
          height="18"
          style={{ width: "18px", height: "18px" }}
        />
      </Box>
      <HStack
        align="center"
        flexDirection="row"
        justifyContent="center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        alignItems="center"
        cursor={"pointer"}
        border="1px solid #DFE1E5"
        borderRadius="10px"
        minW="13rem"
        onClick={() => {
          fashionDiceRoll();
        }}
      >
        {isHovered ? (
          <Lottie
            animationData={diceAnimation}
            style={{ width: "44px", height: "44px" }}
            width="44"
            height="44"
            loop={true}
          />
        ) : (
          <Image src={Dice} alt="Hushh Fashion Dice" />
        )}
        <Text
          color="#222222"
          fontWeight="700"
          lineHeight="22px"
          fontSize={{ md: "1rem", base: "0.65rem" }}
        >
          Fashion Dice Roll
        </Text>
      </HStack>
    </HStack>
  );
}
