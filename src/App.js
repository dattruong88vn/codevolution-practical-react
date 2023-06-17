import React, { useRef } from "react";
import CountUp, { useCountUp } from "react-countup";

import "./App.css";

function App() {
  const countUpRef = useRef(null);

  const { countUp, start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    duration: 5,
    end: 10000,
    startOnMount: false
  })

  return <div className="App">
    <div>
      <h1>{countUp}</h1>
      <div ref={countUpRef} />
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={pauseResume}>Pause / Resume</button>
      <button onClick={() => update(2000)}>Update</button>
    </div>
    <h1>
      <CountUp end={200} />
    </h1>
    <h1>
      <CountUp end={200} duration={5} />
    </h1>
    <h1>
      <CountUp start={500} end={1000} duration={5} />
    </h1>
    <h1>
      <CountUp prefix="$" end={1000} duration={5} decimal={2} />
    </h1>
    <h1>
      <CountUp suffix="USD" end={1000} duration={5} decimal={2} />
    </h1>
  </div>;
}

export default App;
