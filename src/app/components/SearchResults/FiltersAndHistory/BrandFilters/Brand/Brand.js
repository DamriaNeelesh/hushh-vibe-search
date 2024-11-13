import brandFiltersService from "../services/brandFiltersService";
export default function Brand({
  index,
  brand,
  tempSelectedBrands,
  setTempSelectedBrands,
}) {
  return (
    <div key={index}>
      <input
        type="checkbox"
        checked={tempSelectedBrands? tempSelectedBrands.includes(brand): false}
        onChange={(event) =>
          brandFiltersService.handleCheckboxChange(
            brand,
            event.target.checked,
            setTempSelectedBrands,
            tempSelectedBrands
          )
        }
      />
      &nbsp; {brand}
    </div>
  );
}
