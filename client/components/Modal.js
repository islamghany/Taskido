import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
// import ErrorModal from './error-modal';
// import SuccessModal from './success-modal';
import styled from "styled-components";
import BolarModal from "./BolarModal";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  &.modal-enter {
    .modal__container {
      background: transparent;
    }
    .modal__body {
      opacity: 0;
      transform: scale(0.2);
    }
  }
  &.modal-enter-active {
    .modal__body {
      opacity: 1;
      transform: translateX(0);
    }
    .modal__container {
      background: rgba(0, 0, 0, 0.4);
      transition: background 0.3s;
    }
  }

  &.modal-enter-done {
    .modal__container {
      background: rgba(0, 0, 0, 0.4);
    }
  }

  &.modal-exit {
    .modal__body {
      opacity: 1;
    }
  }
  &.modal-exit-active {
    .modal__body {
      opacity: 0;
      transform: scale(0.2);
    }
  }
  .modal__container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 300ms, transform 300ms;
    .modal__body {
      width: 50rem;
      background: #f0f0f3;
      border-radius: 1.5rem;
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
        0 1px 3px rgba(0, 0, 0, 0.08);
      transition: opacity 300ms, transform 300ms;
      @media (max-width: 600) {
        width: 95vw;
      }
    }
  }
`;
const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflowY = "auto";
    }
  };
  const openModal = () => {
    if (!isOpen) {
      setIsOpen(true);
      document.body.style.overflowY = "hidden";
    }
  };
  return (
    <>
      <div style={{ display: "inline-block" }} onClick={openModal}>
        {props.children}
      </div>
      <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
        <StyledModal onClick={closeModal}>
          <div className="modal__container">
            <div className="modal__body" onClick={(e) => e.stopPropagation()}>
              {props.type === "bolar" ? (
                <BolarModal
                  message="are you sure you want to delete this task"
                  closeModal={closeModal}
                  onConfirm={props.onConfirm}
                />
              ) : null}
            </div>
          </div>
        </StyledModal>
      </CSSTransition>
    </>
  );
};
export default Modal;
