"use client";
import utilities from "../../utilities/utilities";
import Resources from "../../../resources/resources";
import { useEffect, useState } from "react";
export default function AnimatedSearchBox(props) {
  let [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    let index = 0;
    setInterval(() => {
      setSearchQuery(Resources.config.queries[index]);
      index++;
      if(index==Resources.config.queries.length){
        index=0;
      }
    }, 3000);
  }, []);

  return (
    <div>
      <utilities.SearchBox content={searchQuery} {...props}></utilities.SearchBox>
    </div>
  );
}
