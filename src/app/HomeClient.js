'use client';

import React, { useEffect, useState } from "react";
import ToBeLaunched from "./components/ToBeLaunched/ToBeLaunched";
import utilities from "./components/utilities/utilities";
import Head from "next/head";

export default function HomeClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Vibe Search - match your perfect outfit with us</title>
        <meta name="description" content="Find perfect items to express your individuality in just one click with our vibe search" />
      </Head>
      <ToBeLaunched />
      <utilities.Footer />
    </>
  );
} 