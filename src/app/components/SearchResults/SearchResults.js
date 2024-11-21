"use client";

import { useEffect, useState, useRef } from "react";
import {
  useDisclosure,
  Image as ChakraImage,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import SearchResultWrapper from "./SearchResultsWrapper/SearchResultsWrapper";
import services from "../../services/services";
import { useRouter, useSearchParams } from "next/navigation";
import Footer from "../footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import "react-loading-skeleton/dist/skeleton.css";
import utilities from "../utilities/utilities";
import LoadingBar from "react-top-loading-bar";
import FilterUI from "./FilterUI/FilterUI";
import { useMediaQuery } from "@chakra-ui/react";
import callVibeIt from "./services/callVibeIt";
import ProductDrawerDynamic from "./ProductDrawerDynamic/ProductDrawerDynamic";
import MenuBar from "./MenuBar/MenuBar";
import PreloadImageLink from "./PreloadImageLinks/PreloadImageLinks";
export default function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [noMoreResults, setNoMoreResults] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const searchParams = useSearchParams();
  const gridRef = useRef(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { brandDrawer, setIsBrandDrawer } = useState(false);

  const [brands, setBrands] = useState([]); // State to hold brands

  const loadingBarRef = useRef(null);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isLargerThanMobile] = useMediaQuery("(min-width: 769px)");

  let [errorImages, setErrorImages] = useState(new Set([]));
  const [touchStartY, setTouchStartY] = useState(0);
  const [priceRange, setPriceRange] = useState([10, 1050]);
  useEffect(() => {
    services.authentication.getSession();
  }, []);
  useEffect(() => {
    callVibeIt(
      loadingBarRef,
      searchParams,
      currentPage,
      setSearchResults,
      setIsLoading,
      searchResults,
      selectedBrands,
      noMoreResults,
      setBrands,
      true,
      priceRange,
      selectedGenders.length > 0,
      selectedGenders.length > 0 ? selectedGenders[0] : null,
      0
    );
  }, [
    searchParams,
    currentPage,
    selectedBrands,
    noMoreResults,
    selectedGenders,
    priceRange,
  ]);

  const additionalImages = selectedProduct?.additional_images
    ? JSON.parse(selectedProduct.additional_images)
    : [];

  const allImages = [selectedProduct?.image, ...additionalImages];

  const applyFilter = () => {
    // Logic to apply the filter
    setSearchResults([]); // Reset search results
    callVibeIt(
      loadingBarRef,
      searchParams,
      currentPage,
      setSearchResults,
      setIsLoading,
      searchResults,
      selectedBrands,
      noMoreResults,
      setBrands,
      true,
      priceRange,
      selectedGenders.length > 0,
      selectedGenders.length > 0 ? selectedGenders[0] : null
    ,0);
  };
  let [query, setQuery] = useState("");
  useEffect(() => {
    setQuery(searchParams.get("query"));
  }, []);
  return (
    <>
      <Head>
        {Object.values(searchResults).map((product, index) => {
          <PreloadImageLink index={index} product={product}></PreloadImageLink>;
        })}
      </Head>
      <LoadingBar color="#E0D3C8" height={"0.35rem"} ref={loadingBarRef} />
      {/* Mobile UI Drawer */}
      {isMobile && (
        <ProductDrawerDynamic
          allImages={allImages}
          isOpen={isOpen}
          onClose={onClose}
          selectedProduct={selectedProduct}
          setTouchStartY={setTouchStartY}
          touchStartY={touchStartY}
        ></ProductDrawerDynamic>
      )}
      <utilities.Header />
      <MenuBar></MenuBar>
      <FilterUI
        setSelectedBrands={setSelectedBrands}
        selectedBrands={selectedBrands}
        applyFilter={applyFilter} // Pass the apply filter function
        onClose={brandDrawer}
        query={query}
        setSelectedGenders={setSelectedGenders}
        selectedGenders={selectedGenders}
        applyGenderFilter={applyFilter}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        brands={brands}
      />
      <SearchResultWrapper
        currentPage={currentPage}
        gridRef={gridRef}
        isDrawerOpen={isDrawerOpen}
        isLoading={isLoading}
        noMoreResults={noMoreResults}
        query={query}
        searchResults={searchResults}
        setCurrentPage={setCurrentPage}
        errorImages={errorImages}
        setErrorImages={setErrorImages}
        setSelectedProduct={setSelectedProduct}
        setIsDrawerOpen={setIsDrawerOpen}
        onOpen={onOpen}
        isMobile={isMobile}
        isLargerThanMobile={isLargerThanMobile}
        selectedProduct={selectedProduct}
        allImages={allImages}
      ></SearchResultWrapper>
      <Footer />
    </>
  );
}
