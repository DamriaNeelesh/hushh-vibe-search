"use client";
import {
  DrawerCloseButton,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import FilterAccordion from "./FilterAccordian/FilterAccordian";
import Image from "next/image";
import fashionDiceRoll from "../services/fashionDiceRoll";
import styles from "./FilterUI.module.css";
import {
  HStack,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Divider,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import Lottie from "lottie-react";
import Dice from "../../svg/dice.svg";
import FilterLine from "../../svg/filterLine.svg";
import { useMediaQuery } from "@chakra-ui/react";
import diceAnimation from "../../gif/diceAnimation.json";
import config from "../../../resources/config/config";
const FilterUI = ({
  setSelectedBrands,
  selectedBrands,
  applyFilter,
  query,
  setSelectedGenders,
  selectedGenders,
  applyGenderFilter,
  onCloseGenders,
  priceRange,
  setPriceRange,
  brands
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItems, setSelectedItems] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const toggleItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]); // Clear the selected brands
  };

  const clearAll = () => {
    setSelectedItems([]);
  };

  const handleClearFilters = () => {
    setSelectedBrands([]); // Clear selected brands
    window.location.reload(); // Reload the page
  };

  return (
    <>
      {/* <HStack
          mx={{ md: "4rem", base: "1rem" }}
          color="#222222"
          mb={{ md: "1.25rem", base: "0.65rem" }}
          gap={{ md: "1.25rem", base: "0.5rem" }}
          fontWeight="400"
          fontSize={{ md: "1rem", base: "0.65rem" }}
          lineHeight="22px"
        >
          {["Brands", "Clothing", "Shoes", "Bags"].map((item) => (
            <Text
              key={item}
              onClick={() => toggleItem(item)}
              cursor="pointer"
              fontWeight={selectedItems.includes(item) ? "700" : "400"}
            >
              {item}
            </Text>
          ))}
        </HStack> */}

      <HStack
        my={{ md: "1.25rem", base: "0.65rem" }}
        mx={{ md: "4rem", base: "1rem" }}
        spacing={{ md: 4, base: 0 }}
        display="flex"
        flexDirection="row"
        justifyContent={{ base: "space-between", md: "flex-start" }}
      >
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
        <div className={`${styles.FilterUI__Query} figtree`}>{query}</div>
        <HStack
          align="center"
          flexDirection="row"
          justifyContent="center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          alignItems="center"
          cursor="pointer"
          display={{ md: "none", base: "flex" }}
          border="1px solid #DFE1E5"
          borderRadius="10px"
          gap={0}
          minW={{ md: "13rem", base: "9rem" }}
          onClick={() => {
            fashionDiceRoll();
          }}
        >
          {isHovered ? (
            <Lottie
              animationData={diceAnimation}
              style={{ width: "34px", height: "34px" }}
              width="34"
              height="34"
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
      <Divider
        mx={{ md: "4rem", base: "1rem" }}
        mt={{ md: "1rem", base: "0.5rem" }}
        w={"90%"}
        stroke={"#E6E6E6"}
      />

      <HStack spacing={4} mt={4} mx={{ md: "4rem", base: "1rem" }}>
        {selectedItems.map((item) => (
          <Tag size="lg" key={item} borderRadius="4px" bg={"#F5F5F5"}>
            <TagLabel
              color={"#222222"}
              fontSize={{ md: "1rem", base: "0.5rem" }}
              lineHeight={"22px"}
            >
              {item}
            </TagLabel>
            <TagCloseButton onClick={() => toggleItem(item)} />
          </Tag>
        ))}
        {selectedItems.length > 0 && (
          <Button variant="link" onClick={clearAll}>
            Clear all
          </Button>
        )}
      </HStack>

      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        size={{ md: "sm" }}
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader
            color={"#222"}
            fontSize={{ md: "1.75rem", base: "1.2rem" }}
            textOverflow={"ellipsis"}
            whiteSpace={"nowrap"}
            fontWeight={"400"}
            fontFamily={"Figtree, sans-serif"}
          >
            All Filters
          </DrawerHeader>
          <DrawerBody>
            <FilterAccordion
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              brands={brands}
              genders={config.genders}
              setSelectedGenders={setSelectedGenders}
              selectedGenders={selectedGenders}
              onApplyFilter={() => {
                applyFilter();
                onClose(); // Close the drawer
              }}
              onApplyGenderFilter={() => {
                applyGenderFilter();
                onClose();
              }}
              onClose={onClose}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FilterUI;
