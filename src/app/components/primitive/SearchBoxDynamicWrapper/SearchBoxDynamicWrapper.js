"use client";
import dynamic from "next/dynamic";
let SearchBoxUI = dynamic(() => import("./SearchBoxUI/SearchBoxUI"), {
  ssr: false,
});
export default function SearchBoxDynamicWrapper({
  openMenu,
  searchQuery,
  placeholder,
  setSearchQuery,
  handleSearch,
  setFile,
  fileInputElement,
}) {
  return (
    <SearchBoxUI
      openMenu={openMenu}
      searchQuery={searchQuery}
      placeholder={placeholder}
      setSearchQuery={setSearchQuery}
      handleSearch={handleSearch}
      setFile={setFile}
      fileInputElement={fileInputElement}
    ></SearchBoxUI>
  );
}
