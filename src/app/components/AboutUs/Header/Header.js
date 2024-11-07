"use client";
import styles from "./Header.module.css";
import resources from "../../../resources/resources";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Footer from "../../utilities/Footer/Footer";
import Image from "next/image";
import figtree from "../../../fonts/Figtree";
import Link from "next/link";
export default function Header(props) {
  useEffect(() => {}, [props.page]);
  const router = useRouter();

  const pathname = usePathname();
  return (
    <>
      <div
        className={`${styles.Header} ${figtree.className}`}
        style={{ position: "sticky", top: "0", background: "white" }}
      >
        <Link href={"/"}>
          <div className={styles.Header__Logo}>
            <Image
              src={resources.images.VibeLogo.src}
              alt="Vibe Logo"
              width={"69"}
              height={"35"}
            />
          </div>
        </Link>
        <div className={styles.Header__Pages}>
          <div
            className={styles.Header__PageBox}
            onClick={() => {
              router.push("/about-us");
            }}
            // className={`link ${pathname === '/contact-us' ? 'gradient-text' : ''}`}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.Header__AboutUs}>About</div>
            {pathname === "/about-us" && (
              <div className={styles.Header__UnderLine}></div>
            )}
          </div>
          <div
            className={styles.Header__PageBox}
            onClick={() => {
              router.push("/privacy-policy");
            }}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.Header__PrivacyPolicy}>Privacy Policy</div>
            {pathname === "/privacy-policy" && (
              <div className={styles.Header__UnderLine}></div>
            )}
          </div>
          <div
            className={styles.Header__PageBox}
            onClick={() => {
              router.push("/terms-of-use");
            }}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.Header__PrivacyPolicy}>Terms of Use</div>
            {pathname === "/terms-of-use" && (
              <div className={styles.Header__UnderLine}></div>
            )}
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}
