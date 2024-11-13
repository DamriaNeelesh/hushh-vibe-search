export default async function hasValidImage(src) {
  let image = src;
  try {
    const response = await fetch(image);
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
