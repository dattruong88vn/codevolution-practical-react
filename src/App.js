import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";
import "./App.css";

const loaderCSS = {
  marginTop: "25px",
  marginBottom: "25px",
};

function App() {
  return (
    <div className="App">
      <BounceLoader loading size={24} color="red" cssOverride={loaderCSS} />
      <BarLoader loading size={48} color="blue" cssOverride={loaderCSS} />
      <BeatLoader loading size={72} color="green" cssOverride={loaderCSS} />
    </div>
  );
}

export default App;
