function handleCheckboxChange(
  brand,
  isChecked,
  setTempSelectedBrands,
  tempSelectedBrands
) {
  if (isChecked) {
    setTempSelectedBrands([...tempSelectedBrands, brand]);
  } else {
    setTempSelectedBrands(tempSelectedBrands.filter((b) => b !== brand));
  }
}

export default handleCheckboxChange;
