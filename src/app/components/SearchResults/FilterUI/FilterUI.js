"use client";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import FilterAccordion from "./FilterAccordian/FilterAccordian";
import Image from "next/image";
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
  Text
} from "@chakra-ui/react";
import FilterLine from "../../svg/filterLine.svg";
import brands from "../../../resources/config/brands";
const FilterUI = ({ setSelectedBrands, selectedBrands }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItems, setSelectedItems] = useState([]);
  const toggleItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
    console.log("selected items: ", selectedItems.length);
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
        spacing={4}
      >
        <Button
          bg={"transparent"}
          color={"#222222"}
          fontWeight={"700"}
          borderRadius={"4px"}
          border={"1px"}
          _hover={{ bg: "none", cursor: "pointer" }}
          borderColor={"#222222"}
          onClick={onOpen}
          gap={{ md: "1rem", base: "0.5rem" }}
        >
          All Filters (1)
          <Image src={FilterLine} alt="Vibe Filters" />
        </Button>

        {/* {["LV", "Gucci", "Dolce & Gabbana"].map((item) => (
            <Button
              key={item}
              onClick={() => toggleItem(item)}
              minW="75px"
              _active={{ fontWeight: "700", borderColor: "black" }}
              bg={"transparent"}
              color="#222222"
              _hover={{ bg: "none", cursor: "pointer" }}
              fontWeight={selectedItems.includes(item) ? "700" : "400"}
              borderRadius={"4px"}
              border={selectedItems.includes(item) ? "2px" : "1px"}
              p={4}
              borderColor="#222222"
            >
              {item}
            </Button>
          ))} */}
        <Drawer
          placement="left"
          onClose={onClose}
          isOpen={isOpen}
          size={{ md: "sm" }}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              color={"#222"}
              fontSize={{ md: "1.75rem", base: "1rem" }}
              textOverflow={"ellipsis"}
              whiteSpace={"nowrap"}
              fontWeight={"400"}
              fontFamily={"Figtree, sans-serif"}
            >
              <Text>All Filters</Text>
              {/* <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setSelectedBrands([]); 
                    resetSearchResults(); 
                    
                  }}
                >
                  Clear Filters
                </Button> */}
              {selectedBrands.length > 0 && (
                <Button onClick={clearFilters}>Clear Filters</Button>
              )}
            </DrawerHeader>
            <DrawerBody>
              <FilterAccordion
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                brands={brands}
              />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
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
    </>
  );
};

export default FilterUI;
