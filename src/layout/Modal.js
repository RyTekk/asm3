import { Fragment } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClose}></div>;
}

function ModalOverlay(props) {
  return (
    <div className="modal">
      {props.children}
    </div>
  );
}

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
