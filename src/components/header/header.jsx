import React from "react";

function Header() {
  return (
    <>
      <header id="home" className="header">
        <div className="overlay" />
        <div className="header-content container">
          <h1 className="header-title">
            <span className="up">HI!</span>
            <span className="down">I am Mohamamd Shabrani</span>
          </h1>
          <p className="header-subtitle">FRONTEND WEB DESIGNER</p>
          <a href="https://github.com/Mohmmadshabrani" className="btn btn-primary">Visit My Work Place</a>
        </div>
      </header>
    </>
  );
}

export default Header;