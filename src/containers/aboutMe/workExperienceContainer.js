import React from "react";
// import { LoremIpsum } from "react-lorem-ipsum";

const workExp = (props) => {
  const imgPath = "/images/";
  return (
    <li className="work_exp" datatype="2019">
      <h3 className="company">{props.company}</h3>
      <h4 className="designation">{props.designation}</h4>
      <h5 className="location">{props.location}</h5>
      <span
        className="notes"
        dangerouslySetInnerHTML={{ __html: props.details }}
      />
    </li>
  );
};

export default workExp;
