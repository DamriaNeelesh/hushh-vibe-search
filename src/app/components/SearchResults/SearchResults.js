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
  Image as ChakraImage, // Alias Chakra UI's Image
  Button,
  Link,
  Flex,
  IconButton,
} from "@chakra-ui/react";

import { FiHeart, FiUser, FiSearch, FiX } from "react-icons/fi";
import services from "../../services/services";
import { useSearchParams } from "next/navigation";
import FiltersAndHistory from "./FiltersAndHistory/FiltersAndHistory";
import Footer from "../footer";
import styles from "./SearchResults.module.css";
import VibeText from "../svg/vibeText.svg";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import utilities from "../utilities/utilities";
import Image from "next/image";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isFilterOpen, setIsFilterOpen] = useState(false)

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
    onOpen()
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
     <Drawer
        isOpen={isOpen}
        placement="bottom" // Set the drawer to open from the bottom
        onClose={onClose}
        size="4xl" // Use full size for mobile
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent borderTopRadius={'10px'} display={{base:'block',md:'none'}}>
          <DrawerCloseButton />
          <DrawerHeader>{selectedProduct?.product_title}</DrawerHeader>
          <DrawerBody>
            <Text>{selectedProduct?.description}</Text>
            {/* Add more product details here */}
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue">Add to Cart</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <HStack
        bg="white"
        py={4}
        px={{md:6,base:1}}
        position="sticky"
        top={0}
        // maxH="10vh"
        textAlign={{md:"center",base:'left'}}
        zIndex={100}
        justifyContent="space-between"
        borderBottom="1px solid #E2E8F0"
      >
        <Flex
          gap={{ md: "2rem", base: "1rem" }}
          align="center"
          justifyContent={{md:"center",base:'flex-start'}}
          alignItems={"center"}
          display={{md:'flex',base:'none'}}
          flex={1}
          mx={6}
        >
          <Image
            src={VibeText}
            width={"120"}
            height={"50%"}
            alt="Vibe Search"
          />
          <utilities.SearchBox></utilities.SearchBox>
        </Flex>
        <Flex
          gap={{ md: "2rem", base: "1rem" }}
          align="left"
          justifyContent={{md:"center",base:'flex-start'}}
          alignItems={"flex-start"}
          display={{md:'none',base:'flex'}}
          flex={1}
          mx={6}
        >
          <Image
            src={VibeText}
            width={"60"}
            height={"20%"}
            alt="Vibe Search"
          />
          {/* <utilities.SearchBox></utilities.SearchBox> */}
        </Flex>
        <HStack spacing={6}>
          <FiHeart size={24} cursor="pointer" />
          <Avatar icon={<FiUser />} bg="gray.200" cursor="pointer" />
        </HStack>
      </HStack>
      {/* Filter Section for Mobile Screens */}
      <IconButton
        icon={<FiFilter />}
        aria-label="Open Filters"
        display={{ base: "block", md: "none" }}
        onClick={() => setIsFilterOpen(true)}
        position="absolute"
        top="10px"
        left="10px"
        zIndex="1000"
      />
      <Drawer
        isOpen={isFilterOpen}
        placement="bottom"
        onClose={() => setIsFilterOpen(false)}
        size="full"
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent height={'85vh'} overflowY={'auto'} borderTopRadius={'10px'} display={{base:'block',md:'none'}}>
          <DrawerCloseButton pos={'sticky'} right={'0'} w={'100%'}/>
          <DrawerBody>
            <VStack
              align="start"
              p={6}
              overflowY="auto"
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>

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
            display={{md:"block",base:'none'}}
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
          <Box flex={1} p={{md:6,base:2}}>
            <Flex gap={{ md: "2rem",base:'0.5rem' }}>
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
                  templateColumns={{
                    base: "repeat(2, 1fr)", // 2 columns for mobile devices
                    md: isDrawerOpen ? "repeat(2, 1fr)" : "repeat(4, 1fr)", // 2 or 4 columns for medium and larger devices
                  }}
                  gap={{ md: 6, base: 2 }}
                >
                  {isLoading
                    ? Array.from({ length: 9 }).map((_, index) => (
                        <Box key={index} padding="6" boxShadow="lg" bg="white">
                          <Skeleton height="200px" />
                          <Skeleton height="40px" mt="4" />
                          <Skeleton height="40px" mt="2" />
                        </Box>
                      ))
                    : Object.values(searchResults).map((product, index) => (
                        <Box
                          key={index}
                          borderRadius="md"
                          overflow="hidden"
                          bg="#F8F4F2"
                          minH="350px"
                          cursor="pointer"
                          className="product-card"
                        >
                          <Box position="relative" className="image-container">
                            <ChakraImage
                              src={
                                product.image || "/path/to/default-image.jpg"
                              }
                              alt={product.product_title}
                              onClick={() => openDrawer(product)}
                              objectFit="cover"
                              height="300px"
                              width="100%"
                            />
                            <Box
                              className="favorite-button"
                              position="absolute"
                              bottom="0"
                              width="100%"
                              bg="#624737"
                              color="white"
                              textAlign="center"
                              p={2}
                              fontFamily={"Figtree, sans-serif"}
                              transform="translateY(100%)"
                              transition="transform 0.3s ease"
                              cursor={"pointer"}
                              onClick={async () => {
                                let access_token =
                                  await services.authentication.getAccessToken();
                                services.wishlist.addToWishList(
                                  product.id,
                                  access_token
                                );
                              }}
                            >
                              Add to Favorites
                            </Box>
                          </Box>

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
                  display={{base:'none',md:'block'}}
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
                                  maxHeight: "450px",
                                  // objectFit: "cover",
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
