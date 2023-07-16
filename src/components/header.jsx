import React, { useState } from "react";
import {Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import "./CSS/header.css";


const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
           <img className="website-logo" src={require('./Assests/Images/Icons/logo.png')}/>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Login">Services</Link>
            </li>
            <li>
              <Link to="/FAQs">Start a funsraiser</Link>
            </li>
            <li>
              <Link to="/Contacts">How it works</Link>
            </li>
            <button className="Login-button">Login</button>
          </ul>
        </div>
        <div className="hamburger-menu">
            <div onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </div>
        </div>
      </nav>
    </>
  );
};

export default Header;