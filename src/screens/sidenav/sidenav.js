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
    <div className="sidenav">
      <div className="sidenav_contents" id={id}>
        Sidenav
      </div>
      <div className="sidenav_menu">
        <div className={menuState} onClick={toggleSideNav}>
          <Menu menuState={menuState} />
        </div>
      </div>
    </div>
  );
}
