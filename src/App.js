import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import './App.css';
import { forwardRef } from 'react';

const ColorTooltip = () => {
  return <span style={{ color: 'yellow' }}>Color Component</span>
}

const ColorComponent = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>Line 1</div>
      <div>Line 2</div>
    </div>
  )
})

function App() {
  return (
    <div className="App">
      <div style={{ padding: 20 }}>
        <Tippy arrow={false} content="Basic tooltip">
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ padding: 20 }}>
        <Tippy delay={1000} content={<span style={{ color: 'green', background: "#121212" }}>Color</span>}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ padding: 20 }}>
        <Tippy placement='right' content={<ColorTooltip />}>
          <button>Hover</button>
        </Tippy>
      </div>
      <div style={{ padding: 20 }}>
        <Tippy placement='top-start' content={<ColorTooltip />}>
          <ColorComponent />
        </Tippy>
      </div>
    </div>
  );
}

export default App;
