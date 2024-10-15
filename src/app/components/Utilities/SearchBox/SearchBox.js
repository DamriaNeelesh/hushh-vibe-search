import styles from "./SearchBox.module.css";
import resources from "./resources/resources";
import config from "../../../resources/config/config";
import FileInputBox from './FileInputBox/FileInputBox'
export default function SearchBox() {
  return (
    <div className={`${styles.SearchBox}`}>
      <img src={resources.magnifyingGlass.src}></img>
      <input className={`${styles.SearchBox__Input}`} onKeyDown={(event)=>{
        if(event.key === "Enter"){
          window.location.href = config.redirect_url+"/components/SearchResults?query=" + event.target.value;
        }
      }}></input>
      <img src={resources.cross.src}></img>
      <FileInputBox></FileInputBox>
      <img src={resources.camera.src} onClick={()=>{
        document.getElementById("searchBox__fileInput").click();
      }}></img>
    </div>
  );
}
