"use client"; // Ensure that this is a client component

import styles from "./SearchBox.module.css";
import resources from "./resources/resources";
import config from "../../../resources/config/config";
import FileInputBox from "./FileInputBox/FileInputBox";
import { Suspense, useState, useEffect } from "react";
import services from "../../../services/services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchBox(props) {
  const [searchQuery, setSearchQuery] = useState(""); // State to handle search input
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  // Get initial query from the URL when the component mounts
  useEffect(() => {
    const params = new URLSearchParams(window.location.search); // Use window.location.search
    const initialQuery = params.get("query"); // Get the 'query' parameter
    if (initialQuery) {
      setSearchQuery(initialQuery); // Set the state with the initial query
    }
  }, []);
  useEffect(() => {
    setTimeout(() => {
      !isLoggedIn ? services.authentication.isLoggedIn(setIsLoggedIn) : "";
    }, 1000);
  }, []);

  useEffect(() => {
    services.authentication.isLoggedIn(setIsLoggedIn);
  }, []);
  

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      isLoggedIn
        ? (window.location.href = `${config.redirect_url}/components/SearchResults?query=${searchQuery}`)
        : toast.warn("🤫 Please Sign In to search", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // : alert("Please login to search");

    }
  };

  const handleClearSearch = () => {
    setSearchQuery(""); // Clear the search query state
  };
  // console.log(props.boxWidth);
  return (
    <>
    <ToastContainer/>
    <Suspense fallback={<SearchBarFallback />}>
      <div
        className={styles.SearchBox}
        style={{
          width: props.boxWidth ? props.boxWidth + "vw" : "",
        }}
      >
        <img src={resources.magnifyingGlass.src} alt="Search Icon" />
        <input
          className={styles.SearchBox__Input}
          id="SearchBox__Input"
          value={searchQuery} // Controlled input for search query
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
    </>
  );
}

function SearchBarFallback() {
  return <div>Loading...</div>; // Fallback content while Suspense is resolving
}
