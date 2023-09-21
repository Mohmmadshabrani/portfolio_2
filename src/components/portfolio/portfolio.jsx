import React from "react";
import CityServe from "../../../public/assets/imgs/city_serve.png";
import Persento from "../../../public/assets/imgs/persento.png";
import Quizsh from "../../../public/assets/imgs/Quizsh.png";
function Portfolio() {
  return (
    <>
      <section className="section" id="portfolio">
        <div className="container text-center">
          <p className="section-subtitle">What I Did ?</p>
          <h6 className="section-title mb-6">Portfolio</h6>
          <div className="row">
            <div className="col-md-4">
              <a
                href="https://github.com/Mohmmadshabrani/city_serve_MS"
                className="portfolio-card"
              >
                <img
                  src={CityServe}
                  className="CityServe-card-img"
                  alt="CityServe image"
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>City Serve</h4>
                    <p className="font-weight-normal">A Volunteering Website</p>
                  </span>
                </span>
              </a>
            </div>
            <div className="col-md-4">
              <a href="https://github.com/Mohmmadshabrani/php_mainProject_shabrani" className="portfolio-card">
                <img
                  className="portfolio-card-img"
                  src={Persento}
                  alt="Persento-image"
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Persento</h4>
                    <p className="font-weight-normal">
                      Gift Shop eCommerce Websites
                    </p>
                  </span>
                </span>
              </a>
            </div>
            <div className="col-md-4">
              <a href="https://github.com/Mohmmadshabrani/project_shabrani" className="portfolio-card">
                <img
                  className="portfolio-card-img"
                  src={Quizsh}
                  alt="Quizsh-image"
                />
                <span className="portfolio-card-overlay">
                  <span className="portfolio-card-caption">
                    <h4>Quizsh</h4>
                    <p className="font-weight-normal">
                      An online quiz site using JS
                    </p>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
