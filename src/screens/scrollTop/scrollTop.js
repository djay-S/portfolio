import React, { useState, useLayoutEffect } from "react";
import "./scrollTop.scss";

const ScrollTop = () => {
  const [opacity, setOpacity] = useState(0);

  useLayoutEffect(() => {
    function getScrollPos() {
      let scrollHeight = window.pageYOffset;
      let windowHeight = window.innerHeight;
      let normalisedHeight = scrollHeight / windowHeight;

      setOpacity(Math.min(Math.max(normalisedHeight, 0), 1));
    }
    window.addEventListener("scroll", getScrollPos);
    getScrollPos();
  }, []);

  const handleScrollTopClick = () => {
    window.scrollTo(0, 0);
  };

  const style = { opacity: opacity };
  return (
    <div className={"scroll-top "} style={style} onMouseDown={handleScrollTopClick}>
      <div className="line"></div>
    </div>
  );
};

export default ScrollTop;
