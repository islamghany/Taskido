import { Button } from "./Button";
import styled from "styled-components";

const StyledBolarModal = styled.div`
  .modal__state--tail {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
  }
  .modal__state--body {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 2.4rem;
      font-weight: 300;
    }
    p {
      font-size: 1.4rem;
      color: #666666;
      font-weight: 300;
    }
  }
`;
const BolarModal = ({ closeModal, message, onConfirm }) => {
  return (
    <StyledBolarModal className="modal__state">
      <div className="modal__state--body">
        <p>{message}</p>
      </div>
      <div className="modal__state--tail">
        <button
          onClick={closeModal}
          className="btn btn--contained1-error mg-none"
        ></button>
        <Button
          onClick={() => onConfirm(closeModal)}
          className="contained"
          type="danger"
        >
          Delete
        </Button>
        <Button className="outline ml-1" onClick={closeModal} type="primary">
          Cancel
        </Button>
      </div>
    </StyledBolarModal>
  );
};
export default BolarModal;
