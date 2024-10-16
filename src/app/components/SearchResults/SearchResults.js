"use client";

import { useEffect, useState, useRef } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Avatar,
  Grid,
  Image,
  Button,
  Link,
  Flex,
} from "@chakra-ui/react";
import { FiHeart, FiUser, FiSearch, FiX } from "react-icons/fi";
import services from "../../services/services";
import { useSearchParams } from "next/navigation";
import FiltersAndHistory from "./FiltersAndHistory/FiltersAndHistory";
import Footer from "../footer";
import styles from "./SearchResults.module.css";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [noMoreResults, setNoMoreResults] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const searchParams = useSearchParams();
  const gridRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    async function callVibeIt() {
      let search = searchParams.get("query");
      services.history.saveToHistory(search);
      let access_token = await services.authentication.getAccessToken();
      services.vibesearch.vibeIt(
        search || "",
        "",
        currentPage,
        20,
        (results) => {
          setSearchResults(results);
          setIsLoading(false); // Set loading to false when data is fetched
        },
        access_token,
        searchResults,
        selectedBrands,
        noMoreResults
      );
    }
    callVibeIt();
  }, [searchParams, currentPage, selectedBrands, noMoreResults]);

  const openDrawer = (product) => {
    setSelectedProduct(product);
    setIsDrawerOpen(true);
    document.body.style.overflow = "hidden"; // Prevent body scroll when drawer is open
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedProduct(null);
    document.body.style.overflow = "auto"; // Restore body scroll when drawer is closed
  };

  const handleScroll = (event, ref) => {
    event.stopPropagation();
    ref.current.scrollTop = ref.current.scrollTop + event.deltaY;
  };

  return (
    <>
      <HStack
        bg="white"
        py={4}
        px={6}
        position="sticky"
        top={0}
        // maxH="10vh"
        zIndex={100}
        justifyContent="space-between"
        borderBottom="1px solid #E2E8F0"
      >
        <Text fontSize="3xl" fontWeight="bold">
          Vibe
        </Text>
        <Flex align="center" flex={1} mx={6}>
          <Box position="relative" width="100%">
            {/* <utilities.SearchBox /> */}
            <Box
              position="absolute"
              right={3}
              top="50%"
              transform="translateY(-50%)"
            >
              <FiSearch />
            </Box>
          </Box>
        </Flex>
        <HStack spacing={6}>
          <FiHeart size={24} cursor="pointer" />
          <Avatar icon={<FiUser />} bg="gray.200" cursor="pointer" />
        </HStack>
      </HStack>
      <Box fontFamily="Figtree, sans-serif" pos={"relative"}>
        <Flex pos="relative">
          {/* Left Filter Section */}
          <VStack
            align="start"
            p={6}
            minW="300px"
            position="sticky"
            top="80px"
            maxH="90vh"
            overflowY="auto"
            // css={{
            //   '&::-webkit-scrollbar': { display: 'none' },
            //   msOverflowStyle: 'none',
            //   scrollbarWidth: 'none',
            // }}
          >
            <FiltersAndHistory
              setSelectedBrands={setSelectedBrands}
              selectedBrands={selectedBrands}
            />
            <Text fontWeight="bold" fontSize="lg" mt={4}>
              PRICE
            </Text>
            <Slider defaultValue={10} min={10} max={1050} step={10} mt={2}>
              <SliderTrack>
                <SliderFilledTrack bg="purple.500" />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text>$10 - $1050</Text>
          </VStack>

          {/* Main Content Section */}
          <Box flex={1} p={6}>
            <Flex gap={{ md: "2rem" }}>
              {/* Product Grid */}
              <Box
                ref={gridRef}
                flex={isDrawerOpen ? 1 : "100%"}
                pr={isDrawerOpen ? 4 : 0}
                overflowY="auto"
                maxH="100vh"
                onWheel={(e) => handleScroll(e, gridRef)}
                css={{
                  "&::-webkit-scrollbar": { display: "none" },
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                }}
              >
                <Grid
                  templateColumns={
                    isDrawerOpen ? "repeat(2, 1fr)" : "repeat(4, 1fr)"
                  }
                  gap={6}
                >
                {isLoading
          ? Array.from({ length: 9 }).map((_, index) => (
              <Box key={index} padding="6" boxShadow="lg" bg="white">
                <Skeleton height="200px" />
                <Skeleton height="40px" mt="4" />
                <Skeleton height="40px" mt="2" />
              </Box>
            )) :
             Object.values(searchResults).map((product, index) => (
              <Box
                      key={index}
                      borderRadius="md"
                      overflow="hidden"
                      bg="#F8F4F2"
                      minH="350px"
                      onClick={() => openDrawer(product)}
                      cursor="pointer"
                    >
                      <Image
                        src={product.image || "/path/to/default-image.jpg"}
                        alt={product.product_title}
                        objectFit="cover"
                        height="300px"
                        width="100%"
                      />
                      <Box p={3}>
                        <Text fontWeight="600" fontSize="sm">
                          {product.brand}
                        </Text>
                        <Text color="gray.600" fontSize="sm" noOfLines={1}>
                          {product.product_title}
                        </Text>
                        {product.price_available && (
                          <Text fontWeight="600" fontSize="sm" mt={1}>
                            {product.currency} {product.price}
                          </Text>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Grid>
              </Box>

              {/* Right Sidebar for Product Details */}
              {isDrawerOpen && (
                <Box
                  ref={drawerRef}
                  width="40%"
                  height={"100vh"}
                  bg="white"
                  boxShadow="-4px 0 10px rgba(0, 0, 0, 0.1)"
                  overflowY="auto"
                  position="relative"
                  // minH="100vh"
                  // overflow={'scroll'}
                  // onWheel={(e) => handleScroll(e, drawerRef)}
                  // css={{
                  //   '&::-webkit-scrollbar': { display: 'none' },
                  //   msOverflowStyle: 'none',
                  //   scrollbarWidth: 'none',
                  // }}
                >
                  <HStack
                    borderTopRadius="10px"
                    p={4}
                    bg="#F4EFEB"
                    justifyContent="space-between"
                  >
                    <Text fontSize="2xl" fontWeight="bold">
                      {selectedProduct?.brand}
                    </Text>
                    <FiX size={24} cursor="pointer" onClick={closeDrawer} />
                  </HStack>

                  {selectedProduct && (
                    <>
                      {/* <Image
                      src={selectedProduct.image || "/path/to/default-image.jpg"}
                      alt={selectedProduct.product_title}
                      width="100%"
                      height="70%"
                      objectFit="cover"
                    /> */}
                      <Carousel
                        showArrows={true}
                        showThumbs={false}
                        showStatus={false}
                        infiniteLoop={true}
                        useKeyboardArrows={true}
                        autoPlay={true}
                        swipeable={true}
                      >
                        {selectedProduct.additional_images.map(
                          (image, index) => (
                            <div key={index}>
                              <img
                                src={image || "/path/to/default-image.jpg"}
                                alt={`${selectedProduct.product_title} - ${
                                  index + 1
                                }`}
                                style={{
                                  width: "100%",
                                  height: "70%",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          )
                        )}
                      </Carousel>
                      <Box p={6}>
                        <HStack
                          gap={{ md: "4rem", base: "1rem" }}
                          justifyContent="space-between"
                        >
                          <Text
                            color="#757575"
                            fontSize="1.25rem"
                            fontWeight="600"
                          >
                            {selectedProduct.product_title}
                          </Text>
                          <Button
                            as={Link}
                            href={selectedProduct.product_url}
                            color="#273434"
                            bg="#F4EFEB"
                            rightIcon={<ChevronRightIcon />}
                          >
                            Visit
                          </Button>
                        </HStack>
                        {selectedProduct.price_available && (
                          <Text fontWeight="bold" fontSize="lg" mt={2}>
                            {selectedProduct.currency} {selectedProduct.price}
                          </Text>
                        )}
                        <Text
                          mt={2}
                          fontSize="16px"
                          color="#000"
                          mb={{ md: "4rem" }}
                        >
                          {selectedProduct.description}
                        </Text>
                        {/* <Text fontFamily={'700'}>Similar Products</Text> */}

                        <Box height={"2rem"}></Box>
                      </Box>
                    </>
                  )}
                </Box>
              )}
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </>
  );
}
