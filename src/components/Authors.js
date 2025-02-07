import React from "react";
import aza from "../images/aza.png";
import ayush from "../images/ayush.png";
import ContactBTN from "./ContactBTN";

function Authors() {
  return (
    <>
      <div
        // style={{ backgroundColor: "white", height: "80vh" }}
        className="container mt-3 mb-5 d-flex flex-column justify-content-center align-content-center"
      >
        {/* Ayush  */}
        <div className="author m-3">
          <div className="a-content d-flex align-items-center p-4 flex-wrap">
            <img className="a-img " src={ayush} alt="Aza" />
            <div className="d-flex col-lg-6 flex-column  align-items-center">
              <h1 className="exo text-white text-center">Ayush Srivastava</h1>
              <p className="exo text-center">
                Hey there! I'm Ayush, a Computer Science major at the University
                at Buffalo with a passion for bringing ideas to life through
                coding and hardware design. Ever since I first saw Wall-E, I
                dreamed of building one, and when I discovered Arduino and ESP32
                programming, I knew I had to make it happen. Through countless
                iterations, I designed the 3D-printed parts, optimized the motor
                control system, and fine-tuned the code until Wall-E was finally
                rolling, turning, and functioning just right. This project has
                sparked a deep interest in robotics and embedded systems, and
                I'm excited to keep exploring this field. Let’s connect! Whether
                it's about tech, robotics, or collaborating on innovative
                projects, I'd love to chat.
              </p>
              <ContactBTN connect="https://m-portfolio-green.vercel.app" />
            </div>
          </div>
        </div>

        {/* Aza  */}
        <div className="author m-3">
          <div className="a-content d-flex align-items-center p-4 flex-wrap">
            <img className="a-img " src={aza} alt="Aza" />
            <div className="d-flex col-lg-6 flex-column  align-items-center">
              <h1 className="exo text-white text-center">
                Azkhishig Munkhbayar
              </h1>
              <p className="exo text-center">
                Hi! I'm Azkhishig, an Electrical Engineering major at the
                University at Buffalo with a passion for circuits & power
                systems. When working on Wall‑E, my focus was on designing the
                circuit, optimizing motor performance, and finding ways to
                increase torque to bring the robot to life. From wiring up the
                motor drivers and power distribution to troubleshooting movement
                issues, I loved the challenge of making sure Wall‑E could roll,
                turn, and function seamlessly. This project has tought me alot
                about robotics and embedded systems, and I'm excited to keep
                pushing the boundaries of what’s possible with hardware. Let’s
                connect! Whether it's about electronics, motors, or
                collaborating on innovative projects, I’d love to chat!
              </p>
              <ContactBTN connect="https://www.linkedin.com/in/azkhishig-munkhbayar/" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Authors;
