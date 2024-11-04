import {
  Box,
  Text,
  HStack,
  Button,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  DrawerFooter,
  Image as ChakraImage,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { Carousel } from "react-responsive-carousel";
import services from "../../../../services/services";
export default function ProductDrawer({
  isOpen,
  onClose,
  selectedProduct,
  allImages,
  setTouchStartY
}) {
  return (
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
        height="80vh"
        marginTop="10vh"
        overflowY="auto" // Enable vertical scrolling
        onTouchStart={(e) => setTouchStartY(e.touches[0].clientY)} // Capture the starting Y position
        onTouchMove={(e) => {
          const currentY = e.touches[0].clientY;
          const swipeDistance = currentY - touchStartY;

          // Close drawer if swipe distance exceeds 100px (customize as needed)
          if (swipeDistance > 100) {
            onClose();
          }
        }}
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
            {allImages.map((image, index) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="white"
              >
                <ChakraImage
                  src={image}
                  alt={`${selectedProduct?.brand} - ${index + 1}`}
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
              onClick={async () => {
                let access_token =
                  await services.authentication.getAccessToken();
                services.monitoring.redirect(
                  access_token,
                  selectedProduct.product_id
                );
              }}
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
              let access_token = await services.authentication.getAccessToken();
              services.wishlist.addToWishList(selectedProduct?.id, access_token);
            }}
          >
            Add to Favorites
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
