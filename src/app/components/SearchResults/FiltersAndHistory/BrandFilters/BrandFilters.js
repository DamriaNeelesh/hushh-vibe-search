"use client";
import { useState } from "react";
import config from "../../../../resources/config/config";
import styles from "./BrandFilters.module.css";
import { Button } from "@chakra-ui/react";

export default function BrandFilters({
  selectedBrands,
  setSelectedBrands,
  brands,
  onApplyFilter
}) {
  const [showAll, setShowAll] = useState(false);
  const [tempSelectedBrands, setTempSelectedBrands] = useState(selectedBrands); // Temporary state

  const displayedBrands = showAll ? brands : brands.slice(0, 10);

  const handleCheckboxChange = (brand, isChecked) => {
    if (isChecked) {
      setTempSelectedBrands([...tempSelectedBrands, brand]);
    } else {
      setTempSelectedBrands(tempSelectedBrands.filter((b) => b !== brand));
    }
  };

  const applyFilter = () => {
    setSelectedBrands(tempSelectedBrands); // Update the actual selected brands
  };
  const clearFilter = () => {
    setTempSelectedBrands([]); // Clear temporary selections
    setSelectedBrands([]); // Clear actual selections
  };

  return (
    <div className={`${styles.BrandFilters}`}>
      {displayedBrands.map((brand, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={tempSelectedBrands.includes(brand)}
            onChange={(event) =>
              handleCheckboxChange(brand, event.target.checked)
            }
          />
          &nbsp; {brand}
        </div>
      ))}
      {/* Show More button if there are more than 10 brands */}
      {brands.length > 10 && !showAll && (
        <div onClick={() => setShowAll(true)} className={styles.showMoreButton}>
          Show More
        </div>
      )}
      {/* Show Less button to collapse the list */}
      {showAll && (
        <button
          onClick={() => setShowAll(false)}
          className={styles.showMoreButton}
        >
          Show Less
        </button>
      )}
      {/* Apply Filter button */}
      {tempSelectedBrands.length > 0 && (
        <>
          <div className="flex flex-row gap-3">
            <Button
              onClick={applyFilter}
              bg="#E0D3C8"
              color={'black'}
              mt={4}
            >
              Apply Filter
            </Button>
            <Button
              onClick={clearFilter}
              bg={'#EDE4DE'}
              color={'black'}
              mt={4}
            >
              Clear Filter
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
