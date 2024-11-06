import Link from "next/link";
import services from "../../../../../services/services";
import { Button } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
export default function CloseButton({ selectedProduct }) {
  return (
    <Button
      as={Link}
      onClick={async () => {
        let access_token = await services.authentication.getAccessToken();
        services.monitoring.redirect(access_token, selectedProduct.product_id);
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
  );
}
