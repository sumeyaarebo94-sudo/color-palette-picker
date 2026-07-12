import { useState } from "react";
import "./App.css";
import ColorButton from "./components/ColorButton";
import ColorPreview from "./components/ColorPreview";

function App() {
  const colors = ["red", "blue", "green", "yellow", "purple"];
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className="app">
      <h1>🎨 My Color Palette Picker</h1>

      <p>Pick a color to preview it below.</p>

      <h3>Choose a color:</h3>

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

      <footer>
        <p>Made by Sumeya ❤️ using React</p>
      </footer>
    </div>
  );
}

export default App;