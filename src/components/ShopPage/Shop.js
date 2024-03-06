/* eslint-disable react-hooks/exhaustive-deps */
import { useLoaderData } from "react-router-dom";
import Category from "./Category";
import ProductList from "./ProductList";
import "./Shop.css";
import { useEffect, useState } from "react";

function Shop() {
  const product = useLoaderData();
  const [productFilter, setProductFilter] = useState("");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const filteredProduct = product.filter(
      (product) => product.category === productFilter
    );
    setProductList(filteredProduct);
  }, [productFilter]);

  function productStateHandler(filter) {
    setProductFilter(filter);
  }

  return (
    <div className="shop">
      <div className="shop-head">
        <div className="head-1">SHOP</div>
        <div className="head-2">SHOP</div>
      </div>
      <div className="shop-content">
        <Category onProductStateHandler={productStateHandler} />
        <div className="shop-product">
          <div className="shop-search">
            <input placeholder="Enter Search Here!" />
            <select>
              <option>Default sorting</option>
            </select>
          </div>
          <ProductList product={productFilter !== "" ? productList : product} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
