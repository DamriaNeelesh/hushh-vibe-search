"use client";
import dynamic from "next/dynamic";
let Price = dynamic(() => import("./Price/Price"), { ssr: false });

export default function DynamicPriceWrapper({ selectedProduct }) {
  return <Price selectedProduct={selectedProduct}></Price>;
}
