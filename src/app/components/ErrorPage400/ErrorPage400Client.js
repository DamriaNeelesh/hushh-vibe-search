'use client';

import React from 'react';
import utilities from "../utilities/utilities";
import error400 from "./resources/error400.svg";

export default function ErrorPage400Client() {
  return (
    <div>
      <utilities.ErrorPage
        title={"Style Mishap! Your request got lost in translation."}
        subTitle={
          "Double-check your search or try phrasing it differently. Remember, we speak fashion! You can also explore some of our trending searches below."
        }
        code={"400"}
        image={error400.src}
      />
    </div>
  );
} 