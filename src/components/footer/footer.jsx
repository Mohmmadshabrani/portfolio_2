import React from "react";

function Footer() {
  return (
    <>
      <div className="container">
        <footer className="footer">
          <div className="social-links text-center m-auto ml-sm-auto">
            <a href="https://web.facebook.com/M0hammad.shabrani" target="_blank" className="link">
              <i className="ti-facebook" />
            </a>
            <a href="https://twitter.com/Whiteblade_" target="_blank" className="link">
              <i className="ti-twitter-alt" />
            </a>
            <a href="https://www.linkedin.com/in/mohammad-shabrani-bb0036234/" target="_blank" className="link">
              <i className="ti-linkedin" />
            </a>
            <a href="https://github.com/Mohmmadshabrani" target="_blank" className="link">
              <i className="ti-github" />
            </a>
            <a href="https://www.instagram.com/m7mad_shabrani/" target="_blank" className="link">
              <i className="ti-instagram" />
            </a>
            <a href="https://stackoverflow.com/users/22196792/moh-sh" target="_blank" className="link">
              <i className="ti-stack-overflow" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;