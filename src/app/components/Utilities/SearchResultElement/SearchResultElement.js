"use client";
import Resources from '../../../resources/resources';
import styles from './SearchResultElement.module.css';
import services from '../../../services/services';
import { Carousel } from 'antd';

export default function SearchResultElement(
    id,
    brand_name,
    product_title,
    price,
    ratings,
    noOfReviews,
    image,
    description,
    access_token,
    setShowDetails,
    priceAvailaible,
    inWishList,
    additional_images,
    addThisIndex,
    elementsInWishList,
    index,
    query,
    removeThisIndex,
    product_id
) {
    const images = [image, ...additional_images];

    return (
        <div className={`${styles.searchResultElement__wrapper}`}>
            <img
                className={`${styles.searchResultElement__likeButton}`}
                src={!elementsInWishList.has(index) ? Resources.LikeIcon.src : Resources.LikedIcon.src}
                onClick={() => {
                    let temp = null;
                    let netId = id;
                    if (query === "wishlist") {
                        netId = product_id;
                    }
                    if (!elementsInWishList.has(index)) {
                        services.addToWishList(netId, access_token);
                        temp = index;
                        addThisIndex(temp);
                    } else {
                        services.removeFromWishlist(netId, access_token);
                        removeThisIndex(index);
                    }
                }}
            />
            <div
                className={`${styles.searchResultElement}`}
                onClick={() => setShowDetails(true)}
            >
                <Carousel dots={false} draggable infinite>
                    {images.map((imgSrc, idx) => (
                        <img key={idx} src={imgSrc} className={`${styles.searchResultElement__image}`} />
                    ))}
                </Carousel>
                <div className={`${styles.searchResultElement__content}`}>
                    <div>
                        <div className={`${styles.searchResultElement__brandname} cabin`}>{brand_name}</div>
                        <div className={`${styles.searchResultElement__productTitle}`}>{product_title}</div>
                    </div>
                    <div className={`${styles.searchResultElement__price} cabin`}>
                        {priceAvailaible ? "$ " + price : "Visit website for price"}
                    </div>
                </div>
            </div>
        </div>
    );
}