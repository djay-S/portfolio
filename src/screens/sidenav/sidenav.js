import React, { useState, useEffect } from "react";
import Menu from "../../containers/menuIcon/menu";
import "./sidenav.scss";

const Sidenav = () => {
  const [active, setActive] = useState(false);
  const toggleSideNav = () => {
    setActive(!active);
    // console.log("Side nav is active: ", active);
  };

  const toggleCloseSideNav = () => {
    if (active) setActive(false);
    // console.log("Inside toggleCloseSideNav");
  };

  useEffect(() => {
    // console.log("Side nav useEffect");
  }, [active]);

  const a = active ? "is_shown" : "is_hidden";
  const menuState = active ? "close" : "open";
  // const menuClass = "menu " + menuState;
  let id = a;
  return (
    <div className="sidenav_wrapper">
      <div className="sidenav" id={id}>
        <div className="sidenav_contents" id={id}>
          <a href="#home" className="sections">
            Home
          </a>
          <a href="#about" className="sections">
            About Me
          </a>
          <a href="#projects" className="sections">
            Projects
          </a>
          <a href="#contact" className="sections">
            Contact Me
          </a>
        </div>
        <div className="sidenav_menu">
          <div onClick={toggleSideNav}>
            <Menu menuState={menuState} />
          </div>
        </div>
        <div
          className="sidenav_remaining"
          id={id}
          onClick={toggleCloseSideNav}
        ></div>
      </div>
    </div>
  );
};

export default Sidenav;
