"use client"; // Ensure that this is a client component

import styles from "./SearchBox.module.css";
import resources from "./resources/resources";
import config from "../../../resources/config/config";
import FileInputBox from "./FileInputBox/FileInputBox";
import { Suspense, useState, useEffect } from "react";
import services from "../../../services/services";

export default function SearchBox(props) {
  // State to handle search input
  const [searchQuery, setSearchQuery] = useState("");
  // State to handle user login status
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  // Get initial query from the URL when the component mounts
  useEffect(() => {
    // Get the query parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get("query");
    // Set the state with the initial query
    if (initialQuery) {
      setSearchQuery(initialQuery);
    }
  }, []);
  // Check if the user is logged in when the component mounts
  useEffect(() => {
    let interval_id = setInterval(() => {
      !isLoggedIn
        ? services.authentication.isLoggedIn(setIsLoggedIn)
        : clearInterval(interval_id);
    }, 1000);
  }, []);
  // Handle search on Enter key press
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      if (searchQuery !== "") {
        isLoggedIn
          ? (window.location.href = `${config.redirect_url}/components/SearchResults?query=${searchQuery}`)
          : alert("Please login to search");
      }else{
        alert('Please enter a search query');
      }
    }
  };
  // Clear the search input
  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <Suspense fallback={<SearchBarFallback />}>
      <div
        className={styles.SearchBox}
        style={{
          width: props.boxWidth ? props.boxWidth + "vw" : "",
        }}
      >
        <img src={resources.magnifyingGlass.src} alt="Vibe Search Icon" />
        <input
          className={styles.SearchBox__Input}
          id="SearchBox__Input"
          value={searchQuery} // Controlled input for search query
          placeholder={props.content}
          onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
          onKeyDown={handleSearch} // Handle Enter key for search
          style={{
            width: props.boxWidth ? props.boxWidth - 20 + "vw" : "",
          }}
        />
        <img
          src={resources.cross.src}
          className={styles.SearchBox__Icon}
          alt="Clear Icon"
          onClick={handleClearSearch} // Clear search input
        />
        <FileInputBox />
        <img
          src={resources.camera.src}
          className={styles.SearchBox__Icon}
          alt="Camera Icon"
          onClick={() =>
            document.getElementById("searchBox__fileInput").click()
          }
        />
      </div>
    </Suspense>
  );
}

function SearchBarFallback() {
  return <div>Loading...</div>; // Fallback content while Suspense is resolving
}
