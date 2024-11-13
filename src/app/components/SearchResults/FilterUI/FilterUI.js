"use client";
import {useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import FeatureBar from "./FeatureBar/FeatureBar";
import Categories from "./Categories/Categories";
import LeftDrawer from "./LeftDrawer/LeftDrawer";
import { Divider } from "@chakra-ui/react";

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
  brands,
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
      <FeatureBar onOpen={onOpen} query={query}></FeatureBar>
      <Divider
        mx={{ md: "4rem", base: "1rem" }}
        mt={{ md: "1rem", base: "0.5rem" }}
        w={"90%"}
        stroke={"#E6E6E6"}
      />

      <Categories
        clearAll={clearAll}
        selectedItems={selectedItems}
        toggleItem={toggleItem}
      ></Categories>

      <LeftDrawer
        applyFilter={applyFilter}
        applyGenderFilter={applyGenderFilter}
        brands={brands}
        isOpen={isOpen}
        onClose={onClose}
        priceRange={priceRange}
        selectedBrands={selectedBrands}
        setPriceRange={setPriceRange}
        setSelectedBrands={setSelectedBrands}
        setSelectedGenders={setSelectedGenders}
      ></LeftDrawer>
    </>
  );
};

export default FilterUI;
