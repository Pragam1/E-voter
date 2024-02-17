import React, { FC } from 'react'

const Modal : React.FC<any> = (props) => {
    return (
        <dialog id={props.id} className="modal">
            <div className="modal-box">
                {props.children}
            </div>
        </dialog>
    )
}

export default Modal