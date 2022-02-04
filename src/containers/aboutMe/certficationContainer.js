import React from "react";

const certification = (props) => {
  return (
    <div className="certification block">
      <h3>
        <i className="fas fa-scroll"></i>
        {props.title}
      </h3>
      <h4>{props.provider}</h4>
      {props.url}
    </div>
  );
};

export default certification;
