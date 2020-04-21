import React from 'react';
import { ModalContainer, ModalContents } from '../styledComponents/index';

const Modal = ({ contents }) => {
  return (
    <ModalContainer>
      <ModalContents>{contents}</ModalContents>
    </ModalContainer>
  );
};

export default Modal;
