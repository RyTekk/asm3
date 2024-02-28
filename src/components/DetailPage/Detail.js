import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { numberWithDots } from "hooks/use-fetchproduct";
import "./Detail.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "store/cartReducer";

function Detail() {
  const [stateQuantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [imgUrl, setImgUrl] = useState("");
  const navigate = useNavigate();
  const product = useLoaderData();
  const params = useParams();
  const detailProduct = product.filter((e) => e._id.$oid === params.id);
  const relatedProduct = product.filter(
    (e) =>
      e._id.$oid !== detailProduct[0]._id.$oid &&
      e.category === detailProduct[0].category
  );

  function mouseEnterHandler(img) {
    setImgUrl(img);
  }

  function resetImgUrl() {
    setImgUrl("");
  }

  function addToCartHandler(id, quantity) {
    dispatch(
      cartAction.addToCart({
        id,
        quantity,
        img: detailProduct[0].img1,
        name: detailProduct[0].name,
        price: detailProduct[0].price,
      })
    );
    console.log(cart);
  }

  return (
    <div className="detail">
      <div className="detail-info">
        <div className="sub-img">
          <img
            src={detailProduct[0].img1}
            onMouseEnter={() => mouseEnterHandler(detailProduct[0].img1)}
            alt={detailProduct[0].name}
          />
          <img
            src={detailProduct[0].img2}
            onMouseEnter={() => mouseEnterHandler(detailProduct[0].img2)}
            alt={detailProduct[0].name}
          />
          <img
            src={detailProduct[0].img3}
            onMouseEnter={() => mouseEnterHandler(detailProduct[0].img3)}
            alt={detailProduct[0].name}
          />
          <img
            src={detailProduct[0].img4}
            onMouseEnter={() => mouseEnterHandler(detailProduct[0].img4)}
            alt={detailProduct[0].name}
          />
        </div>
        <div className="main-img">
          <img
            src={imgUrl ? imgUrl : detailProduct[0].img1}
            alt={detailProduct[0].name}
          />
        </div>
        <div className="product-detail">
          <h1>{detailProduct[0].name}</h1>
          <p className="pd-price">
            {numberWithDots(detailProduct[0].price)} VND
          </p>
          <p className="pd-short-desc">{detailProduct[0].short_desc}</p>
          <p className="pd-category">
            CATEGORY: <span>{detailProduct[0].category}</span>
          </p>
          <div className="pd-add2cart">
            <div className="pd-cart-quantity">
              <label htmlFor="quantity">QUANTITY</label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={stateQuantity}
                onChange={(e) => setQuantity(e.target.valueAsNumber)}
              />
            </div>
            <button
              type="button"
              onClick={() => addToCartHandler(detailProduct[0]._id.$oid, stateQuantity)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="product-description">
        <p className="product-desc">DESCRIPTION</p>
        <p className="product-desc">PRODUCT DESCRIPTION</p>
        <p className="product-long-desc">{detailProduct[0].long_desc}</p>
      </div>
      <p className="related-product">RELATED PRODUCTS</p>
      {relatedProduct.length > 0 && (
        <div
          className="product-relate"
          onClick={() => {
            navigate(`/detail/${relatedProduct[0]._id.$oid}`);
            resetImgUrl();
          }}
        >
          <img src={relatedProduct[0].img1} alt={relatedProduct[0].name} />
          <p className="rp-name">{relatedProduct[0].name}</p>
          <p className="rp-price">
            {numberWithDots(relatedProduct[0].price)} VND
          </p>
        </div>
      )}
    </div>
  );
}

export default Detail;
