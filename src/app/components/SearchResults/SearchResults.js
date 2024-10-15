"use client";
import { useEffect, useState } from "react";
import utilities from "../utilities/utilities";
import config from "../../resources/config/config";
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
} from "@chakra-ui/react";
import { FiHeart, FiUser } from "react-icons/fi";
import services from "../../services/services";
import { useSearchParams } from "next/navigation";
import FiltersAndHistory from "./FiltersAndHistory/FiltersAndHistory";
import Footer from "../footer";
import styles from "./SearchResults.module.css";

export default function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [noMoreResults, setNoMoreResults] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isGridScrollAllowed, setIsGridScrollAllowed] = useState(true); // New state for page scroll control
  const searchParams = useSearchParams();

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
        setSearchResults,
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
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedProduct(null);
  };

  // Handle scrolling control when mouse enters the grid or left filter area
  const handleMouseEnterGrid = () => {
    setIsGridScrollAllowed(true); // Allow grid to scroll when mouse is on the product grid
  };

  const handleMouseLeaveGrid = () => {
    setIsGridScrollAllowed(false); // Disallow scrolling for the rest of the page
  };

  // Make sure the left section remains scrollable, even if the drawer is open
  const handleLeftScroll = (event) => {
    event.stopPropagation();
    event.target.scrollTop = event.target.scrollTop; // Allow scrolling in the left section
  };

  // Prevent body scroll if the mouse is not over the grid
  useEffect(() => {
    if (isDrawerOpen || !isGridScrollAllowed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDrawerOpen, isGridScrollAllowed]);

  return (
    <>
      <Box
        fontFamily={"Figtree, san-serif"}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        minH="100vh"
        px={{ md: 4, base: 1 }}
        pb={{ md: 4, base: 1 }}
      >
        {/* Left Filter Section */}
        <VStack
          align="start"
          p={4}
          minW={{ base: "100%", md: "300px" }}
          h={"100vh"}
          position={"sticky"}
          borderRadius="md"
          top={"0"}
          overflowY="auto" // Ensure the left section can scroll
          onScroll={handleLeftScroll}
        >
          <div className={`${styles.SearchResults__Filters}`}>
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
          </div>
        </VStack>

        {/* Main Content Section */}
        <Box
          bg={"white"}
          zIndex={10}
          flex={1}
          px={{ md: 4, base: 1 }}
          pb={{ md: 4, base: 1 }}
          display="flex"
          flexDirection="column"
          onMouseEnter={handleMouseEnterGrid} // Allow page scroll when mouse is over grid
          onMouseLeave={handleMouseLeaveGrid} // Disallow page scroll when mouse leaves grid
        >
          {/* Header Section */}
          <HStack
            bg={"white"}
            py={{ md: 2, base: 1 }}
            pos={"sticky"}
            zIndex={11}
            mt={{ md: 4, base: 1 }}
            top={"0"}
            mb={{ md: 4, base: 1 }}
            spacing={4}
            justifyContent="space-between"
          >
            <HStack spacing={4}>
              <Text fontSize="2xl" fontWeight="bold">
                Vibe
              </Text>
              <utilities.SearchBox />
            </HStack>
            <HStack spacing={4}>
              <FiHeart size={24} onClick={() => (window.location.href = "/wishlist")} />
              <Avatar icon={<FiUser />} bg="gray.500" />
            </HStack>
          </HStack>

          <HStack display={"flex"} gap={{ md: 14, base: 5 }} alignItems={"flex-start"} flexDirection={"row"}>
            {/* Product Results */}
            <Grid
              flex={1}
              templateColumns={{ base: "1fr", md: isDrawerOpen ? "repeat(2, 1fr)" : "repeat(4, 1fr)" }}
              gap={{ md: 14, base: 5 }}
              mt={{ md: "2rem", base: "1rem" }}
              mb={{ md: "6rem", base: "2rem" }}
              overflowY="auto" // Allow grid scrolling
              maxH="100vh" // Constrain grid to viewport height
            >
              {Object.values(searchResults).map((product, index) => (
                <Box
                  key={index}
                  position="relative"
                  borderRadius="10px"
                  overflow="hidden"
                  bg="#F8F4F2"
                  minH="350px"
                  onClick={() => openDrawer(product)}
                  cursor="pointer"
                >
                  <Image
                    src={product.image || "/path/to/default-image.jpg"}
                    alt={product.product_title}
                    width="100%"
                    minH="300px"
                    maxH="300px"
                    objectFit="cover"
                  />
                  <Box p={3} bg={"#F8F4F2"}>
                    <Text fontWeight="600" color={"#000000"} noOfLines={1}>
                      {product.product_title}
                    </Text>
                    <Text fontWeight="600" color="#757575" noOfLines={1}>
                      {product.description}
                    </Text>
                    {product.price_available && (
                      <Text fontWeight="600" color={"#9F9F9F"} noOfLines={1}>
                        {product.currency} {product.price}
                      </Text>
                    )}
                  </Box>
                </Box>
              ))}
            </Grid>

            {/* Right Sidebar for Product Details */}
            {isDrawerOpen && (
              <Box
                width={{ base: "100%", md: "40%" }}
                position="sticky"
                top={0}
                bg="white"
                boxShadow="lg"
                zIndex={10}
                overflowY="auto"
                height="100vh"
              >
                <HStack borderTopRadius={"10px"} p={4} bg={"#F4EFEB"} justifyContent={"space-between"}>
                  <Text fontSize="2xl" fontWeight="bold">
                    {selectedProduct?.product_title}
                  </Text>
                  <svg onClick={closeDrawer} width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                      fill="#9AA0A6"
                    />
                  </svg>
                </HStack>

                {selectedProduct && (
                  <>
                    <Image
                      src={selectedProduct.image || "/path/to/default-image.jpg"}
                      alt={selectedProduct.product_title}
                      minW="100%"
                      maxH={"621px"}
                      objectFit="cover"
                    />
                    <Text fontWeight="bold">{selectedProduct.brand}</Text>
                    <Text>{selectedProduct.description}</Text>
                    {selectedProduct.price_available && (
                      <Text fontWeight="bold" fontSize="lg">
                        {selectedProduct.currency} {selectedProduct.price}
                      </Text>
                    )}
                    <Button as={Link} href={selectedProduct.product_url} isExternal colorScheme="purple" width="full">
                      Visit Product Page
                    </Button>
                  </>
                )}
              </Box>
            )}
          </HStack>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
