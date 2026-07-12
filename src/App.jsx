import { useState } from "react";
import "./App.css";
import ColorButton from "./components/ColorButton";
import ColorPreview from "./components/ColorPreview";

function App() {
  const colors = ["red", "blue", "green", "yellow", "purple"];
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className="app">
      <h1>🎨 Color Palette Picker</h1>

      <div className="palette">
        {colors.map((color, index) => (
          <ColorButton
            key={index}
            color={color}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        ))}
      </div>

      <ColorPreview
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
    </div>
  );
}

export default App;