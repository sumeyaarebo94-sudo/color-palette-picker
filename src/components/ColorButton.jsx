function ColorButton({
  color,
  selectedColor,
  setSelectedColor,
}) {
  return (
    <button
      className={
        selectedColor === color
          ? "active-button"
          : "color-button"
      }
      style={{ backgroundColor: color }}
      onClick={() => setSelectedColor(color)}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)}
      {selectedColor === color ? " ❤️" : ""}
    </button>
  );
}

export default ColorButton;