const mobileProductDrawer = (product, setSelectedProduct, setIsDrawerOpen, onOpen) => {
  setSelectedProduct(product);
  setIsDrawerOpen(true);
  onOpen();
  document.body.style.overflow = "hidden"; // Prevent body scroll when drawer is open
};

export default mobileProductDrawer;
