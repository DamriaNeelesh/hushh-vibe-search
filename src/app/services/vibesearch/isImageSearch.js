export default async function isImageSearch(setIsImageSearch) {
  let imageFile = localStorage.getItem("image-file");
  setIsImageSearch ? setIsImageSearch(imageFile != null) : "";
  return imageFile != null;
}
