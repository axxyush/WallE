import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            {/* **************************** */}
            <>
              <div className="section-banner">
                <div id="star-1">
                  <div className="curved-corner-star">
                    <div id="curved-corner-bottomright" />
                    <div id="curved-corner-bottomleft" />
                  </div>
                  <div className="curved-corner-star">
                    <div id="curved-corner-topright" />
                    <div id="curved-corner-topleft" />
                  </div>
                </div>
                <div id="star-2">
                  <div className="curved-corner-star">
                    <div id="curved-corner-bottomright" />
                    <div id="curved-corner-bottomleft" />
                  </div>
                  <div className="curved-corner-star">
                    <div id="curved-corner-topright" />
                    <div id="curved-corner-topleft" />
                  </div>
                </div>
                <div id="star-3">
                  <div className="curved-corner-star">
                    <div id="curved-corner-bottomright" />
                    <div id="curved-corner-bottomleft" />
                  </div>
                  <div className="curved-corner-star">
                    <div id="curved-corner-topright" />
                    <div id="curved-corner-topleft" />
                  </div>
                </div>
                <div id="star-4">
                  <div className="curved-corner-star">
                    <div id="curved-corner-bottomright" />
                    <div id="curved-corner-bottomleft" />
                  </div>
                  <div className="curved-corner-star">
                    <div id="curved-corner-topright" />
                    <div id="curved-corner-topleft" />
                  </div>
                </div>
                <div id="star-5">
                  <div className="curved-corner-star">
                    <div id="curved-corner-bottomright" />
                    <div id="curved-corner-bottomleft" />
                  </div>
                  <div className="curved-corner-star">
                    <div id="curved-corner-topright" />
                    <div id="curved-corner-topleft" />
                  </div>
                </div>
                <div id="star-6">
                  <div className="curved-corner-star">
                    <div id="curved-corner-bottomright" />
                    <div id="curved-corner-bottomleft" />
                  </div>
                  <div className="curved-corner-star">
                    <div id="curved-corner-topright" />
                    <div id="curved-corner-topleft" />
                  </div>
                </div>
                <div id="star-7">
                  <div className="curved-corner-star">
                    <div id="curved-corner-bottomright" />
                    <div id="curved-corner-bottomleft" />
                  </div>
                  <div className="curved-corner-star">
                    <div id="curved-corner-topright" />
                    <div id="curved-corner-topleft" />
                  </div>
                </div>
              </div>
            </>

            {/* ********************************** */}
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-white exo lh-1 mb-3">
              Meet Our Wall‑E
            </h1>
            <p className="lead exo">
              A compact, 3D‑printed robot powered by ESP32, ready to roll, spin,
              and dance at your command. Explore our easy web interface to drive
              it forward, backward, and in circles—all from the comfort of your
              browser.{" "}
              <b className="text-white">
                Just make sure you are connected to the robot via Bluetooth.
              </b>{" "}
              Let’s bring this little explorer to life!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <>
                <button
                  onClick={() =>
                    document
                      .getElementById("con")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  style={{
                    marginLeft: "30px",
                    marginRight: "30px",
                    marginTop: "10px",
                  }}
                  className="play exo"
                >
                  P L A Y
                  <div id="clip">
                    <div id="leftTop" className="corner" />
                    <div id="rightBottom" className="corner" />
                    <div id="rightTop" className="corner" />
                    <div id="leftBottom" className="corner" />
                  </div>
                  <span
                    style={{ marginLeft: "25px" }}
                    id="rightArrow"
                    className="arrow"
                  />
                  <span id="leftArrow" className="arrow" />
                </button>
              </>
              <>
                <Link to="/about">
                  {" "}
                  <button
                    style={{
                      marginLeft: "30px",
                      marginRight: "30px",
                      marginTop: "10px",
                    }}
                    className="play exo text-center"
                  >
                    A B O U T
                    <div id="clip">
                      <div id="leftTop" className="corner" />
                      <div id="rightBottom" className="corner" />
                      <div id="rightTop" className="corner" />
                      <div id="leftBottom" className="corner" />
                    </div>
                    <span
                      style={{ marginLeft: "25px" }}
                      id="rightArrow"
                      className="arrow"
                    />
                    <span id="leftArrow" className="arrow" />
                  </button>
                </Link>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
