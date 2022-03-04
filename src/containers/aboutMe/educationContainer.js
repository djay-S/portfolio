import React from "react";

const education = (props) => {
  return (
    <li className="educatio">
      <h3 className="college">{props.college}</h3>
      <h4 className="branch">{props.branch}</h4>
      <h5 className="cgpa">{props.cgpa}</h5>
    </li>
  );
};

export default education;
