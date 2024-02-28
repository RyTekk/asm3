import { useNavigate } from "react-router-dom";
import "./Banner.css";
import banner from "./banner1.jpg";

function Banner() {
  const navigate = useNavigate();

  return (
    <div className="banner">
      <div className="banner-img">
        <img src={banner} alt="banner" />
      </div>
      <div className="banner-text">
        <div className="banner-text-1">NEW INSPIRATION 2020</div>
        <div className="banner-text-2">20% OFF ON NEW SEASON</div>
        <button onClick={() => navigate("shop")}>Browse collections</button>
      </div>
    </div>
  );
}

export default Banner;
