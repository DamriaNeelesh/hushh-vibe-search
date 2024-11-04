"use client";
import Link from "next/link";
import styles from "./SearchBox.module.css";
import Resources from "../../../resources/resources";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SearchBoxDynamicWrapper from "./SearchBoxDynamicWrapper/SearchBoxDynamicWrapper";

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
        <SearchBoxDynamicWrapper
          openMenu={openMenu}
          searchQuery={searchQuery}
          placeholder={placeholder}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          setFile={setFile}
          fileInputElement={fileInputElement}
        ></SearchBoxDynamicWrapper>
      ) : null}
    </>
  );
}
