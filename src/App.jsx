import "./App.css";

function App() {
  const colors = ["red", "blue", "green", "yellow", "purple"];

  return (
    <div className="app">
      <h1>🎨 Color Palette Picker</h1>

      <div className="palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;