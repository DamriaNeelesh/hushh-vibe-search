import mobileProductDrawer from "./mobileProductDrawer";
const handleProductClick = (product, setSelectedProduct, setIsDrawerOpen, onOpen, isMobile, openDrawer) => {
    if (isMobile) {
      mobileProductDrawer(product, setSelectedProduct, setIsDrawerOpen, onOpen); // Open mobile drawer
    } else {
      openDrawer(product, setSelectedProduct, setIsDrawerOpen, onOpen); // Open desktop drawer
    }
  };

  export default handleProductClick;