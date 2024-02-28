import { useState } from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import OtherDetail from "./OtherDetail/OtherDetail";
import TrendingProduct from "./TrendingProduct/TrendingProduct";
import PopUp from "./TrendingProduct/PopUp";

function Home() {
  const [show, setShow] = useState(false);
  const [{ popupImgSrc, popupName, popupPrice, popupDescription }, setRender] =
    useState({
      popupImgSrc: "",
      popupName: "",
      popupPrice: 0,
      popupDescription: "",
    });

  function showPopUp() {
    setShow(true);
  }

  function hidePopUp() {
    setShow(false);
  }

  function renderPopUp(imgSrc, name, price, desc) {
    setRender({
      popupImgSrc: imgSrc,
      popupName: name,
      popupPrice: price,
      popupDescription: desc,
    });
    showPopUp();
  }

  return (
    <>
      <Banner />
      <Category />
      <TrendingProduct onRender={renderPopUp} />
      {show && (
        <PopUp
          onClose={hidePopUp}
          imgSrc={popupImgSrc}
          name={popupName}
          price={popupPrice}
          description={popupDescription}
        />
      )}
      <OtherDetail />
    </>
  );
}

export default Home;
