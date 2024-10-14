"use client";
import { useEffect, useState } from "react";
import utilities from "../utilities/utilities";
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
import FiltersAndHistory from './FiltersAndHistory/FiltersAndHistory'
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

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      minH="100vh"
      p={4}
    >
      {/* Left Filter Section */}
      <VStack
        align="start"
        p={4}
        minW={{ base: "100%", md: "300px" }}
        bg="gray.100"
        borderRadius="md"
      >
        <FiltersAndHistory></FiltersAndHistory>
        
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
      <Box flex={1} p={4} display="flex" flexDirection="column">
        {/* Header Section */}
        <HStack mb={4} spacing={4} justifyContent="space-between">
          <HStack spacing={4}>
            <Text fontSize="2xl" fontWeight="bold">
              Vibe
            </Text>
            <utilities.SearchBox></utilities.SearchBox>
          </HStack>
          <HStack spacing={4}>
            <Icon as={FiHeart} w={6} h={6} color="gray.500" />
            <Avatar icon={<FiUser />} bg="gray.500" />
          </HStack>
        </HStack>

        {/* Product Results */}
        <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={6}>
          {Object.values(searchResults).map((product, index) => (
            <Box
              key={index}
              border="1px"
              borderColor="gray.200"
              borderRadius="md"
              overflow="hidden"
              p={4}
              bg="white"
            >
              <Link href={product.product_url} isExternal>
                <Image
                  src={product.image || "/path/to/default-image.jpg"}
                  alt={product.product_title}
                  width="100%"
                  height="auto"
                  objectFit="cover"
                />
              </Link>
              <Text fontWeight="bold" mt={4} noOfLines={1}>
                {product.product_title}
              </Text>
              <Text fontSize="sm" color="gray.600" noOfLines={2}>
                {product.description}
              </Text>
              {product.price_available && (
                <Text fontWeight="bold" mt={2}>
                  {product.currency} {product.price}
                </Text>
              )}
              <Icon
                as={FiHeart}
                w={5}
                h={5}
                mt={2}
                color={product.wishlist_flag ? "red.400" : "gray.400"}
                cursor="pointer"
                onClick={() => {
                  toast({
                    title: product.wishlist_flag
                      ? "Removed from wishlist."
                      : "Added to wishlist.",
                    status: product.wishlist_flag ? "warning" : "success",
                    duration: 2000,
                    isClosable: true,
                  });
                }}
              />
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
