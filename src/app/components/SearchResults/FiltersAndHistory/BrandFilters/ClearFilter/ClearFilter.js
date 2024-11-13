import { Button } from "@chakra-ui/react";
import brandFiltersService from "../services/brandFiltersService";
export default function ClearFilter({
  setTempSelectedBrands,
  setSelectedBrands,
}) {
  return (
    <Button
      onClick={() => {
        brandFiltersService.clearFilter(
          setTempSelectedBrands,
          setSelectedBrands
        );
      }}
      bg={"#EDE4DE"}
      color={"black"}
      mt={4}
    >
      Clear Filter
    </Button>
  );
}
