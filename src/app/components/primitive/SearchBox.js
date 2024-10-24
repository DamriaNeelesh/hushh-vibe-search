"use client";
import Link from "next/link";
import styles from "./SearchBox.module.css";
import Resources from "../../../resources/resources";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox(
  placeholder = "What are you looking for?",
  openMenu,
  query
) {
  const [fileImg, setFile] = useState(null);
  const [fileInputElement, setFileInput] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setFileInput(document.getElementById("searchBox__fileInput"));
  }, []);

  const router = useRouter();

  const handleSearch = () => {
    if (localStorage && searchQuery !== "") {
      const searchHistory = localStorage.getItem("vibesearch-history") || "";
      localStorage.setItem(
        "vibesearch-history",
        searchHistory + "," + searchQuery
      );
    }
    router.push(`/components/SearchResults?query=${searchQuery}`);
  };

  return (
    <>
      {query !== "wishlist" ? (
        <div className={`${styles.searchBox}`}>
          <div
            className={`${styles.searchBox__leftContainer}`}
            style={{
              background: openMenu ? "rgba(255,255,255,.5)" : "#E7E7E7",
            }}
          >
            <Link
              onClick={() => {
                if (localStorage && searchQuery !== "") {
                  const searchHistory =
                    localStorage.getItem("vibesearch-history") || "";
                  localStorage.setItem(
                    "vibesearch-history",
                    searchHistory + "," + searchQuery
                  );
                }
              }}
              href={
                "SearchResults?" +
                (searchQuery !== "" ? "query=" + searchQuery : "")
              }
            >
              <img
                className={`${styles.searchBox__go}`}
                src={Resources.sendButton.src}
                alt="Hushh Vibe Share"
              ></img>
            </Link>
            <input
              type="text"
              id="searchBox__search"
              placeholder={
                placeholder === "entryEmpty"
                  ? "What are you looking for?"
                  : placeholder
              }
              className={`${styles.searchBox__search} cabin`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              style={{
                textOverflow: "ellipsis",
                opacity: openMenu ? 0 : 1,
              }}
            />
          </div>
          <div
            className={`${styles.searchBox__rightContainer}`}
            style={{
              opacity: openMenu ? 0.7 : 1,
            }}
          >
            <input
              type="file"
              accept="image/*"
              className={`${styles.searchBox__fileInput}`}
              id="searchBox__fileInput"
              onChange={(event) => {
                const file = event.target.files[0];

                if (file) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    const base64String = event.target.result;
                    setFile(base64String);

                    let temp = base64String.split(";");
                    temp = temp[1].split(",");

                    // Storing the image in localStorage
                    localStorage.setItem("image-file", temp[1]);
                    router.push(
                      `/components/SearchResults?imageSearch=${temp[1].slice(
                        -5
                      )}`
                    );
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            <img
              className={`${styles.searchBox__cameraImage}`}
              src={fileImg ? fileImg : Resources.Camera.src}
              onClick={() => {
                if (fileInputElement) {
                  fileInputElement.click();
                }
              }}
              alt="Hushh Vibe Share"
            ></img>
          </div>
        </div>
      ) : null}
    </>
  );
}
