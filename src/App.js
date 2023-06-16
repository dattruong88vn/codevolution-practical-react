import Modal from 'react-modal'
import './App.css';
import { useState } from 'react';

Modal.setAppElement('#root')

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="App">
      <button onClick={openModal}>Show modal</button>
      <Modal isOpen={showModal} onRequestClose={closeModal} shouldCloseOnOverlayClick={false} style={{
        overlay: {
          backgroundColor: 'gray'
        },
        content: {
          color: 'orange'
        }
      }}>
        <h2>Modal title</h2>
        <p>Modal content</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
