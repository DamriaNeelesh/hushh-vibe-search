import { Button } from "@chakra-ui/react";
import Image from "next/image";
import FilterLine from "../../../../svg/filterLine.svg";
export default function FilterButton({ onOpen }) {
  return (
    <Button
      bg="transparent"
      color="#222222"
      fontWeight="700"
      borderRadius="4px"
      border="1px"
      _hover={{ bg: "none", cursor: "pointer" }}
      borderColor="#222222"
      onClick={onOpen}
      fontSize={{ md: "1rem", base: "0.65rem" }}
      gap={{ md: "1rem", base: "0.5rem" }}
    >
      All Filters
      <Image src={FilterLine} alt="Hushh Vibe Filters" />
    </Button>
  );
}
