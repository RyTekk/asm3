import { useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";
import { numberWithDots } from "hooks/use-fetchproduct";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  let total = 0;
  cart.map((item) => (total += item.price * item.quantity));
  total = numberWithDots(total);

  return (
    <div className="cart">
      <div className="cart-head">
        <div className="head-1">CART</div>
        <div className="head-2">CART</div>
      </div>
      <div className="shop-cart-text">SHOPPING CART</div>
      <div className="shop-cart-content">
        <div className="cart-list">
          <table className="cart-table">
            <thead>
              <tr>
                <th>IMAGE</th>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th>REMOVE</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </tbody>
          </table>
          <div className="cart-foot">
            <div className="foot-1" onClick={() => navigate("/shop")}>
              Continue shopping
            </div>
            <div className="foot-2" onClick={() => navigate("/checkout")}>
              Proceed to checkout
            </div>
          </div>
        </div>
        <div className="cart-total">
          <div className="ct-title">CART TOTAL</div>
          <div className="sub-total">
            <div>SUBTOTAL</div>
            <div>{total} VND</div>
          </div>
          <div className="ct-total">
            <div>TOTAL</div>
            <div>{total} VND</div>
          </div>
          <div className="coupon">
            <input placeholder="Enter your coupon" />
            <button>Apply coupon</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
