import React from "react";
import Cv from "./components/CV.pdf";
function About() {
  return (
    <>
      <section className="section pt-0" id="about">
        <div className="container text-center">
          <div className="about">
            <div className="about-img-holder">
              <img
                src="./compnents/MainPicture.svg"
                className="about-img"
                alt="Svg of a programmer"
              />
            </div>
            <div className="about-caption">
              <p className="section-subtitle">Who Am I ?</p>
              <h2 className="section-title mb-3">About Me</h2>
              <p>
                I am a computer information systems (CIS) student with a keen
                interest in web development and AI. Exploring the world of
                coding and software has been an exciting journey during my
                studies. My passion lies in mastering the principles of computer
                science while applying them practically through real world
                projects. Striving to enhance my skills, I aim to create
                engaging and innovative online platforms and cutting-edge
                technology, blending creativity with technology.
                <br />
                In addition to my technical pursuits, I am driven by the desire
                to make a meaningful impact through my work. Leveraging the
                power of technology, I aim to create solutions that improve
                people's lives and contribute positively to society.
              </p>
              <a className="btn-rounded btn btn-outline-primary mt-4">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;