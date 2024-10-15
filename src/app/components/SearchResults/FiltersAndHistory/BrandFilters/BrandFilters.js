import config from "../../../../resources/config/config";
import styles from "./BrandFilters.module.css";
export default function BrandFilters(props) {
  return (
      <div className={`${styles.BrandFilters}`}>
        {config.brands.map((brand, index) => {
          return (
            <div key={index}>
              <input type="checkbox" onClick={(event) => {
                // check if the checkbox is checked

                if(event.target.checked){
                  console.log([...props.selectedBrands, brand])
                  props.setSelectedBrands([...props.selectedBrands, brand]);
                }else{
                  let newBrands = props.selectedBrands.filter((selectedBrand) => {
                    return selectedBrand !== brand;
                  });
                  props.setSelectedBrands(newBrands);
                }
              }}></input>
              &nbsp; {brand}
            </div>
          );
        })}
      </div>
  );
}
