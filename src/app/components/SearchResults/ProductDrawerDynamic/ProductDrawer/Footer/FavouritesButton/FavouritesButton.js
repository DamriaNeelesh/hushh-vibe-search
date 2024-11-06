import services from "../../../../../../services/services";
import { Box } from "@chakra-ui/react";
export default function FavouritesButton({ selectedProduct }) {
  return (
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
  );
}
