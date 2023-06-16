import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

const CustomToase = ({ closeToast }) => {
  return (
    <div>
      Some thing went wrong !
      <button onClick={closeToast}>Close</button>
    </div>
  )
}


function App() {
  const notify = () => {
    toast('Basic notification', { position: toast.POSITION.TOP_LEFT, })
    toast.success('Basic notification', { position: toast.POSITION.TOP_CENTER, autoClose: false })
    toast.warn('Basic notification', { position: toast.POSITION.TOP_RIGHT, autoClose: 8000 })
    toast.error(<CustomToase />, { position: toast.POSITION.BOTTOM_LEFT })
    toast.dark('Basic notification', { position: toast.POSITION.BOTTOM_CENTER })
    toast.info('Basic notification', { position: toast.POSITION.BOTTOM_RIGHT })
  }

  return (
    <div className="App">
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </div>
  );
}

export default App;
