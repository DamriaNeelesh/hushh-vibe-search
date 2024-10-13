"use client";
import Resources from "../../resources/resources";
import styles from "./ProductPage.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { Carousel } from "antd";

export default function ProductPage(
  query,
  image,
  name,
  price,
  url,
  setShowDetails,
  id,
  access_token,
  showDetails,
  description,
  brand,
  priceAvailable,
  additionalDesc,
  additional_images
) {
  let images = additional_images ? [image, ...additional_images] : [image];

  return (
    <motion.div
      animate={{
        y: showDetails ? -608 : 0,
      }}
      transition={{
        delay: 1,
      }}
    >
      <div style={{ display: showDetails ? "inherit" : "none" }}>
        <div className={`${styles.productPage}`}>
          <div className={`${styles.productPage__upper}`}>
            <img
              className={`${styles.header__backArrow}`}
              src={Resources.backArrow.src}
              onClick={() => {
                setShowDetails(false);
              }}
            />
            <Carousel draggable>
              {images.map((image_url, index) => (
                <div key={index}>
                  <img
                    className={`${styles.productPage__productImages}`}
                    src={image_url}
                  />
                </div>
              ))}
            </Carousel>
            <div className={`${styles.productPage__productDetails}`}>
              <div
                className={`${styles.productDetail__productBrand} cabin fontWeight600`}
              >
                {brand}
              </div>
              <div
                className={`${styles.productDetail__productName} cabin fontWeight600`}
              >
                {name}
              </div>
              <div className={`${styles.productDetail__productPrice} cabin`}>
                {price != null ? "USD " + price : "Visit website for price"}
              </div>
              <div className={`${styles.productDetail__desc} cabin`}>
                {description}
              </div>
              <div className={`${styles.productDetail__desc} cabin`}>
                {additionalDesc}
              </div>
            </div>
          </div>
          <div className={`${styles.productPage__footer}`}>
            <Link href={url ? url : ""} target="_blank">
              <div className={`${styles.footer__viewProductButton} blackButton`}>
                View Product Page
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}