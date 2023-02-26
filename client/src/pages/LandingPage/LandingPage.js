import * as React from "react";
import { useSelector } from "react-redux";

function LandingFrameMessage() {
  const { name } = useSelector((store) => store.auth);

  const style = {
    margin: "auto",
    padding: "10% 35% 10% 15%",
    color: "white",
    display: "inline-block",
  };
  return (
    <div style={style}>
      <div style={{ "font-size": "96px" }}>Welcome {name}!!!</div>

      <div style={{ "font-size": "36px" }}>
        To begin, choose the operation you want to do by selecting from the menu
        at the top.
      </div>
    </div>
  );
}

function LandingFrame() {
  const style = {
    backgroundImage: "url(" + require("../../resources/Landing.jpg") + ")",
    "background-repeat": "no-repeat",
    "background-size": "cover",
    position: "fixed",
    height: "100%",
    width: "100%",
  };
  return (
    <div style={style}>
      <LandingFrameMessage />
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <LandingFrame />
    </div>
  );
}

export default HomePage;
