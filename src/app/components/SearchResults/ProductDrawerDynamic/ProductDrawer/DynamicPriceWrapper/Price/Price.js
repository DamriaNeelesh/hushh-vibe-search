import { Text } from "@chakra-ui/react";
export default function Price({ selectedProduct }) {
  return (
    <Text fontWeight="bold" fontSize="0.8rem" mt={2}>
      {selectedProduct.currency} {selectedProduct.price}
    </Text>
  );
}
