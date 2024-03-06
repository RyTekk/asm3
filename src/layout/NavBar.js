import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "store/loginReducer";

function NavBar() {
  const isLogin = useSelector((state) => state.login);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="navbar-left">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="shop"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Shop
        </NavLink>
      </div>
      <div className="navbar-mid">BOUTIQUE</div>
      <div className="navbar-right">
        <NavLink
          to="cart"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Cart
        </NavLink>
        {isLogin.isLogin === 0 ? (
          <NavLink
            to="login"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Login
          </NavLink>
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
