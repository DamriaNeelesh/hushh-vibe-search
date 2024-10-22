'use client'
import { useState } from "react";
import config from "../../../../resources/config/config";
import styles from "./BrandFilters.module.css";
export default function BrandFilters({ selectedBrands, setSelectedBrands, brands }) {
  const [showAll, setShowAll] = useState(false);
  const displayedBrands = showAll ? brands : brands.slice(0, 10);

  return (
    <div className={`${styles.BrandFilters}`}>
      {displayedBrands.map((brand, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={selectedBrands.includes(brand)}
            onChange={(event) => {
              if (event.target.checked) {
                setSelectedBrands([...selectedBrands, brand]);
              } else {
                let newBrands = selectedBrands.filter((selectedBrand) => selectedBrand !== brand);
                setSelectedBrands(newBrands);
              }
            }}
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
        <button onClick={() => setShowAll(false)} className={styles.showMoreButton}>
          Show Less
        </button>
      )}
    </div>
  );
}
