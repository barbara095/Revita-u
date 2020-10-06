import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">

    <div className="footer-header" ><FaIcons.FaCopyright />
        Copyright Revita-U  
      </div>
    <div className="mail">
      <a href="mailto:info@revita-u.com"> <AiIcons.AiOutlineMail/>
      @revita-u.com</a>
        </div>
    <div className="instagram"> <AiIcons.AiOutlineInstagram /> 
      @revita-u
    </div>
    <div className="newsletter">
      Subscribe to our newsletter
      
    </div>

  </footer>
  );
}

export default Footer;