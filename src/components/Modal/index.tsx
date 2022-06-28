import React, { FC } from 'react';
import { ModalProps } from './modal.props';
import ModalBlock from 'react-modal';
import './modal.scss';
import Close from '../../assets/images/close.svg';

ModalBlock.setAppElement('#root');

const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
   return (
      <ModalBlock isOpen={open} closeTimeoutMS={200} className="modal" overlayClassName="overlay">
         <button type="button" onClick={onClose} className="close">
            <img src={Close} alt="" />
         </button>
         {children}
      </ModalBlock>
   );
};

export default Modal;
