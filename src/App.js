import { useState } from "react";
import { ChromePicker } from "react-color"
import './App.css';

function App() {
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [selectedColor, setSelectedColor] = useState('#FFF');
  return (
    <div className="App">
      <button onClick={() => setShowColorPicker(prevShow => !prevShow)}>{showColorPicker ? "Hide color picker" : "Pick a color"}</button>
      <h3>You selected color: {selectedColor}</h3>
      {showColorPicker && <ChromePicker color={selectedColor} onChange={color => setSelectedColor(color.hex)} />}
    </div>
  );
}

export default App;
