"use client";
import dynamic from "next/dynamic";
let ProductDrawer = dynamic(() => import("./ProductDrawer/ProductDrawer"), {
  ssr: true,
});
export default function ProductDrawerDynamic(props) {
    return (
        <ProductDrawer {...props} />
    )
}
