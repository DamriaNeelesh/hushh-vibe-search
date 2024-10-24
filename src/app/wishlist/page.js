"use client";
import React, { useEffect, useState } from "react";
import { Box, Grid, Text } from "@chakra-ui/react";
import getWishList from "../services/wishlist/getWishlist";
import Image from "next/image";

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    async function fetchWishlist() {
      let access_token = await services.authentication.getAccessToken();
      getWishList(access_token, setWishlistItems);
    }

    fetchWishlist();
  }, []);

  return (
    <Box p={6} minH={"100vh"} color={"white"}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {wishlistItems.map((item, index) => (
          <Box
            key={index}
            borderRadius="md"
            overflow="hidden"
            bg="#F8F4F2"
            minH="350px"
            cursor="pointer"
          >
            <Image
              src={item.image || "/path/to/default-image.jpg"}
              alt={item.product_title}
              objectFit="cover"
              height="300px"
              width="100%"
            />
            <Box p={3}>
              <Text fontWeight="600" fontSize="sm">
                {item.brand}
              </Text>
              <Text color="gray.600" fontSize="sm" noOfLines={1}>
                {item.product_title}
              </Text>
              {item.price_available && (
                <Text fontWeight="600" fontSize="sm" mt={1}>
                  {item.currency} {item.price}
                </Text>
              )}
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
