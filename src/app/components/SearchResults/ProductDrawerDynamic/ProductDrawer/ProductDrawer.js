import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Brand from "./Brand/Brand";
import Footer from "./Footer/Footer";
import Description from "./Description/Description";
import DynamicPriceWrapper from "./DynamicPriceWrapper/DynamicPriceWrapper";
import Title from "./Title/Title";
import ProductImageCarousel from "./ProductImageCarousel/ProductImageCarousel";
export default function ProductDrawer({
  isOpen,
  onClose,
  selectedProduct,
  allImages,
  setTouchStartY,
  touchStartY,
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
        <Brand selectedProduct={selectedProduct}></Brand>
        <DrawerBody>
          <ProductImageCarousel
            allImages={allImages}
            selectedProduct={selectedProduct}
          ></ProductImageCarousel>
          <Title selectedProduct={selectedProduct}></Title>
          {selectedProduct?.price_available && (
            <DynamicPriceWrapper
              selectedProduct={selectedProduct}
            ></DynamicPriceWrapper>
          )}
          <Description selectedProduct={selectedProduct}></Description>
        </DrawerBody>
        <Footer onClose={onClose} selectedProduct={selectedProduct}></Footer>
      </DrawerContent>
    </Drawer>
  );
}
