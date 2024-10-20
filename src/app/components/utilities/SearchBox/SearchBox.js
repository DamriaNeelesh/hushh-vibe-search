"use client"
import styles from "./SearchBox.module.css";
import resources from "./resources/resources";
import config from "../../../resources/config/config";
import FileInputBox from './FileInputBox/FileInputBox'
import { useSearchParams } from "next/navigation";
import { useState } from "react";
export default function SearchBox() {
  let searchParams=useSearchParams()
  let initialQuery=searchParams.get('query')
  // console.log('Query:', query)
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      window.location.href = config.redirect_url + "/components/SearchResults?query=" + searchQuery;
    }
  };

  return (
    <div className={`${styles.SearchBox}`}>
      <img src={resources.magnifyingGlass.src}></img>
      <input 
        className={`${styles.SearchBox__Input}`}
        id="SearchBox__Input"
        value={searchQuery} // Set the value to the searchQuery state
        onChange={(e) => setSearchQuery(e.target.value)} // Update the state on change
        onKeyDown={handleSearch}
        // placeholder={query} 
      ></input>
      <img src={resources.cross.src} className={`${styles.SearchBox__Icon}`} onClick={()=>{
        document.getElementById("SearchBox__Input").value = "";
      }}></img>
      <FileInputBox></FileInputBox>
      <img src={resources.camera.src} className={`${styles.SearchBox__Icon}`} onClick={()=>{
        document.getElementById("searchBox__fileInput").click();
      }}></img>
    </div>
  );
}
