import { NavLink } from "react-router-dom";

function Category({ onProductStateHandler }) {
  return (
    <div className="shop-category">
      <div className="c-heading">CATEGORIES</div>
      <div className="c-name">
        <div className="c-kind apple">APPLE</div>
        <div className="c-kind-list">
          <NavLink
            to=""
            onClick={() => onProductStateHandler("")}
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            All
          </NavLink>
        </div>
      </div>
      <div className="c-name">
        <div className="c-kind">IPHONE & MAC</div>
        <div className="c-kind-list">
          <NavLink
            to="iphone"
            onClick={() => onProductStateHandler("iphone")}
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            iPhone
          </NavLink>
          <NavLink
            to="ipad"
            onClick={() => onProductStateHandler("ipad")}
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            iPad
          </NavLink>
          <NavLink
            to="macbook"
            onClick={() => onProductStateHandler("macbook")}
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Macbook
          </NavLink>
        </div>
      </div>
      <div className="c-name">
        <div className="c-kind">WIRELESS</div>
        <div className="c-kind-list">
          <NavLink
            to="airpod"
            onClick={() => onProductStateHandler("airpod")}
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Airpod
          </NavLink>
          <NavLink
            to="watch"
            onClick={() => onProductStateHandler("watch")}
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Watch
          </NavLink>
        </div>
        <div className="c-name"></div>
        <div className="c-kind">OTHER</div>
        <div className="c-kind-list">
          <NavLink
            to="mouse"
            onClick={() => onProductStateHandler("mouse")}
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Mouse
          </NavLink>
          <NavLink
            to="keyboard"
            onClick={() => onProductStateHandler("keyboard")}
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Keyboard
          </NavLink>
          <NavLink
            to="other"
            onClick={() => onProductStateHandler("other")}
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Other
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Category;
