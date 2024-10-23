const closeDrawer = (setIsDrawerOpen, setSelectedProduct) => {
  setIsDrawerOpen(false);
  setSelectedProduct(null);
  document.body.style.overflow = "auto"; // Restore body scroll when drawer is closed
};
export default closeDrawer;
