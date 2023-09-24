import React from "react";
import Pencil from "./components/pencil-case.svg";
import responsive from "./components/responsive.svg";
import toolbox from "./components/toolbox.svg";
import analytics from "./components/analytics.svg";
function Capablities() {
  return (
    <>
      <section className="section" id="capabilities">
        <div className="container text-center">
          <p className="section-subtitle">What Can I Do ?</p>
          <h6 className="section-title mb-6">Skills & Capabilities</h6>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="capabilities-card">
                <div className="body">
                  <img src={Pencil} alt="Pencil Icon" className="icon" />
                  <h6 className="title">UI/UX</h6>
                  <p className="subtitle">
                    Leveraging HTML, CSS, and JavaScript to create visually
                    appealing and user-friendly front-end experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="capabilities-card">
                <div className="body">
                  <img
                    src={responsive}
                    alt="responsive Icon"
                    className="icon"
                  />
                  <h6 className="title">Web Design</h6>
                  <p className="subtitle">
                    Creating dynamic, responsive, and visually appealing
                    websites that provide an exceptional user experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="capabilities-card">
                <div className="body">
                  <img src={toolbox} alt="toolbox-icon" className="icon" />
                  <h6 className="title">Backend Development</h6>
                  <p className="subtitle">
                    Developing scalable backend solutions. Experience in RESTful
                    API design, and server-side logic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="capabilities-card">
                <div className="body">
                  <img src={analytics} alt="analytics icon" className="icon" />
                  <h6 className="title">Database Management</h6>
                  <p className="subtitle">
                    Designing and managing databases. Experience in data
                    modeling, optimization, and ensuring data integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Capablities;
