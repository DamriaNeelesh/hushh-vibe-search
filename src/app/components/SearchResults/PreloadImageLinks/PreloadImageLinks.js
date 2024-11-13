export default function PreloadImageLink({
    index, product
}) {
  return (
    <link key={index} rel="preload" href={product?.image} as="image"></link>
  );
}
