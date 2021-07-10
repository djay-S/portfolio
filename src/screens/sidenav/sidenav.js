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
  let id = a;
  return (
    <div className="sidenav">
      <div className="sidenav_contents" id={id}>
        Sidenav
        <span className="close" onClick={toggleSideNav}>
          <Menu />
        </span>
      </div>
      <div className={"arrow " + id} onClick={toggleSideNav}>
        {/* <span className="chevron" id={id}></span> */}
        <Menu />
      </div>
    </div>
  );
}
