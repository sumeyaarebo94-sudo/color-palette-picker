import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>🎨 Color Palette Picker</h1>

      <div className="palette">
        <div className="color-box" style={{ backgroundColor: "red" }}></div>
        <div className="color-box" style={{ backgroundColor: "blue" }}></div>
        <div className="color-box" style={{ backgroundColor: "green" }}></div>
        <div className="color-box" style={{ backgroundColor: "yellow" }}></div>
        <div className="color-box" style={{ backgroundColor: "purple" }}></div>
      </div>
    </div>
  );
}

export default App;