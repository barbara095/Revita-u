import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-header">
      Copyright Revita-U</div>
    <div className="contact-panel col-md-5">
      <div className="form-group">
        <div className="footer-text">
          <a href="mailto:info@revita-u.com">info@revita-u.com</a>
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;