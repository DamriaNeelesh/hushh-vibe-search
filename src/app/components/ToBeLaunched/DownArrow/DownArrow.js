import styles from "./DownArrow.module.scss";
import DownArrowImage from "./resources/DownArrow.svg";
import Image from "next/image";
import { motion } from "framer-motion";
export default function DownArrow() {
  return (
    <motion.div 
        animate={{ y: 50 }}
        transition={{ duration: 2, repeat: Infinity }}
        
    >
      <div className={styles.DownArrow}>
        <Image
          src={DownArrowImage}
          alt="Down Arrow"
          className={styles.DownArrow__Image}
        />
      </div>
    </motion.div>
  );
}
