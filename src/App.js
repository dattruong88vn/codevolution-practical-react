import { FaReact } from "react-icons/fa"
import { MdAlarm } from 'react-icons/md';
import { IconContext } from 'react-icons'

import './App.css';

function App() {
  return (
    <IconContext.Provider value={{ color: 'purple', size: '10rem' }}>

      <div className="App">
        <FaReact color="green" size='10rem' />
        <MdAlarm />
      </div>
    </IconContext.Provider>
  );
}

export default App;
