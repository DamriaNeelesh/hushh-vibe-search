import styles from './DownArrow.module.css'
import DownArrowImage from './resources/DownArrow.svg'
import Image from 'next/image'
export default function DownArrow(){
    return (
        <div className={styles.DownArrow}>
        <Image src={DownArrowImage} alt="Down Arrow" className={styles.DownArrow__Image}/>
        </div>
    )
}