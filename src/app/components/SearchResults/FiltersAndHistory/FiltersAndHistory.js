import DropDownContent from "../DropDownContent/DropDownContent";
import resources from "../resources/resources";
import styles from './FiltersAndHistory.module.css'
import HistoryComponent from './HistoryComponent/HistoryComponent'
import BrandFilters from './BrandFilters/BrandFilters'
export default function FiltersAndHistory(props) {
  return (
    <div className={`${styles.FiltersAndHistory}`}>
      <DropDownContent
        icon={resources.sandwich.src}
        {...props}
        height={"12pt"}
      >
        <BrandFilters {...props}></BrandFilters>
        </DropDownContent>


      <DropDownContent
        icon={resources.history.src}
        height={"16pt"}
      >
        <HistoryComponent></HistoryComponent>
        </DropDownContent>
    </div>
  );
}
