import { HStack, Text, CloseButton } from "@chakra-ui/react";
export default function Title({ selectedProduct }) {
  return (
    <HStack gap={{ md: "2rem", base: "1rem" }} justifyContent="space-between">
      <Text fontWeight={"600"} color={"#757575"} fontSize={"1rem"}>
        {selectedProduct?.product_title}
      </Text>
      <CloseButton selectedProduct={selectedProduct}></CloseButton>
    </HStack>
  );
}
