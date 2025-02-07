import React from "react";
import walle from "../images/Wall-E.png";
import motor from "../images/Motor.png";
import battery from "../images/Battery.png";
import driver from "../images/Driver.png";
import esp32 from "../images/esp32.png";

function About() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mb-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              style={{ height: "350px", borderRadius: "20px" }}
              src={walle}
              alt="walle"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-white exo lh-1 mb-3">
              About the Project: Building Wall‑E
            </h1>
            <p className="lead exo">
              This project started as a dream to build a working Wall‑E from
              scratch. With a combination of 3D design, electronics, and
              embedded programming, we were able to create a functional robot
              that moves, turns, and interacts just like we imagined.
            </p>
          </div>
        </div>
        {/* List of items */}
        <div className="mt-5 mb-5">
          <h1 className="display-6 fw-bold text-white exo lh-1 mb-3">
            Core Components (Click for Link)
          </h1>
          <a href="https://www.amazon.com/gp/product/B07D28QKHY/ref=ox_sc_act_title_1?smid=A28ZWXW3ZSVNZU&th=1">
            <img className="component-image" src={motor} alt="motor" />
          </a>
          <a href="https://www.amazon.com/gp/product/B00K8V2QNU/ref=ox_sc_act_image_6?smid=ATVPDKIKX0DER&th=1">
            <img className="component-image" src={battery} alt="battery" />
          </a>
          <a href="https://www.amazon.com/gp/product/B0C5JCF5RS/ref=ox_sc_act_title_8?smid=A2RFXKS6GNXFWP&psc=1">
            <img className="component-image" src={driver} alt="driver" />
          </a>
          <a href="https://www.amazon.com/gp/product/B0718T232Z/ref=ox_sc_act_title_9?smid=A30QSGOJR8LMXA&psc=1">
            <img className="component-image" src={esp32} alt="esp32" />
          </a>
        </div>
        {/* List of items */}
        <div className="mt-5">
          <h1 className="display-6 fw-bold text-white exo lh-1 mb-3">
            Open Source: Download My Code & 3D Designs
          </h1>
          <p className=" exo">
            We believe in sharing knowledge, so we are making all my code and 3D
            models available for anyone who wants to build their own Wall‑E!
            <br />
            If you have any questions, feel free to reach out. We would love to
            see more people building their own robots!
          </p>
          <>
            <a href="https://drive.google.com/drive/folders/1eWJTfalfpoc6iMxGn00Gk5m2BP5adqr-?usp=drive_link">
              {" "}
              <button
                style={{
                  marginLeft: "30px",
                  marginRight: "30px",
                  marginTop: "10px",
                }}
                className="play exo text-center"
              >
                D E S I G N S
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
            </a>
          </>
          <>
            <a href="https://github.com/axxyush/WallE">
              {" "}
              <button
                style={{
                  marginLeft: "30px",
                  marginRight: "30px",
                  marginTop: "10px",
                }}
                className="play exo text-center"
              >
                C O D E
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
            </a>
          </>
        </div>
      </div>
    </>
  );
}

export default About;
