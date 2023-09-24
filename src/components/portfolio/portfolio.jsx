import React, { useState, useEffect } from "react";
import CityServeSM from "../../assets/responsive-images/city_serve-sm.webp";
import CityServeMD from "../../assets/responsive-images/city_serve-md.webp";
import CityServeLG from "../../assets/responsive-images/city_serve-lg.webp";
import PersentoSM from "../../assets/responsive-images/persento-sm.webp";
import PersentoMD from "../../assets/responsive-images/persento-md.webp";
import PersentoLG from "../../assets/responsive-images/persento-lg.webp";
import QuizshSM from "../../assets/responsive-images/Quizsh-sm.webp";
import QuizshMD from "../../assets/responsive-images/Quizsh-md.webp";
import QuizshLG from "../../assets/responsive-images/Quizsh-lg.webp";

function Portfolio() {
  const [imageSrc, setImageSrc] = useState({
    cityServe: CityServeLG,
    persento: PersentoLG,
    quizsh: QuizshLG,
  });
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setImageSrc({
          cityServe: CityServeSM,
          persento: PersentoSM,
          quizsh: QuizshSM,
        });
      } else if (width < 1024) {
        setImageSrc({
          cityServe: CityServeMD,
          persento: PersentoMD,
          quizsh: QuizshMD,
        });
      } else {
        setImageSrc({
          cityServe: CityServeLG,
          persento: PersentoLG,
          quizsh: QuizshLG,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={imageSrc.cityServe}
                  className="portfolio-card-img"
                  alt="CityServe"
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
              <a
                href="https://github.com/Mohmmadshabrani/php_mainProject_shabrani"
                className="portfolio-card"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="portfolio-card-img"
                  src={imageSrc.persento}
                  alt="Persento"
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
              <a
                href="https://github.com/Mohmmadshabrani/project_shabrani"
                className="portfolio-card"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="portfolio-card-img"
                  src={imageSrc.quizsh}
                  alt="Quizsh"
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
