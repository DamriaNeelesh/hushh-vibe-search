import config from "../../../../resources/config/config";
import styles from "./BrandFilters.module.css";
export default function BrandFilters({ selectedBrands, setSelectedBrands, brands }) {
  return (
    <div className={`${styles.BrandFilters}`}>
      {brands.map((brand, index) => (
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
    </div>
  );
}
