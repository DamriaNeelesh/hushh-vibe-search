import brandFiltersService from "../services/brandFiltersService";
import { Button } from "@chakra-ui/react";
export default function ApplyFilterButton({
    setSelectedBrands,
    tempSelectedBrands,
}) {
  return (
    <Button
      onClick={() => {
        brandFiltersService.applyFilter(setSelectedBrands, tempSelectedBrands);
      }}
      bg="#E0D3C8"
      color={"black"}
      mt={4}
    >
      Apply Filter
    </Button>
  );
}
