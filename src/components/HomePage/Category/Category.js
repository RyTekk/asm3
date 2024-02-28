import { useNavigate } from "react-router-dom";
import "./Category.css";
import img1 from "./img/product_1.png";
import img2 from "./img/product_2.png";
import img3 from "./img/product_3.png";
import img4 from "./img/product_4.png";
import img5 from "./img/product_5.png";

function Category() {
  const navigate = useNavigate();

  return (
    <>
      <div className="category-text">
        <div className="text-1">CAREFULLY CREATED COLLECTIONS</div>
        <div className="text-2">BROWSE OUR CATEGORIES</div>
      </div>
      <div className="category-img">
        <div className="category-item">
          <img
            src={img1}
            alt="product-1"
            className="product-img"
            onClick={() => navigate("shop")}
          />
        </div>
        <div className="category-item">
          <img
            src={img2}
            alt="product-2"
            className="product-img"
            onClick={() => navigate("shop")}
          />
        </div>
        <div className="category-item">
          <img
            src={img3}
            alt="product-3"
            className="product-img"
            onClick={() => navigate("shop")}
          />
        </div>
        <div className="category-item">
          <img
            src={img4}
            alt="product-4"
            className="product-img"
            onClick={() => navigate("shop")}
          />
        </div>
        <div className="category-item">
          <img
            src={img5}
            alt="product-5"
            className="product-img"
            onClick={() => navigate("shop")}
          />
        </div>
      </div>
    </>
  );
}

export default Category;
