import { useState } from 'react'
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) { // name of function must start with a capital character
    const [modalIsOpen, setModalIsOpen] = useState(false);

    /*
        Function: deleteHandler
        Description: 
            - Occures when the button with the class name btn is clicked. 
            - Overlay appears on the screen with the option to delete the Todo
    */
    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
        </div>
    );
}

export default Todo;