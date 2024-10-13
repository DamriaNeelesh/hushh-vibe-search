"use client";
import styles from './HomeScreenHeader.module.css';
import Utilities from '../Utilities';
import Resources from '../../../resources/resources';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HomeScreenHeader(setOpenMenu, isGuestMode, showDetails = null) {
    const [isGuest, setIsGuest] = useState(true);

    useEffect(() => {
        if (Object.keys(isGuestMode).length === 0 || isGuestMode["data"]["user"] == null) {
            setIsGuest(true);
        } else {
            setIsGuest(false);
        }
    }, [isGuestMode]);

    return (
        <div className={`${styles.homescreen__header}`}>
            {/* <img
                className={`${styles.header__menuSandwichIcon}`}
                src={Resources.menuSandwichIcon.src}
                onClick={() => {
                    if (showDetails) showDetails(false);
                    setOpenMenu(true);
                }}
            /> */}
            <Link href={"/components/HomeScreen"}>
                <Utilities.VibeLogo />
            </Link>
            {
                !isGuest ? (
                    <Link href={"/components/SearchResults?query=wishlist"}>
                        wishlist icon{/* <img className={`${styles.header__newSearch}`} src={Resources.wishlistIcon.src} /> */}
                    </Link>
                ) : (
                    <div onClick={() => {
                        alert("Please login to access wishlist");
                    }}>
                        {/* <img className={`${styles.header__newSearch}`} src={Resources.wishlistIcon.src} /> */}
                    </div>
                )
            }
        </div>
    );
}