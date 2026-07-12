function ColorPreview({ selectedColor, setSelectedColor }) {
  return (
    <>
      <h2>Selected Color: {selectedColor || "None"}</h2>

      <button onClick={() => setSelectedColor("")}>
        Reset
      </button>
    </>
  );
}

export default ColorPreview;