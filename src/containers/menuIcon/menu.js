import React, { useState, useEffect } from "react";
import "./menu.scss";

export default function Menu(props) {
  const [menuState, setMenuState] = useState(props);
  console.log(menuState, "menuState", props);
  useEffect(() => {
    setMenuState(props);
  }, [props]);
  return (
    <div className="menu">
      <span className={menuState.menuState}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </span>
    </div>
  );
}
