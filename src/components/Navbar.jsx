import React, { useState } from "react";

import "./navbar.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="primary-nav">
      <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <p>Logo</p>
          </div>
          <div className="gpt3__navbar-links_container">
            <p>
                <a href="#home">Home</a>
            </p>
            <p>
                <a href="#possibility">Products</a>
            </p>
            <p>
                <a href="#wgpt3">Requests</a>
            </p>
          </div>
        </div>
        <div className="gpt3__navbar-sign">
            <button
            className="auth">
              Logout
            </button>
              <button className="auth">Login</button>

          <p className="myPz nav-login-cart">
              {/* <img src={cart_icon} alt="" /> */}
              <p>Image</p>
            <div className="nav-cart-count">0</div>
            {/* <div className="nav-cart-count">{getTotalCartItems()}</div> */}
          </p>
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                    <a href="#possibility">Products</a>
                </p>
                <p>
                    <a href="#wgpt3">Requests</a>
                </p>
                <form class="myForm" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Find Our Product"
                    aria-label="Search"
                  />
                </form>
              </div>
              <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                <p className="myPz nav-login-cart">
              {/* <img src={cart_icon} alt="" /> */}
              <p>IMage</p>
            <div className="nav-cart-count">0</div>
            {/* <div className="nav-cart-count">{getTotalCartItems()}</div> */}
          </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
