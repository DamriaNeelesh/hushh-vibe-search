import styles from "./CompaniesMarquee.module.css";
import adidas from "./resources/adidas.svg";
import balenciaga from "./resources/balenciaga.svg";
import calvinKlien from "./resources/calvin-klein.svg";
import chanel from "./resources/chanel.svg";
import DAndG from "./resources/DAndG.svg";
import dior from "./resources/dior.svg";
import armani from "./resources/giorgio-armani-3 1.svg";
import gucci from "./resources/gucci.svg";
import hermes from "./resources/hermes.svg";
import lv from "./resources/louis-vuitton.svg";
import nike from "./resources/nike.svg";
import prada from "./resources/prada.svg";
import puma from "./resources/puma.svg";
import FoG from "./resources/FOG.svg";
import hugoBoss from "./resources/hugo-boss.svg";
import michealKors from "./resources/micheal-kors.svg";

export default function CompaniesMarquee() {
  let logos = [
    [adidas, balenciaga, calvinKlien, puma],
    [chanel, DAndG, dior, FoG],
    [armani, gucci, hermes, hugoBoss],
    [lv, nike, prada, michealKors],
  ];

  return (
    <div className={`${styles.CompaniesMarquee}`} style={{ borderLeft: '1px solid black' , display:'flex',flexDirection:'column',gap:'2rem'}}>
      {logos.map((logoArray, index) => {
        // Duplicate the logos inside each marquee row to ensure continuous flow
        return (
          <marquee
            className={`${styles.CompaniesMarquee__Marquee}`}
            direction={index % 2 === 0 ? "left" : "right"}
            key={index}
          >
            <div className={styles.CompaniesMarquee__logoRow}>
              {logoArray.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo.src}
                  alt="logo"
                  className={styles.CompaniesMarquee__Logo}
                />
              ))}
              {/* Duplicate the logos to avoid any gap at the end */}
              {logoArray.map((logo, idx) => (
                <img
                  key={idx + logoArray.length} // Ensure a unique key for duplicated items
                  src={logo.src}
                  alt="logo"
                  className={styles.CompaniesMarquee__Logo}
                />
              ))}
            </div>
          </marquee>
        );
      })}
    </div>
  );
}
