import ReactPlayer from "react-player";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=HP4E33B8E7"
        controls={true}
        width="480"
        height="240"
        onReady={() => console.log("onReady callback")}
        onPlay={() => console.log("onPlay callback")}
        onPause={() => console.log("onPause callback")}
        onEnded={() => console.log("onEnded callback")}
        onError={() => console.log("EronError callback")}
      />
    </div>
  );
}

export default App;
