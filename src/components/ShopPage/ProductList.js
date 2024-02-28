import { useLoaderData, useNavigate } from "react-router-dom";
import { numberWithDots } from "hooks/use-fetchproduct";

function ProductList() {
  const navigate = useNavigate();
  const product = useLoaderData();

  return (
    <div className="product-list">
      {product.map((product) => (
        <div
          key={product._id.$oid}
          className="pl-item"
          onClick={() => navigate(`/detail/${product._id.$oid}`)}
        >
          <img src={product.img1} className="pl-img" alt={product.name} />
          <div className="pl-info">
            <div className="pl-name">{product.name}</div>
            <div className="pl-price">{numberWithDots(product.price)} VND</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
