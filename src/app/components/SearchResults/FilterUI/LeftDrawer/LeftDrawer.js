import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import FilterAccordion from "../FilterAccordian/FilterAccordian";
import config from "../../../../resources/config/config";
export default function LeftDrawer({
  onClose,
  isOpen,
  selectedBrands,
  setSelectedBrands,
  brands,
  setSelectedGenders,
  applyFilter,
  applyGenderFilter,
  priceRange,
  setPriceRange,
  selectedGenders
}) {
  return (
    <Drawer
      placement="left"
      onClose={onClose}
      isOpen={isOpen}
      size={{ md: "sm" }}
    >
      <DrawerOverlay />

      <DrawerContent>
        <DrawerCloseButton />

        <DrawerHeader
          color={"#222"}
          fontSize={{ md: "1.75rem", base: "1.2rem" }}
          textOverflow={"ellipsis"}
          whiteSpace={"nowrap"}
          fontWeight={"400"}
          fontFamily={"Figtree, sans-serif"}
        >
          All Filters
        </DrawerHeader>
        <DrawerBody>
          <FilterAccordion
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            brands={brands}
            genders={config.genders}
            setSelectedGenders={setSelectedGenders}
            selectedGenders={selectedGenders}
            onApplyFilter={() => {
              applyFilter();
              onClose(); // Close the drawer
            }}
            onApplyGenderFilter={() => {
              applyGenderFilter();
              onClose();
            }}
            onClose={onClose}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
