"use client";

import { useEffect, useState, useRef } from "react";
import fashionDiceRoll from "./services/fashionDiceRoll";
import {
  Box,
  Text,
  HStack,
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
  DrawerCloseButton,
  DrawerFooter,
  Image as ChakraImage,
  useToast,
} from "@chakra-ui/react";

import { FiHeart, FiUser, FiSearch, FiX } from "react-icons/fi";
import services from "../../services/services";
import { useRouter, useSearchParams } from "next/navigation";
import Footer from "../footer";
import VibeText from "../svg/vibeText.svg";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import utilities from "../utilities/utilities";
import Image from "next/image";
import Dice from "../svg/dice.svg";
import diceAnimation from "../gif/diceAnimation.json";
import Lottie from "lottie-react";
import HistoryComponent from "./FiltersAndHistory/HistoryComponent/HistoryComponent";
import ClockIcon from "../svg/clockHistory.svg";
import LoadingBar from "react-top-loading-bar";
import FilterUI from "./FilterUI/FilterUI";
import { useMediaQuery } from "@chakra-ui/react";
import handleProductClick from "./services/handleProductClick";
import callVibeIt from "./services/callVibeIt";
import openDrawer from "./services/openDrawer";
import closeDrawer from "./services/closeDrawer";
import handleScroll from "./services/handleScroll";
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [brands, setBrands] = useState([]); // State to hold brands
  const router = useRouter();
  const loadingBarRef = useRef(null);
  const [isMobileProductDrawer, setIsMobileProductDrawer] = useState();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isLargerThanMobile] = useMediaQuery("(min-width: 769px)");
  const toast = useToast();
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
      setBrands
    );
  }, [searchParams, currentPage, selectedBrands, noMoreResults]);
  const additionalImages = selectedProduct?.additional_images
    ? JSON.parse(selectedProduct.additional_images)
    : [];
  return (
    <>
      <LoadingBar color="#E0D3C8" height={"0.35rem"} ref={loadingBarRef} />
      {/* Mobile UI Drawer */}
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        size="full"
        blockScrollOnMount={false} // Allow body scrolling when the drawer is open
      >
        <DrawerOverlay />
        <DrawerContent
          borderTopRadius="10px"
          display={{ base: "block", md: "none" }}
          height="80vh" // Set the height to 80% of the viewport height
          marginTop="10vh" // Add margin to create space above the drawer
          overflowY="auto" // Enable vertical scrolling
        >
          <DrawerCloseButton />
          <DrawerHeader bg={"#F4EFEB"} borderTopRadius={"10px"}>
            {selectedProduct?.brand}
          </DrawerHeader>
          <DrawerBody>
            <Carousel
              showArrows={true}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              useKeyboardArrows={true}
              autoPlay={true}
              swipeable={true}
            >
              {additionalImages.map((image, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="white"
                >
                  <ChakraImage
                    src={image}
                    alt={`${selectedProduct.product_title} - ${index + 1}`}
                    objectFit="contain"
                    boxSize="100%"
                  />
                </Box>
              ))}
            </Carousel>
            <HStack
              gap={{ md: "2rem", base: "1rem" }}
              justifyContent="space-between"
            >
              <Text fontWeight={"600"} color={"#757575"} fontSize={"1rem"}>
                {selectedProduct?.product_title}
              </Text>
              <Button
                as={Link}
                href={selectedProduct?.product_url}
                target="_blank" // Add this attribute to open in a new tab
                rel="noopener noreferrer" // Add this for security reasons
                color="#273434"
                w={{ md: "10rem", base: "6rem" }}
                bg="#F4EFEB"
                borderRadius={"25px"}
                rightIcon={<ChevronRightIcon stroke={"#273434"} />}
              >
                Visit
              </Button>
            </HStack>
            {selectedProduct?.price_available && (
              <Text fontWeight="bold" fontSize="0.8rem" mt={2}>
                {selectedProduct.currency} {selectedProduct.price}
              </Text>
            )}
            <Text
              mt={2}
              fontSize="0.6rem"
              lineHeight={"16.6px"}
              color="#000000"
              mb={{ md: "4rem" }}
            >
              {selectedProduct?.description}
            </Text>
          </DrawerBody>
          <DrawerFooter gap="2rem">
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
            <Box
              width="100%"
              bg="#624737"
              color="white"
              textAlign="center"
              p={2}
              borderRadius={"10px"}
              fontFamily="Figtree, sans-serif"
              cursor="pointer"
              onClick={async () => {
                let access_token =
                  await services.authentication.getAccessToken();
                services.wishlist.addToWishList(product.id, access_token);
              }}
            >
              Add to Favorites
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            fontWeight={"400"}
            fontSize={{ md: "1.2rem", base: "0.65rem" }}
            lineHeight={"22px"}
            color={"#222222"}
            textAlign="left"
          >
            Search History
          </DrawerHeader>
          <DrawerBody>
            <HistoryComponent
              setSelectedBrands={setSelectedBrands}
              selectedBrands={selectedBrands}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}
      <HStack
        bg="white"
        py={4}
        position="sticky"
        top={0}
        textAlign={{ md: "center", base: "left" }}
        zIndex={100}
        alignItems={{ base: "center" }}
        justifyContent={{ md: "space-between", base: "center" }}
        mx={{ md: "4rem", base: "1rem" }}
        // borderBottom="1px solid #E2E8F0"
      >
        <Flex
          gap={{ md: "1rem", base: "1rem" }}
          align="center"
          flexDirection={"column"}
          justifyContent={{ md: "center", base: "center" }}
          alignItems={"center"}
          display={{ md: "flex", base: "none" }}
          flex={1}
          mx={6}
        >
          <Image
            src={VibeText}
            width={"100"}
            height={"40%"}
            style={{ cursor: "pointer" }}
            alt="Vibe Search"
            onClick={() => router.push("/")}
          />
        </Flex>
        <Flex
          gap={{ md: "2rem", base: "1rem" }}
          align="left"
          justifyContent={{ md: "center", base: "center" }}
          alignItems={"center"}
          display={{ md: "none", base: "flex" }}
          flex={1}
          mx={6}
        >
          <Image src={VibeText} width={"60"} height={"20%"} alt="Vibe Search" />
          {/* <utilities.SearchBox></utilities.SearchBox> */}
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
          <FiHeart
            size={24}
            cursor="pointer"
            onClick={()=>{
              utilities.ComingSoonToast(toast)
            }}
          />
        </HStack>
      </HStack>
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
          <utilities.SearchBox />
        </Box>
        <HStack
          pos={"absolute"}
          right={"7%"}
          gap={{ md: "1rem", base: "0.5rem" }}
        >
          <Box
            onClick={()=>{
              utilities.ComingSoonToast(toast)
            }}
            cursor={"pointer"}
            border="1px solid #DFE1E5"
            borderRadius="10px"
            p={{ md: "0.85rem" }}
          >
            <Image
              src={ClockIcon}
              alt="Vibe History"
              width="18"
              height="18"
              style={{ width: "18px", height: "18px" }}
            />
          </Box>
          <HStack
            align="center"
            flexDirection="row"
            justifyContent="center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            alignItems="center"
            cursor={"pointer"}
            border="1px solid #DFE1E5"
            borderRadius="10px"
            minW="13rem"
            onClick={() => {
              fashionDiceRoll();
            }}
          >
            {isHovered ? (
              <Lottie
                animationData={diceAnimation}
                style={{ width: "44px", height: "44px" }}
                width="44"
                height="44"
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
      </HStack>
      <HStack
        w="100%"
        zIndex={100}
        gap={{ md: "1rem" }}
        alignItems="center"
        display={{ md: "none", base: "flex" }}
        justifyContent="space-between"
        flexDirection={"row"}
        position="relative"
        my={{ md: "0.5rem", base: "0.5rem" }}
        mx={{ base: "1rem" }}
        // h={{ md: "3rem" }}
        // mb={'4rem'}
      >
        <utilities.SearchBox boxWidth={75}></utilities.SearchBox>
        <Box
          onClick={()=>{
            utilities.ComingSoonToast(toast)
          }}
          cursor={"pointer"}
          border="1px solid #DFE1E5"
          borderRadius="10px"
          p={3}
          mr={"2rem"}
        >
          <Image
            src={ClockIcon}
            alt="Hushh Vibe History"
            width="15"
            height="15"
            style={{ width: "15px", height: "15px" }}
          />
        </Box>
      </HStack>

      <FilterUI
        setSelectedBrands={(brands) => {
          setSelectedBrands(brands);
          setSearchResults([]); // Reset search results when brands are updated
        }}
        selectedBrands={selectedBrands}
        resetSearchResults={() => {
          setSearchResults([]);
        }} // Pass the function as a prop
      />
      <Box
        fontFamily="Figtree, sans-serif"
        mx={{ md: "2rem", base: "0rem" }}
        pos={"relative"}
        h="100vh" // Ensure the container takes the full viewport height
      >
        <Flex
          h="100%"
          mb={{ md: "5rem" }}
          pos="relative"
          flexDirection={isDrawerOpen ? "row" : "column"}
        >
          {/* Main Content Section */}
          <Box
            w={{ md: isDrawerOpen ? "70%" : "100%", base: "100%" }}
            h="100%"
            p={{ md: 6, base: 4 }}
            overflowY="auto"
            css={{
              "&::-webkit-scrollbar": { display: "none" },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <div 
            style={{
              height: "100vh",
              width: "auto",
              overflow: "scroll"
            }}
            onScroll={(event) => {
              let obj = event.target;
              if (obj.scrollTop >= obj.scrollHeight - obj.offsetHeight - 10) {
                setCurrentPage(currentPage + 1);
              }
            }}>
              <Grid
                onScroll={(event) => {
                  console.log("scrolling");
                  let obj = event.target;
                  if (
                    obj.scrollTop >=
                    obj.scrollHeight - obj.offsetHeight - 10
                  ) {
                    query != "wishlist" && !noMoreResults
                      ? addNewContent()
                      : "";
                  }
                }}
                templateColumns={{
                  md: isDrawerOpen ? "repeat(3, 1fr)" : "repeat(4, 1fr)",
                  base: "repeat(2,1fr)",
                }}
                gap={{ md: 6, base: 2 }}
                ref={gridRef}
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
                        minH="350px"
                        cursor="pointer"
                        className="product-card"
                      >
                        <Box
                          position="relative"
                          w={"100%"}
                          h="300px"
                          className="image-container"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          // bg="gray.100"
                        >
                          <ChakraImage
                            src={product.image || "/path/to/default-image.jpg"}
                            alt={product.product_title}
                            objectFit="contain" // Ensures the image is fully visible and not cropped
                            boxSize="100%" // Ensures the image fills the container
                            // onClick={() => openDrawer(product)}
                            onClick={() =>
                              handleProductClick(
                                product,
                                setSelectedProduct,
                                setIsDrawerOpen,
                                onOpen,
                                isMobile,
                                openDrawer
                              )
                            } // Use the new handler
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
                        <Box p={{ md: 3, base: 2 }}>
                          <Text
                            fontWeight={"400"}
                            fontSize={{ md: "0.9rem", base: "0.65rem" }}
                            color={"#727272"}
                            lineHeight={"22px"}
                          >
                            {product?.source}
                          </Text>
                          <Text
                            color={"#222222"}
                            fontWeight="700"
                            fontSize={{ md: "1rem", base: "0.75rem" }}
                            lineHeight={"22px"}
                          >
                            {product.brand}
                          </Text>
                          <Text
                            color="#222222"
                            fontSize={{ md: "1rem", base: "0.65rem" }}
                            lineHeight={"22px"}
                            noOfLines={1}
                          >
                            {product.product_title}
                          </Text>
                          {product.price_available && (
                            <Text
                              color={"#222222"}
                              fontWeight="400"
                              lineHeight={"22px"}
                              fontSize={{ md: "1rem", base: "0.65rem" }}
                              mt={{ md: 5, base: 2 }}
                            >
                              {product.currency} {product.price}
                            </Text>
                          )}
                        </Box>
                      </Box>
                    ))}
              </Grid>
            </div>
          </Box>

          {/* Drawer Section */}
          {isDrawerOpen && isLargerThanMobile && (
            <Box
              w="30%"
              bg="white"
              boxShadow="lg"
              overflowY="auto"
              h="100%"
              borderTopLeftRadius="10px"
              css={{
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-track": {
                  background: "#f1f1f1",
                  borderTopRightRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#888",
                  borderTopRightRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#555",
                },
              }}
            >
              <HStack
                p={{ md: 4, base: 2 }}
                bg={"#F4EFEB"}
                borderTopLeftRadius={"10px"}
                gap={{ md: "4rem", base: "1rem" }}
                justifyContent="space-between"
              >
                <Text fontSize="2xl" fontWeight="bold">
                  {selectedProduct?.brand}
                </Text>
                <FiX size={24} cursor="pointer" onClick={closeDrawer} />
              </HStack>

              {selectedProduct && (
                <>
                  <Carousel
                    showArrows={true}
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop={true}
                    useKeyboardArrows={true}
                    autoPlay={true}
                    swipeable={true}
                  >
                    {additionalImages.map((image, index) =>{
                      image=image.replace("width=959", "width=600")
                      console.log(image)
                      return (
                      <Box
                        key={index}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        bg="white" // Background color in case the image doesn't load
                      >
                        <ChakraImage
                          src={image}
                          alt={`${selectedProduct.product_title} - ${
                            index + 1
                          }`}
                          objectFit="contain" // Ensures the entire image is visible without cropping
                          boxSize="100%" // Fills the container without cropping
                        />
                      </Box>
                    )})}
                  </Carousel>
                  <Box
                    bg={"#FBFAF8"}
                    p={6}
                    fontFamily={"Figtree, sans-serif"}
                    gap={{ md: "0.5rem" }}
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <HStack
                      gap={{ md: "2rem", base: "1rem" }}
                      justifyContent="space-between"
                    >
                      <Text
                        color="#757575"
                        fontSize="1.25rem"
                        lineHeight={"24px"}
                        fontWeight="600"
                      >
                        {selectedProduct.product_title}
                      </Text>
                      <Button
                        as={Link}
                        href={selectedProduct.product_url}
                        target="_blank" // Add this attribute to open in a new tab
                        rel="noopener noreferrer" // Add this for security reasons
                        color="#273434"
                        w={{ md: "10rem", base: "3.5rem" }}
                        bg="#F4EFEB"
                        borderRadius={"25px"}
                        rightIcon={<ChevronRightIcon stroke={"#273434"} />}
                      >
                        Visit
                      </Button>
                    </HStack>
                    {selectedProduct.price_available && (
                      <Text fontWeight="bold" fontSize="16px" mt={2}>
                        {selectedProduct.currency} {selectedProduct.price}
                      </Text>
                    )}
                    <Text
                      mt={2}
                      fontSize="16px"
                      lineHeight={"21.6px"}
                      color="#000000"
                      mb={{ md: "4rem" }}
                    >
                      {selectedProduct.description}
                    </Text>
                    <Box height="12rem" w={"100%"} bg={"white"} />
                  </Box>
                  {/* <Box height="12rem" w={'100%'} bg={'white'}/> */}
                </>
              )}
            </Box>
          )}
        </Flex>
      </Box>

      <Footer />
    </>
  );
}
