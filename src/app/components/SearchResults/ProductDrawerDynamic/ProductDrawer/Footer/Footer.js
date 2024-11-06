import { DrawerFooter, Button } from "@chakra-ui/react";
import FavouritesButton from "./FavouritesButton/FavouritesButton";
export default function Footer({ selectedProduct, onClose }) {
  return (
    <DrawerFooter gap="2rem">
      <Button variant="outline" mr={3} onClick={onClose}>
        Close
      </Button>
      <FavouritesButton selectedProduct={selectedProduct}></FavouritesButton>
    </DrawerFooter>
  );
}
