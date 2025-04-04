import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  Box,
  Flex,
  useMediaQuery,
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
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isTablet] = useMediaQuery("(max-width: 1024px)");

  return (
    <Drawer
      isOpen={isOpen}
      placement={isMobile ? "bottom" : "right"}
      onClose={onClose}
      size={isMobile ? "full" : "md"}
      blockScrollOnMount={false}
    >
      <DrawerOverlay backgroundColor="rgba(0, 0, 0, 0.5)" />
      <DrawerContent
        borderTopRadius={isMobile ? "16px" : "0"}
        borderLeftRadius={!isMobile ? "16px" : "0"}
        height={isMobile ? "85vh" : "100vh"}
        marginTop={isMobile ? "15vh" : "0"}
        width={isMobile ? "100%" : isTablet ? "450px" : "550px"}
        maxWidth={isMobile ? "100%" : isTablet ? "450px" : "550px"}
        overflowY="auto"
        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.15)"
        position="relative"
        onTouchStart={(e) => setTouchStartY(e.touches[0].clientY)}
        onTouchMove={(e) => {
          if (!isMobile) return;
          const currentY = e.touches[0].clientY;
          const swipeDistance = currentY - touchStartY;
          if (swipeDistance > 100) {
            onClose();
          }
        }}
      >
        <DrawerCloseButton 
          size="lg"
          color="#333"
          backgroundColor="white"
          borderRadius="full"
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
          _hover={{ backgroundColor: "#f5f5f5" }}
          top="16px"
          right="16px"
          zIndex="10"
        />
        
        <Box position="relative">
          <Brand selectedProduct={selectedProduct} />
          
          <DrawerBody padding="0">
            <Flex direction="column" height="100%">
              {/* Product Image Section */}
              <Box 
                width="100%" 
                height={isMobile ? "auto" : "60%"}
                backgroundColor="#f9f9f9"
              >
                <ProductImageCarousel
                  allImages={allImages}
                  selectedProduct={selectedProduct}
                />
              </Box>
              
              {/* Product Details Section */}
              <Box 
                padding="20px" 
                backgroundColor="white"
                borderTopRadius={isMobile ? "20px" : "0"}
                marginTop={isMobile ? "-20px" : "0"}
                position="relative"
                zIndex="1"
              >
                <Title selectedProduct={selectedProduct} />
                
                {selectedProduct?.price_available && (
                  <Box marginTop="12px">
                    <DynamicPriceWrapper selectedProduct={selectedProduct} />
                  </Box>
                )}
                
                <Box marginTop="16px">
                  <Description selectedProduct={selectedProduct} />
                </Box>
              </Box>
            </Flex>
          </DrawerBody>
          
          <Footer 
            onClose={onClose} 
            selectedProduct={selectedProduct}
            position="sticky"
            bottom="0"
            width="100%"
            backgroundColor="white"
            borderTop="1px solid #eee"
            padding="12px 20px"
            zIndex="2"
          />
        </Box>
      </DrawerContent>
    </Drawer>
  );
}
