function ColorButton({
  color,
  selectedColor,
  setSelectedColor,
}) {
  return (
    <div
      className={`color-box ${
        selectedColor === color ? "active" : ""
      }`}
      style={{ backgroundColor: color }}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
}

export default ColorButton;