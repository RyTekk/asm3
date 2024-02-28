function Category() {
  return (
    <div className="shop-category">
      <div className="c-heading">CATEGORIES</div>
      <div className="c-name">
        <div className="c-kind apple">APPLE</div>
        <div className="c-kind-list">
          <p>All</p>
        </div>
      </div>
      <div className="c-name">
        <div className="c-kind">IPHONE & MAC</div>
        <div className="c-kind-list">
          <p>iPhone</p>
          <p>iPad</p>
          <p>Macbook</p>
        </div>
      </div>
      <div className="c-name">
        <div className="c-kind">WIRELESS</div>
        <div className="c-kind-list">
          <p>Airpod</p>
          <p>Watch</p>
        </div>
        <div className="c-name"></div>
        <div className="c-kind">OTHER</div>
        <div className="c-kind-list">
          <p>Mouse</p>
          <p>Keyboard</p>
          <p>Other</p>
        </div>
      </div>
    </div>
  );
}

export default Category;
