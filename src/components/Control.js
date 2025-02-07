import React, { useState, useRef } from "react";
import danceAudio from "../images/dance.mp3";
import wiggleAudio from "../images/wiggle.mp3";
import circleAudio from "../images/circle.mp3";

function Control() {
  const [bleCharacteristic, setBleCharacteristic] = useState(null);

  const danceRef = useRef(new Audio(danceAudio));
  const wiggleRef = useRef(new Audio(wiggleAudio));
  const circleRef = useRef(new Audio(circleAudio));

  const connectBLE = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ name: "Wall-E" }],
        optionalServices: ["12345678-1234-5678-1234-56789abcdef0"],
      });
      const server = await device.gatt.connect();
      const service = await server.getPrimaryService(
        "12345678-1234-5678-1234-56789abcdef0"
      );
      const characteristic = await service.getCharacteristic(
        "87654321-4321-6789-4321-abcdef012345"
      );
      setBleCharacteristic(characteristic);
      console.log("Connected to BLE device!");
    } catch (error) {
      console.error("Error connecting via BLE:", error);
    }
  };

  // Function to send a command over BLE
  const sendCommand = async (command) => {
    if (!bleCharacteristic) {
      alert("Not connected to BLE device. Please connect first.");
      return;
    }
    try {
      const encoder = new TextEncoder();
      await bleCharacteristic.writeValue(encoder.encode(command));
      console.log(`Sent command: ${command}`);
    } catch (error) {
      console.error("Error sending command:", error);
    }
  };

  const playDance = () => {
    danceRef.current.currentTime = 0;
    danceRef.current.loop = true;
    danceRef.current.play();
    sendCommand("dance");
  };
  const stopDance = () => {
    danceRef.current.pause();
    danceRef.current.currentTime = 0;
    sendCommand("stop");
  };

  const playWiggle = () => {
    wiggleRef.current.currentTime = 0;
    wiggleRef.current.loop = true;
    wiggleRef.current.play();
    sendCommand("wiggle");
  };
  const stopWiggle = () => {
    wiggleRef.current.pause();
    wiggleRef.current.currentTime = 0;
    sendCommand("stop");
  };

  const playCircle = () => {
    circleRef.current.currentTime = 0;
    circleRef.current.loop = true;
    circleRef.current.play();
    sendCommand("circle");
  };
  const stopCircle = () => {
    circleRef.current.pause();
    circleRef.current.currentTime = 0;
    sendCommand("stop");
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <button id="con" onClick={connectBLE} className="connectBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 640 512"
          fill="white"
        >
          <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path>
        </svg>
        Connect to Bluetooth
      </button>

      <div style={{ marginTop: "2rem" }}>
        <button
          className="control-btn"
          onMouseDown={() => sendCommand("backward")}
          onMouseUp={() => sendCommand("stop")}
        >
          Forward
        </button>
        <button
          className="control-btn"
          onMouseDown={() => sendCommand("forward")}
          onMouseUp={() => sendCommand("stop")}
        >
          Backward
        </button>
        <button
          className="control-btn"
          onMouseDown={() => sendCommand("left")}
          onMouseUp={() => sendCommand("stop")}
        >
          Right
        </button>
        <button
          className="control-btn"
          onMouseDown={() => sendCommand("right")}
          onMouseUp={() => sendCommand("stop")}
        >
          Left
        </button>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <button
          className="control-btn"
          onMouseDown={playDance}
          onMouseUp={stopDance}
        >
          Dance
        </button>
        <button
          className="control-btn"
          onMouseDown={playCircle}
          onMouseUp={stopCircle}
        >
          Circle
        </button>
        <button
          className="control-btn"
          onMouseDown={playWiggle}
          onMouseUp={stopWiggle}
        >
          Wiggle
        </button>
        <button className="control-btn" onClick={() => sendCommand("stop")}>
          Stop
        </button>
      </div>
    </div>
  );
}

export default Control;
