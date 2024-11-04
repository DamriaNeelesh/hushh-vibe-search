import {
  Box,
  Text,
  HStack,
  Grid,
  Button,
  Link,
  Flex,
  Image as ChakraImage,
} from "@chakra-ui/react";
import { FiX } from "react-icons/fi";
import closeDrawer from "../services/closeDrawer";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Carousel } from "react-responsive-carousel";
import handleProductClick from "../services/handleProductClick";
import services from "../../../services/services";
import Skeleton from "react-loading-skeleton";
import ImageNotFound from "../ImageNotFound/ImageNotFound";
import openDrawer from "../services/openDrawer";
export default function SearchResultsWrapper({
  isDrawerOpen,
  setCurrentPage,
  currentPage,
  query,
  noMoreResults,
  gridRef,
  isLoading,
  searchResults,
  errorImages,
  setErrorImages,
  setSelectedProduct,
  setIsDrawerOpen,
  onOpen,
  isMobile,
  isLargerThanMobile,
  selectedProduct,
  allImages,
}) {
  return (
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
              overflow: "scroll",
            }}
            onScroll={(event) => {
              let obj = event.target;
              if (obj.scrollTop >= obj.scrollHeight - obj.offsetHeight - 10) {
                setCurrentPage(currentPage + 1);
              }
            }}
          >
            <Grid
              onScroll={(event) => {
                let obj = event.target;
                if (obj.scrollTop >= obj.scrollHeight - obj.offsetHeight - 10) {
                  query != "wishlist" && !noMoreResults ? addNewContent() : "";
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
                : Object.values(searchResults).map((product, index) => {
                    let image = product?.image?.replace(
                      "width=959",
                      "width=600"
                    );
                    return (
                      <Box
                        key={index}
                        borderRadius="md"
                        overflow="hidden"
                        minH="350px"
                        cursor="pointer"
                        className="product-card"
                        onClick={async () => {
                          let access_token =
                            await services.authentication.getAccessToken();
                          services.monitoring.clicked(
                            access_token,
                            product.product_id
                          );
                        }}
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
                          {errorImages.has(index) ? (
                            <ImageNotFound
                              brand={product.brand}
                              onClick={() =>
                                handleProductClick(
                                  product,
                                  setSelectedProduct,
                                  setIsDrawerOpen,
                                  onOpen,
                                  isMobile,
                                  openDrawer
                                )
                              }
                            ></ImageNotFound>
                          ) : (
                            <ChakraImage
                              onError={(event) => {
                                event.target.style.display = "none";
                                setErrorImages(
                                  new Set([...errorImages, index])
                                );
                              }}
                              src={image || "/path/to/default-image.jpg"}
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
                          )}
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
                    );
                  })}
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
              <FiX
                size={24}
                cursor="pointer"
                onClick={() => {
                  closeDrawer(setIsDrawerOpen, setSelectedProduct);
                }}
              />
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
                  {allImages.map((image, index) => {
                    image = image.replace("width=959", "width=600");

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
                    );
                  })}
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
  );
}
