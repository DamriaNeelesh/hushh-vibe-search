import Marquee from "react-fast-marquee";
import styles from "./CompaniesMarquee.module.scss";
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
import Image from "next/image";
export default function CompaniesMarquee(props) {
  let logos = props.isMobile
    ? [
        [
          adidas,
          balenciaga,
          calvinKlien,
          puma,
          chanel,
          DAndG,
          dior,
          FoG,
          armani,
          gucci,
          hermes,
          hugoBoss,
          lv,
          nike,
          prada,
          michealKors,
        ],
      ]
    : [
        [adidas, balenciaga, calvinKlien, puma],
        [chanel, DAndG, dior, FoG],
        [armani, gucci, hermes, hugoBoss],
        [lv, nike, prada, michealKors],
      ];

  return (
    <div
      className={`${styles.CompaniesMarquee}`}
      style={{
        borderLeft: "1px solid black",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {logos.map((logoArray, index) => (
        <Marquee
          autoFill={true}
          key={index}
          direction={index % 2 === 0 ? "left" : "right"}
          speed={50} // Adjust speed as needed
          gradient={false} // Disable gradient for a seamless look
          className={`${styles.CompaniesMarquee__Marquee}`}
        >
          <div className={styles.CompaniesMarquee__logoRow}>
            {logoArray.map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt="brands"
                className={styles.CompaniesMarquee__Logo}
              />
            ))}
          </div>
        </Marquee>
      ))}
    </div>
  );
}
