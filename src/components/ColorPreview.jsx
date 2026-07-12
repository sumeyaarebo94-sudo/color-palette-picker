function ColorPreview({ selectedColor, setSelectedColor }) {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Preview</h2>

      <div
        style={{
          width: "70px",
          height: "70px",
          backgroundColor: selectedColor || "white",
          border: "3px solid black",
          borderRadius: "15px",
          boxShadow: "0 0 15px gray",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "gray",
          fontWeight: "bold",
          marginBottom: "15px",
        }}
      >
        {selectedColor ? "" : "No Color"}
      </div>

      <h2>
        {selectedColor
          ? `Selected Color: ${selectedColor}`
          : "No color selected yet"}
      </h2>

      <button onClick={() => setSelectedColor("")}>
        Reset
      </button>
    </div>
  );
}

export default ColorPreview;