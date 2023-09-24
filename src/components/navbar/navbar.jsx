import React, { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    // Navbar toggle
    const handleNavToggle = () => {
      const navToggle = document.getElementById("nav-toggle");
      navToggle.classList.toggle("is-active");
      const navMenu = document.querySelector("ul.nav");
      navMenu.classList.toggle("show");
    };

    const navToggleElement = document.getElementById("nav-toggle");
    navToggleElement.addEventListener("click", handleNavToggle);

    // Smooth scrolling for navbar links
    const handleSmoothScroll = (event) => {
      const { hash } = event.target;
      if (hash !== "") {
        event.preventDefault();

        const targetElement = document.querySelector(hash);
        const targetOffset = targetElement.offsetTop;

        window.scrollTo({
          top: targetOffset,
          behavior: "smooth",
        });
      }
    };

    const navLinks = document.querySelectorAll(".navbar .nav-link");
    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      navToggleElement.removeEventListener("click", handleNavToggle);
      navLinks.forEach((navLink) => {
        navLink.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <>
      <nav className="custom-navbar" data-spy="affix" data-offset-top={20}>
        <div className="container">
          <a className="logo" href="#nav">
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
              <a className="link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <button id="nav-toggle" aria-label="Open navigation menu" className="hamburger hamburger--elastic">
            <div  className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
