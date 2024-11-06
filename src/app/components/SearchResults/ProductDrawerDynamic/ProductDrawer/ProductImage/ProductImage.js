import { Box, Image as ChakraImage } from "@chakra-ui/react";
export default function ProductImage(
    {
        selectedProduct, image, index
    }
) {
  return (
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
  );
}
