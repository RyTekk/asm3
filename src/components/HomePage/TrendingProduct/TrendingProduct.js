import "./TrendingProduct.css";
import { numberWithDots } from "hooks/use-fetchproduct";
import { useLoaderData } from "react-router-dom";

function TrendingProduct({ onRender }) {
  const trendProd = useLoaderData();

  return (
    <>
      <div className="tp-text">
        <div className="text-1">MADE THE HARD WAY</div>
        <div className="text-2">TOP TRENDING PRODUCTS</div>
      </div>
      <div className="tp-list">
        {trendProd
          .filter((_, index) => index < 8)
          .map((product) => (
            <div key={product._id.$oid} className="tp-item">
              <img
                src={product.img1}
                className="tp-img"
                alt={product.name}
                onClick={() => onRender(
                  product.img1,
                  product.name,
                  product.price,
                  product.short_desc
                )}
              />
              <div className="tp-info">
                <div className="tp-name">{product.name}</div>
                <div className="tp-price">
                  {numberWithDots(product.price)} VND
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default TrendingProduct;
