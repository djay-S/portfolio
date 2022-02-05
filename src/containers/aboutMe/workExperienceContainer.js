import React from "react";
// import { LoremIpsum } from "react-lorem-ipsum";

const workExp = (props) => {
  return (
    <div className="work_exp block">
      <h3>{props.designation}</h3>
      <h4>
        <i className="far fa-building"></i>
        {props.company}
      </h4>
      <h5>Location:{props.location}</h5>
      <div dangerouslySetInnerHTML={{ __html: props.details }} />
    </div>
  );
};

export default workExp;
