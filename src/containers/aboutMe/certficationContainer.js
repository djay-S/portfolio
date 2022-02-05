import React from "react";

const certification = (props) => {
  const handleExternalLink = (url) => {
    window.open(url, "blank");
  };
  return (
    <div
      className="certification block"
      onClick={() => handleExternalLink(props.url)}
    >
      <h3>
        <i className="fas fa-scroll"></i>
        {props.title}
      </h3>
      <span>
        {props.provider} | {props.year}
      </span>
      <span className="gg-external"></span>
    </div>
  );
};

export default certification;
