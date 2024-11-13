"use client";
import { useEffect, useState } from "react";
import styles from "./BrandFilters.module.scss";
import Brand from "./Brand/Brand";
import ApplyFilterButton from "./ApplyFilterButton/ApplyFilterButton";
import ClearFilter from "./ClearFilter/ClearFilter";
export default function BrandFilters({
  selectedBrands,
  setSelectedBrands,
  brands,
  onApplyFilter,
}) {
  const [showAll, setShowAll] = useState(false);
  const [tempSelectedBrands, setTempSelectedBrands] = useState([]); // Temporary state
  const displayedBrands = showAll ? brands : brands.slice(0, 10);
  useEffect(() => {
    setTempSelectedBrands(selectedBrands);
  }, []);
  return (
    <div className={`${styles.BrandFilters}`}>
      {displayedBrands.map((brand, index) => {
        return (
          <Brand
          key={index}
            brand={brand}
            index={index}
            setTempSelectedBrands={setTempSelectedBrands}
            tempSelectedBrands={tempSelectedBrands}
          ></Brand>
        );
      })}
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
      {tempSelectedBrands && tempSelectedBrands.length > 0 && (
        <div className="flex flex-row gap-3">
          <ApplyFilterButton
            setSelectedBrands={setSelectedBrands}
            tempSelectedBrands={tempSelectedBrands}
          ></ApplyFilterButton>
          <ClearFilter
            setSelectedBrands={setSelectedBrands}
            setTempSelectedBrands={setTempSelectedBrands}
          ></ClearFilter>
        </div>
      )}
    </div>
  );
}
