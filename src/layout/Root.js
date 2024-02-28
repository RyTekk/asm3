import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Root.css";

function Root() {
  return (
    <>
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Root;
