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
  Grid, // Alias Chakra UI's Image
  Button,
  Link,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Divider,
  Image as ChakraImage,
  Tag,
  TagLabel,
  TagCloseButton,
  AccordionIcon,
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
import Dice from "../svg/dice.svg";
import FilterLine from "../svg/filterLine.svg";
import diceAnimation from "../gif/diceAnimation.json";
import Lottie from "lottie-react";
import BrandFilters from "./FiltersAndHistory/BrandFilters/BrandFilters";
import HistoryComponent from "./FiltersAndHistory/HistoryComponent/HistoryComponent";

const FilterUI = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItems, setSelectedItems] = useState([]);
  const toggleItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
    console.log("selected items: ", selectedItems.length);
  };

  const clearAll = () => {
    setSelectedItems([]);
  };

  return (
    <>
      <HStack
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
      </HStack>

      <HStack mx={{ md: "4rem", base: "1rem" }} spacing={4}>
        <Button
          bg={"transparent"}
          color={"#222222"}
          fontWeight={"700"}
          borderRadius={"4px"}
          border={"1px"}
          borderColor={"#222222"}
          onClick={onOpen}
        >
          All Filters (1)
          <Image src={FilterLine} alt="Vibe Filters" />
        </Button>

        {["LV", "Gucci", "Dolce & Gabbana"].map((item) => (
          <Button
            key={item}
            onClick={() => toggleItem(item)}
            minW="75px"
            _active={{ fontWeight: "700", borderColor: "black" }}
            bg={"transparent"}
            color="#222222"
            fontWeight={selectedItems.includes(item) ? "700" : "400"}
            borderRadius={"4px"}
            border={selectedItems.includes(item) ? "2px" : "1px"}
            p={4}
            borderColor="#222222"
          >
            {item}
          </Button>
        ))}
        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size={{md:'sm'}}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader color={'#222'} fontSize={{md:'1.75rem',base:'1rem'}} textOverflow={'ellipsis'} whiteSpace={'nowrap'} fontWeight={'400'} fontFamily={'Figtree, sans-serif'}>All Filters</DrawerHeader>
            <DrawerBody>
              <FilterAccordion />
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

const FilterAccordion = ({ setSelectedBrands, selectedBrands }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Accordion allowToggle fontFamily={'Figtree, sans-serif'}>
      <AccordionItem>
        <h2>
          <AccordionButton height={{md:'3.4rem',base:'2rem'}}>
            <Box fontWeight={'400'} flex="1" fontSize={{md:'1.2rem',base:'0.65rem'}} lineHeight={'22px'} color={'#222222'} textAlign="left">
              Brands
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <BrandFilters
            setSelectedBrands={setSelectedBrands}
            selectedBrands={selectedBrands}
          />{" "}
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
        <AccordionButton height={{md:'3.4rem',base:'2rem'}}>
        <Box fontWeight={'400'} flex="1" fontSize={{md:'1.2rem',base:'0.65rem'}} lineHeight={'22px'} color={'#222222'} textAlign="left">
        History
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <HistoryComponent
            setSelectedBrands={setSelectedBrands}
            selectedBrands={selectedBrands}
          />
        </AccordionPanel>
      </AccordionItem>

      {/* Add more accordion items as needed */}
    </Accordion>
  );
};

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
  const [isHovered, setIsHovered] = useState(false);

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
        position="sticky"
        top={0}
        textAlign={"center"}
        zIndex={100}
        justifyContent="space-between"
        mx={{ md: "4rem", base: "1rem" }}
      >
        <HStack
          align="center"
          flexDirection={"row"}
          justifyContent={"center"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          alignItems={"center"}
        >
          {isHovered ? (
            <Lottie
              animationData={diceAnimation}
              style={{ width: "44px", height: "44px" }}
              width={"44"}
              height={"44"}
              loop={true}
            />
          ) : (
            <Image src={Dice} alt="Hushh Fashion Dice" />
          )}
          <Text
            color={"#222222"}
            fontWeight={"700"}
            lineHeight={"22px"}
            fontSize={{ md: "1rem", base: "0.65rem" }}
          >
            Fashion Dice Roll
          </Text>
        </HStack>
        <Flex
          gap={{ md: "1rem", base: "0.5rem" }}
          align="center"
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          flex={1}
          mx={6}
        >
          <Image
            src={VibeText}
            width={"100"}
            height={"40%"}
            alt="Vibe Search"
          />
        </Flex>
        <HStack spacing={6}>
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.3891 11.2821C13.5644 10.6479 14.4945 9.63956 15.0321 8.41695C15.5696 7.19435 15.6839 5.82734 15.3568 4.53245C15.0297 3.23756 14.2799 2.08882 13.2262 1.26819C12.1725 0.44756 10.8751 0.00195313 9.53956 0.00195312C8.204 0.00195313 6.90661 0.44756 5.8529 1.26819C4.79919 2.08882 4.0494 3.23756 3.7223 4.53245C3.3952 5.82734 3.50948 7.19435 4.04704 8.41695C4.58461 9.63956 5.51472 10.6479 6.69006 11.2821C3.50106 11.8671 0.539062 13.2301 0.539062 14.0001V18.0001H18.5391V14.0001C18.5391 13.2301 15.5771 11.8681 12.3891 11.2821ZM13.5391 6.00014C13.5391 7.061 13.1176 8.07842 12.3675 8.82857C11.6173 9.57871 10.5999 10.0001 9.53906 10.0001C8.4782 10.0001 7.46078 9.57871 6.71064 8.82857C5.96049 8.07842 5.53906 7.061 5.53906 6.00014C5.53906 4.93927 5.96049 3.92186 6.71064 3.17171C7.46078 2.42157 8.4782 2.00014 9.53906 2.00014C10.5999 2.00014 11.6173 2.42157 12.3675 3.17171C13.1176 3.92186 13.5391 4.93927 13.5391 6.00014ZM16.5391 14.7481V16.0001H2.53906V14.7481C2.91606 14.5301 3.48606 14.2681 4.21206 14.0081C5.80806 13.4381 7.82606 13.0001 9.53906 13.0001C11.2521 13.0001 13.2691 13.4381 14.8661 14.0091C15.5921 14.2681 16.1621 14.5301 16.5391 14.7491V14.7481Z"
              fill="#222222"
            />
          </svg>
          <FiHeart size={24} cursor="pointer" />
        </HStack>
      </HStack>
      <HStack alignItems={"center"} justifyContent={"center"}>
        <utilities.SearchBox></utilities.SearchBox>
      </HStack>

      <FilterUI />
      <Box
        fontFamily="Figtree, sans-serif"
        mx={{ md: "2rem", base: "1rem" }}
        pos={"relative"}
      >
        <Flex pos="relative">
          {/* Main Content Section */}
          <Box flex={1} p={6}>
            <Flex gap={{ md: "3rem", base: "1.25rem" }}>
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
                        <Box key={index} padding="0" boxShadow="lg" bg="white">
                          <Skeleton height="280px" />
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
                              maxW={'309px'}
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
