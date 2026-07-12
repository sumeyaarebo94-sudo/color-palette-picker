import { useState } from "react";
import "./App.css";

function App() {
  const colors = ["red", "blue", "green", "yellow", "purple"];

  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className="app">
     <h1>🎨 Color Palette Picker</h1>

      <div className="palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          ></div>
        ))}
      </div>

      <h2>Selected Color: {selectedColor || "None"}</h2>
    </div>
  );
}

export default App;