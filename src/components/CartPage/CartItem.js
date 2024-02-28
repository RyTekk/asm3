import { numberWithDots } from "hooks/use-fetchproduct";
import { useDispatch } from "react-redux";
import { cartAction } from "store/cartReducer";

function CartItem(props) {
  const dispatch = useDispatch();

  function removeItemHandler(id) {
    dispatch(cartAction.removeItem(id));
  }

  return (
    <tr className="cart-item">
      <td className="ci-image">
        <img src={props.img} alt={props.name} />
      </td>
      <td className="ci-product">{props.name}</td>
      <td className="ci-price">{numberWithDots(props.price)} VND</td>
      <td className="ci-quantity">
        <button
          type="button"
          onClick={() => dispatch(cartAction.decreaseQuantity(props.id))}
        >
          &lt;
        </button>
        {props.quantity}
        <button
          type="button"
          onClick={() => dispatch(cartAction.increaseQuantity(props.id))}
        >
          &gt;
        </button>
      </td>
      <td className="ci-total">
        {numberWithDots(props.price * props.quantity)} VND
      </td>
      <td className="ci-remove">
        <button onClick={() => removeItemHandler(props.id)}>REMOVE</button>
      </td>
    </tr>
  );
}

export default CartItem;
