import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-col-1">
        <div className="footer-head">CUSTOMER SERVICES</div>
        <div className="footer-child">
          <a href="#">
            <p>Help & Contact Us</p>
          </a>
          <a href="#">
            <p>Returns & Refunds</p>
          </a>
          <a href="#">
            <p>Online Stores</p>
          </a>
          <a href="#">
            <p>Terms & Conditions</p>
          </a>
        </div>
      </div>
      <div className="footer-col-2">
        <div className="footer-head">COMPANY</div>
        <div className="footer-child">
          <a href="#">
            <p>What We Do</p>
          </a>
          <a href="#">
            <p>Available Services</p>
          </a>
          <a href="#">
            <p>Latest Posts</p>
          </a>
          <a href="#">
            <p>FAQs</p>
          </a>
        </div>
      </div>
      <div className="footer-col-3">
        <div className="footer-head">SOCIAL MEDIA</div>
        <div className="footer-child">
          <a href="#">
            <p>Twitter</p>
          </a>
          <a href="#">
            <p>Instagram</p>
          </a>
          <a href="#">
            <p>Facebook</p>
          </a>
          <a href="#">
            <p>Pinterest</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
