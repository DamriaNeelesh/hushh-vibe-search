import DropDownContent from "../DropDownContent/DropDownContent";
import resources from "../resources/resources";
import styles from './FiltersAndHistory.module.css'
export default function FiltersAndHistory() {
  return (
    <div className={`${styles.FiltersAndHistory}`}>
      <DropDownContent
        icon={resources.sandwich.src}
        children={<div>Hello</div>}
        height={"12pt"}
      />

      <DropDownContent
        icon={resources.history.src}
        height={"16pt"}
        children={<div>Hello</div>}
      />
    </div>
  );
}
