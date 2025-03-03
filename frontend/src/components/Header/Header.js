import React, { useState, useEffect } from "react";
import CSS from "./Header.module.css";
import { Link } from "react-router-dom";
import Login from "../../pages/Login/Login";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [length, setLength] = useState(0);
  useEffect(() => {
    const storedListString = sessionStorage.getItem("listOfObjects");
    const storedList = storedListString ? JSON.parse(storedListString) : [];
    setLength(storedList.length);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  return (
    <header className={CSS.header}>
      <div className={CSS.navBar}>
        <div className={CSS.logos}>
          <Link className={CSS.logo} to={"/"}>
            <span>
              <img src="../../images/diet.png" alt="" />
            </span>
            Organic Food Store
          </Link>
        </div>
        <ul className={CSS.links}>
          <li className={CSS.items}>
            <Link className={`${CSS.navItem} ${CSS.active}`} to={"/"}>
              Home
            </Link>
          </li>
          <li className={CSS.items}>
            <Link className={CSS.navItem} to={"/category"}>
              Categories
            </Link>
          </li>
          <li className={CSS.items}>
            <Link className={CSS.navItem} to={"/contact"}>
              Contact
            </Link>
          </li>
          <li className={CSS.items}>
            <Link className={CSS.navItem} to={"/aboutus"}>
              About
            </Link>
          </li>
        </ul>
        <div className={CSS["cart-login-container"]}>
          <Link to={"/checkout"} className={CSS.action_btn}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className={CSS["cart-length"]}>{length}</span>
          </Link>
          <div className={CSS.action_btn} onClick={toggleLoginPopup}>
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
        <div className={CSS.toggle_btn} onClick={toggleMenu}>
          <i className={isOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
        </div>
      </div>
      <div className={`${CSS.dropdown_menu} ${isOpen ? CSS.open : ""}`}>
        <li className={CSS.items}>
          <Link className={`${CSS.navItem} ${CSS.active}`} to={"/"}>
            Home
          </Link>
        </li>
        <li className={CSS.items}>
          <Link className={CSS.navItem} to={"/category"}>
            Categories
          </Link>
        </li>
        <li className={CSS.items}>
          <Link className={CSS.navItem} to={"/contact"}>
            Contact
          </Link>
        </li>
        <li className={CSS.items}>
          <Link className={CSS.navItem} to={"/aboutus"}>
            About
          </Link>
        </li>
        <li onClick={toggleLoginPopup} className={CSS.items}>
          <Link className={CSS.action_btn}>Login</Link>
        </li>
      </div>
      {showLoginPopup && (
        <div className={CSS.login_popup}>
          <Login />
          <div className={CSS.close_popup} onClick={toggleLoginPopup}>
            <span className={CSS.close_popup_btn}>&times;</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
