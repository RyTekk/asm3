import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "store/loginReducer";

function NavBar() {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-home" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="navbar-shop" onClick={() => navigate("shop")}>
          Shop
        </div>
      </div>
      <div className="navbar-mid">BOUTIQUE</div>
      <div className="navbar-right">
        <div className="navbar-cart" onClick={() => navigate("cart")}>
          Cart
        </div>
        {isLogin.isLogin === 0 ? (
          <div className="navbar-login" onClick={() => navigate("login")}>
            Login
          </div>
        ) : (
          <div
            className="navbar-login"
            onClick={() => dispatch(loginAction.logout())}
          >
            {isLogin.name}
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
