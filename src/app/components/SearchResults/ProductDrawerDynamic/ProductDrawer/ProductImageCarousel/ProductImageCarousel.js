import { Carousel } from "react-responsive-carousel";
import ProductImage from "../ProductImage/ProductImage";
export default function ProductImageCarousel({ allImages, selectedProduct }) {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      useKeyboardArrows={true}
      autoPlay={true}
      swipeable={true}
    >
      {allImages.map((image, index) => (
        <ProductImage
          image={image}
          index={index}
          selectedProduct={selectedProduct}
          key={index}
        ></ProductImage>
      ))}
    </Carousel>
  );
}
