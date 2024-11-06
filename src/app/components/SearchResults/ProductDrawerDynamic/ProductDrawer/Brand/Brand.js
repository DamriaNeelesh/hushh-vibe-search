import { DrawerHeader } from "@chakra-ui/react";
export default function Brand({ selectedProduct }) {
  return (
    <DrawerHeader bg={"#F4EFEB"} borderTopRadius={"10px"}>
      {selectedProduct?.brand}
    </DrawerHeader>
  );
}
