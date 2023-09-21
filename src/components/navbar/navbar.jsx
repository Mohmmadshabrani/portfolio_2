import React from "react";

function Navbar() {
  return (
    <>
      <nav className="custom-navbar" data-spy="affix" data-offset-top={20}>
        <div className="container">
          <a className="logo" href="#">
            Mohammad Shabrani
          </a>
          <ul className="nav">
            <li className="item">
              <a className="link" href="#home">
                Home
              </a>
            </li>
            <li className="item">
              <a className="link" href="#about">
                About
              </a>
            </li>
            <li className="item">
              <a className="link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="item">
              <a className="link" href="#testmonial">
                Testmonial
              </a>
            </li>
            <li className="item">
              <a className="link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <button
            id="nav-toggle"
            className="hamburger hamburger--elastic"
          >
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
