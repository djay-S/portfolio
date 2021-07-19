import React, { useState, useEffect } from "react";
import Menu from "../../containers/menuIcon/menu";
import "./sidenav.scss";

export default function Sidenav() {
  const [active, setActive] = useState(false);
  const toggleSideNav = () => {
    console.log("clicked");
    setActive(!active);
  };

  useEffect(() => {
    console.log("useEffect");
  }, [active]);
  const a = active ? "is_shown" : "is_hidden";
  const menuState = active ? "close" : "open";
  const menuClass = "menu " + menuState;
  let id = a;
  return (
    <div className="sidenav" id={id}>
      <div className="sidenav_contents" id={id}>
        <div className="sections">Home</div>
        <div className="sections">About Me</div>
        <div className="sections">Projects</div>
        <div className="sections">Contact Me</div>
      </div>
      <div className="sidenav_menu">
        <div onClick={toggleSideNav}>
          <Menu menuState={menuState} />
        </div>
      </div>
    </div>
  );
}
