import { useSelector } from "react-redux";
import { numberWithDots } from "hooks/use-fetchproduct";
import "./Checkout.css";
import OtherItem from "./OrderItem";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  let total = 0;
  cart.map((item) => (total += item.price * item.quantity));
  total = numberWithDots(total);

  return (
    <div className="checkout">
      <div className="checkout-head">
        <div className="head-1">CHECKOUT</div>
        <div className="head-2">
          <span style={{ color: "black" }}>HOME / CART / &nbsp;</span>
          <span>CHECKOUT</span>
        </div>
      </div>
      <div className="checkout-text">BILLING DETAILS</div>
      <div className="checkout-content">
        <form>
          <label htmlFor="full-name">FULL NAME:</label>
          <br />
          <input
            id="full-name"
            type="text"
            placeholder="Enter Your Full Name Here!"
          />
          <br />
          <label htmlFor="email">EMAIL:</label>
          <br />
          <input id="email" type="email" placeholder="Enter Your Email Here!" />
          <br />
          <label htmlFor="phone">PHONE NUMBER:</label>
          <br />
          <input
            id="phone"
            type="tel"
            placeholder="Enter Your Phone Number Here!"
          />
          <br />
          <label htmlFor="adress">ADDRESS:</label>
          <br />
          <input
            id="address"
            type="text"
            placeholder="Enter Your Address Here!"
          />
          <br />
          <button>Place order</button>
        </form>
        <div className="your-order">
          <div className="yo-title">YOUR ORDER</div>
          {cart.map((item) => (
            <OtherItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
          <div className="yo-total">
            <div>TOTAL</div>
            <div>{total} VND</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
