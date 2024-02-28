import Modal from "layout/Modal";
import { numberWithDots } from "hooks/use-fetchproduct";
import "./PopUp.css";

function PopUp(props) {
  return (
    <Modal onClose={props.onClose}>
      <div className="popup">
        <div className="image">
          <img src={props.imgSrc} alt="product" />
        </div>
        <div className="info">
          <div className="name">{props.name}</div>
          <div className="price">{numberWithDots(props.price)} VND</div>
          <div className="description">{props.description}</div>
          <div className="description"></div>
          <button>View Detail</button>
        </div>
      </div>
    </Modal>
  );
}

export default PopUp;
