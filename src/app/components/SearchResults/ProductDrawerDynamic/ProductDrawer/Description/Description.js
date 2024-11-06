import { Text } from "@chakra-ui/react"
export default function Description({
    selectedProduct
}){
    return (
        <Text
            mt={2}
            fontSize="0.6rem"
            lineHeight={"16.6px"}
            color="#000000"
            mb={{ md: "4rem" }}
          >
            {selectedProduct?.description}
          </Text>
    )
}