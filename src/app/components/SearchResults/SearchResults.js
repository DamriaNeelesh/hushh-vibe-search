"use client";
import { useEffect, useState } from "react";
import utilities from "../utilities/utilities"
import {
  Box,
  Text,
  VStack,
  HStack,
  Checkbox,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  IconButton,
  Input,
  Avatar,
  Icon,
  Grid,
  Image,
  Link,
  useToast,
} from "@chakra-ui/react";
import { FiHeart, FiUser } from "react-icons/fi";
import services from "../../services/services";
import { useSearchParams } from "next/navigation";
import FiltersAndHistory from "./FiltersAndHistory/FiltersAndHistory";
import Footer from "../footer";
import VibeText from "../svg/vibeText.svg";
import styles from './SearchResults.module.css'

export default function SearchResults() {
  let [searchResults, setSearchResults] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [selectedBrands, setSelectedBrands] = useState([]);
  let [noMoreResults, setNoMoreResults] = useState(false);
  const searchParams = useSearchParams();
  const toast = useToast();

  useEffect(() => {
    async function callVibeIt() {
      const search = searchParams.get("query");
      services.history.saveToHistory(search)
      let access_token = await services.authentication.getAccessToken();
      services.vibesearch.vibeIt(
        search ? search : "",
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
  useEffect(() => {
    console.log(selectedBrands)
  }, [selectedBrands])
  return (
    <>
      <Box
        fontFamily={"Figtree, san-serif"}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        minH="100vh"
        px={{md:4,base:1}}
        pb={{md:4,base:1}}
      >
        {/* Left Filter Section */}
        <VStack
          align="start"
          p={4}
          minW={{ base: "100%", md: "300px" }}
          // bg="gray.100"
          h={'100vh'}
          position={'sticky'}
          borderRadius="md"
          top={'0'}
        >
        <div className={`${styles.SearchResults__Filters}`}>
          <FiltersAndHistory setSelectedBrands={setSelectedBrands} selectedBrands={selectedBrands}></FiltersAndHistory>
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
        <Box bg={'white'} zIndex={10} flex={1} px={{md:4,base:1}} pb={{md:4,base:1}} display="flex" flexDirection="column">
          {/* Header Section */}
          <HStack bg={'white'} py={{md:2,base:1}} pos={'sticky'} zIndex={11} mt={{md:4,base:1}}  top={'0'} mb={{md:4,base:1}} spacing={4} justifyContent="space-between">
            <HStack spacing={4}>
              <Text fontSize="2xl" fontWeight="bold">
                Vibe
              </Text>
              {/* <Image src={VibeText} objectFit="cover" alt="Vibe Search"/> */}
              <utilities.SearchBox></utilities.SearchBox>
            </HStack>
            <HStack spacing={4}>
              <Icon as={FiHeart} w={6} h={6} color="gray.500" />
              <Avatar icon={<FiUser />} bg="gray.500" />
            </HStack>
          </HStack>

          {/* Product Results */}

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
            gap={{ md: 14, base: 5 }}
            mt={{ md: "2rem", base: "1rem" }}
            mb={{ md: "6rem", base: "2rem" }}
          >
            {Object.values(searchResults).map((product, index) => (
              <Box
                key={index}
                position="relative"
                borderRadius="10px"
                overflow="hidden"
                bg="#F8F4F2"
                minH="350px"
                className="product-card"
              >
                <Box position="relative" className="image-container">
                  <Link href={product.product_url} isExternal>
                    <Image
                      src={product.image || "/path/to/default-image.jpg"}
                      alt={product.product_title}
                      width="100%"
                      minH="300px"
                      maxH="300px"
                      objectFit="cover"
                    />
                  </Link>
                  <Box
                    className="favorite-button"
                    position="absolute"
                    bottom="0"
                    width="100%"
                    bg="#624737"
                    color="white"
                    textAlign="center"
                    p={2}
                    transform="translateY(100%)"
                    transition="transform 0.3s ease"
                    cursor={'pointer'}
                  >
                    Add to Favorites
                  </Box>
                </Box>
                <Box p={3} bg={"#F8F4F2"}>
                  <Text
                    fontWeight="600"
                    color={"#000000"}
                    noOfLines={1}
                    fontSize={{ md: "18px", base: "12px" }}
                    mt={2}
                  >
                    {product.product_title}
                  </Text>
                  <Text
                    fontSize={{ md: "14px", base: "9px" }}
                    noOfLines={1}
                    fontWeight={"600"}
                    color="#757575"
                  >
                    {product.description}
                  </Text>
                  {product.price_available && (
                    <Text
                      fontWeight="600"
                      color={"#9F9F9F"}
                      noOfLines={1}
                      fontSize={{ md: "15px", base: "8px" }}
                      mt={2}
                    >
                      {product.currency} {product.price}
                    </Text>
                  )}
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
        
      </Box>
      <Footer />
    </>
  );
}
