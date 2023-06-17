import React, { useRef, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'
import Modal from 'react-modal';

Modal.setAppElement('#root');

function IdleTimerContaner() {
    const [isLogin, setIsLogin] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const timeoutRef = useRef(null);

    const onIdle = () => {
        console.log('User is Idle')
        setModalIsOpen(true);
        timeoutRef.current = setTimeout(logOut, 5000);
    }

    const logOut = () => {
        setModalIsOpen(false);
        setIsLogin(false);
        clearTimeout(timeoutRef)
    }

    const keepLogin = () => {
        setModalIsOpen(false)
        clearTimeout(timeoutRef)
    }

    useIdleTimer({
        onIdle,
        timeout: 5 * 1000,
    })

    return (
        <div>
            {isLogin ? "Hello Dat" : "Hello, Guest"}
            <Modal isOpen={modalIsOpen}>
                <h2>You're been idle for a while</h2>
                <p>You will be log out soon</p>
                <div>
                    <button onClick={logOut}>Log me out</button>
                    <button onClick={keepLogin}>Keep me sign in</button>
                </div>
            </Modal>
        </div>
    )
}

export default IdleTimerContaner