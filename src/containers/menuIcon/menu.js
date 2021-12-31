import React, { useState, useEffect } from "react";
import "./menu.scss";

export default function Menu(props) {
  const [menuState, setMenuState] = useState(props);
  const [isMouseOver, setMouseOver] = useState(false);
  // console.log(menuState, "menuState", props);
  useEffect(() => {
    setMenuState(props);
  }, [props]);

  const handleMenuMouseOver = () => {
    setMouseOver(true);
  };

  const handleMenuMouseOut = () => {
    setMouseOver(false);
  };

  let mOClass = isMouseOver ? "point" : "";
  return (
    <div className="menu">
      <div
        className={"box box-1 " + mOClass + " " + menuState.menuState}
        onMouseOver={handleMenuMouseOver}
        onMouseOut={handleMenuMouseOut}
      >
        <span className="manu-bar"></span>
      </div>
    </div>
  );
}
