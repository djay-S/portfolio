import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../../containers/menuIcon/menu";
import "./sidenav.scss";

const Sidenav = () => {
  const [active, setActive] = useState(false);
  const toggleSideNav = () => {
    setActive(!active);
    console.log("Side nav is active: ", active);
  };

  useEffect(() => {
    console.log("Side nav useEffect");
  }, [active]);
  
  const a = active ? "is_shown" : "is_hidden";
  const menuState = active ? "close" : "open";
  const menuClass = "menu " + menuState;
  let id = a;
  return (
    <div className="sidenav" id={id}>
      <div className="sidenav_contents" id={id}>
        <a href="#home" className="sections">Home</a>
        <a href="#about" className="sections">About Me</a>
        <a href="#projects" className="sections">Projects</a>
        <a href="#contact" className="sections">Contact Me</a>
      </div>
      <div className="sidenav_menu">
        <div onClick={toggleSideNav}>
          <Menu menuState={menuState} />
        </div>
      </div>
    </div>
  );
}

export default Sidenav;