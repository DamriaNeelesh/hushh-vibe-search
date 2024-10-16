// Definition: Header component for the AboutUs page
import styles from './Header.module.css'
import resources from '../../../resources/resources'
export default function Header(){
    return (
        <div className={`${styles.Header} figtree`}>
            <img className={styles.Header__Logo} src={resources.images.VibeLogo.src}></img>
            <div className={styles.Header__Pages}>
                <div className={styles.Header__AboutUs}>
                    About Us
                </div>
                <div className={styles.Header__ContactUs}>
                    Contact Us
                </div>
            </div>
        </div>
    )
}