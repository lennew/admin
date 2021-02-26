import React, { FunctionComponent } from 'react';
import { createPortal } from "react-dom";
import { ModalProps } from './modal.utils';
import { Overlay} from './modal.styles';

const Modal: FunctionComponent<ModalProps> = (props) => {
    const modalService = document.getElementById('modal-service-container');
    return modalService ? createPortal(
        <>
            {props.isOpen && 
            <Overlay>
                {props.content}
            </Overlay>}
        </>, modalService)
        : null;
}

export default Modal;