"use client";
import styles from "./Header.module.css";
import resources from "../../../resources/resources";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Footer from "../../utilities/Footer/Footer";

export default function Header(props) {
  useEffect(() => {}, [props.page]);
  const router = useRouter();

  const pathname = usePathname();
  return (
    <>
      <div
        className={`${styles.Header} figtree`}
        style={{ position: "sticky", top: "0", background: "white" }}
      >
        <img
          className={styles.Header__Logo}
          src={resources.images.VibeLogo.src}
          alt="Vibe Logo"
        />
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
