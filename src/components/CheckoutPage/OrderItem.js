import { numberWithDots } from "hooks/use-fetchproduct";

function OtherItem(props) {
  return (
    <div className="other-item">
      <div className="oi-name">{props.name}</div>
      <div className="oi-quantity">
        {numberWithDots(props.price)} VND x {props.quantity}
      </div>
    </div>
  );
}

export default OtherItem;
