"use client";
import utilities from "../utilities";
import Resources from "../../../resources/resources";
import { useEffect, useState } from "react";
export default function AnimatedSearchBox({ boxWidth, inputWidth, content }) {
  let [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    let index = 0;
    setInterval(() => {
      setSearchQuery(Resources.config.queries[index]);
      index++;
      if (index == Resources.config.queries.length) {
        index = 0;
      }
    }, 3000);
  }, []);

  return (
    <div>
      <utilities.SearchBox
        content={content ? content : searchQuery}
        boxWidth={boxWidth}
        inputWidth={inputWidth}
      ></utilities.SearchBox>
    </div>
  );
}
