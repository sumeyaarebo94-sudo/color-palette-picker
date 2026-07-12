function ColorPreview({ selectedColor, setSelectedColor }) {
  return (
    <div style={{ marginTop: "30px" }}>
      {selectedColor ? (
        <>
          <div
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: selectedColor,
              margin: "0 auto",
              border: "3px solid black",
              borderRadius: "10px",
            }}
          ></div>

          <h2>Selected Color: {selectedColor}</h2>
        </>
      ) : (
        <h2>No color selected yet</h2>
      )}

      <button onClick={() => setSelectedColor("")}>
        Reset
      </button>
    </div>
  );
}

export default ColorPreview;