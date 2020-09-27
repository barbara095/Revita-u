import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavbarData } from "../NavData";
import 'semantic-ui-react';
import './style.css';
import { IconContext } from 'react-icons';
import { Col } from '../Grid';
import Logo from "../../assets/images/logo.png";

function Navbar() {
  
  const [sidebar, setSidebar] = React.useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    
    <IconContext.Provider value={{color: '#fff'}} >
    <div className="navbar">
        <Link to="#" className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        <img className="logo" src={Logo} alt="logo"></img>
      </div>
      <Col size="sm-3">
       <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to="#" className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>

          {NavbarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      </Col>
      </IconContext.Provider>
     
  );
}

export default Navbar;
