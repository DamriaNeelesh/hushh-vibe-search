"use client";
import { useEffect, useState } from "react";
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
  Input,
  IconButton,
  Avatar,
  Icon,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
// import { FiHeart, FiUser } from "react-icons/fi";
import Image from "next/image";
import services from "../../services/services";
import { useSearchParams } from "next/navigation";
import styles from "./SearchResults.module.css";

export default function SearchResults() {
  let [searchResults, setSearchResults] = useState([]);
  let [dataFetched, setDataFetched] = useState(false);
  let [accessData, setAccessData] = useState(null);
  let [currentPage, setCurrentPage] = useState(1);
  let [userDetails, setUserDetails] = useState({});
  let [openMenu, setOpenMenu] = useState(false);
  let [showDetails, setShowDetails] = useState(false);
  let [productDetails, setProductDetails] = useState(false);
  let [elementsInWishList, setElementsInWishList] = useState(new Set());
  let [showNextPage, setShowNextPage] = useState(false);
  let [secondQuery, setSecondQuery] = useState("");
  let searchParams = useSearchParams();
  let query = searchParams.get("query");

  useEffect(() => {
    services.getAccessToken(setAccessData);
    localStorage ? setSecondQuery(localStorage.getItem("image-file")) : "";
    services.getUserDetails(setUserDetails);
  }, [searchParams, query]);

  useEffect(() => {
    if (accessData && accessData["data"] && accessData["data"]["session"]) {
      if (query == "wishlist") {
        services
          .getWishlist(accessData["data"]["session"]["access_token"], setSearchResults)
          .then(() => {
            setDataFetched(true);
          });
      } else {
        setDataFetched(false);
        let input1 = "";
        let input2 = "";
        if (query == "emptyEntry") {
          if (secondQuery) {
            input1 = secondQuery;
          }
        } else {
          input1 = query;
          input2 = secondQuery ? secondQuery : "";
        }
        services
          .vibeIt(
            input1,
            input2,
            `${currentPage}`,
            "10",
            setSearchResults,
            accessData["data"]["session"]["access_token"],
            searchResults
          )
          .then(() => {
            if (!secondQuery) {
              localStorage ? localStorage.removeItem("image-file") : "";
            }
            setDataFetched(true);
          });
      }
    }
  }, [query, currentPage, accessData, secondQuery]);

  useEffect(() => {
    let keys = Object.keys(searchResults);
    let set = new Set([...elementsInWishList]);
    for (let key of keys) {
      let product = searchResults[key];
      product && product["wishlist_flag"] == 1 && key ? set.add(key) : "";
      query == "wishlist" && key ? set.add(key) : "";
    }
    setElementsInWishList(set);
  }, [dataFetched]);

  function addThisIndex(index) {
    let set = new Set([...elementsInWishList]);
    index ? set.add(index) : "";
    setElementsInWishList(set);
  }

  function removeThisIndex(index) {
    let set = new Set([...elementsInWishList]);
    index ? set.delete(index) : "";
    setElementsInWishList(set);
  }

  function wishlistLoading() {
    let wishListQuotes = [
      "Start building your dream closet! Use VIBE Search to discover amazing products and add them to your wishlist.",
      "Wishlist is empty? Time to unleash your inner style hunter! Search for your perfect vibe and save your favorites.",
      "Ready to curate your dream wardrobe? Start searching for products and save them here for easy reference.",
      "Keep track of your desires! Add products to your wishlist for future purchases or sharing with friends."
    ];
    return (
      <div className={`${styles.SearchResults__loading}`} suppressHydrationWarning>
        {wishListQuotes[Math.floor(Math.random() * wishListQuotes.length)]}
      </div>
    );
  }

  function loading() {
    let items = [
      "Unleashing your vibe! We're searching millions of products to find your perfect match.",
      "Think it, find it! Describe your style or upload a pic, and let VIBE do the magic.",
      "Designer dreams or high-street finds? VIBE curates from your favorite brands.",
      "Get ready to be amazed! We're hunting down the perfect pieces just for you.",
      "Hold onto your hats! Your ultimate style discovery is just moments away.",
      "Shhh... we're working our fashion magic! Get ready to refresh your wardrobe."
    ];
    return (
      <div className={`${styles.SearchResults__loading}`} suppressHydrationWarning>
        {items[Math.floor(Math.random() * items.length)]}
      </div>
    );
  }

  return (
    <Box display="flex" flexDirection={{ base: "column", md: "row" }} minH="100vh" p={4}>
      {/* Left Filter Section */}
      <VStack
        align="start"
        p={4}
        minW={{ base: "100%", md: "300px" }}
        bg="gray.100"
        borderRadius="md"
        position="relative"
      >
        <Text fontWeight="bold" fontSize="lg">
          BRAND
        </Text>
        {["Mango", "Van Heusen", "Allen Solly", "Louis Vuitton", "Gucci", "Prada"].map((brand) => (
          <Checkbox key={brand}>{brand}</Checkbox>
        ))}
        <Text color="purple.500">+ 23 more</Text>

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

        {/* Footer Text */}
        <Box position="absolute" bottom={4} left={4}>
          <Text
            fontFamily={"Figtree"}
            color={"#0000008A"}
            fontSize={{ md: "1rem", base: "0.75rem" }}
            fontWeight={"400"}
            lineHeight={"11px"}
          >
            Powered by <span style={{ fontWeight: "700", color: "#0000008A" }}>hushh.ai</span>, a Hushh Labs project
          </Text>
        </Box>
      </VStack>

      {/* Main Content Section */}
      <Box flex={1} p={4} display="flex" flexDirection="column">
        <HStack mb={4} spacing={4} justifyContent="space-between">
          <Input
            placeholder="dark academia outfits for men"
            size="lg"
            w="full"
          />
          <IconButton
            icon={<SearchIcon />}
            aria-label="Search"
            bg="purple.500"
            color="white"
          />
          <HStack spacing={4}>
            {/* <Icon as={FiHeart} w={6} h={6} color="gray.500" /> */}
            {/* <Avatar icon={<FiUser />} bg="gray.500" /> */}
          </HStack>
        </HStack>

        {/* Product Results */}
        <Box display="grid" gridTemplateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={6}>
          {dataFetched &&
            searchResults.map((product, index) => (
              <Box
                key={index}
                border="1px"
                borderColor="gray.200"
                borderRadius="md"
                overflow="hidden"
                p={4}
                bg="white"
              >
                <Image
                  src={product.image || "/path/to/default-image.jpg"}
                  alt={product.name}
                  width={150}
                  height={200}
                />
                <Text fontWeight="bold" mt={4}>
                  {product.name || "Bottega Veneta"}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {product.description || "Irregular Wool Chevron Coat"}
                </Text>
                <Text fontWeight="bold" mt={2}>
                  ${product.price || "1050"}
                </Text>
                <Icon as={FiHeart} w={5} h={5} mt={2} color="gray.400" />
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}