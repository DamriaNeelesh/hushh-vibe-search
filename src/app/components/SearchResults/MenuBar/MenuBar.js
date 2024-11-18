import { HStack, Box } from "@chakra-ui/react";
import utilities from "../../utilities/utilities";
export default function MenuBar() {
  return (
    <HStack
      w="100%"
      zIndex={100}
      gap={{ md: "1rem" }}
      alignItems="center"
      display={{ md: "flex", base: "none" }}
      justifyContent="space-evenly"
      position="relative"
      my={{ md: "0.5rem", base: "1rem" }}
      h={{ md: "3rem" }}
      // mb={'4rem'}
    >
      <Box
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
        zIndex={100}
        my={{ md: "2rem", base: "2rem" }}
      >
        <utilities.AnimatedSearchBox
          boxWidth={35}
        ></utilities.AnimatedSearchBox>
      </Box>
      {/* <FashionDiceRollButton></FashionDiceRollButton> */}
    </HStack>
  );
}
