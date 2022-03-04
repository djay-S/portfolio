import React from "react";
// import { LoremIpsum } from "react-lorem-ipsum";

const workExp = (props) => {
  // const imgPath = "/images/";

  const getDisplayYear = () => {
    const toDate = props.toDate;
    const year =
      toDate.getFullYear() === new Date().getFullYear()
        ? "Till Present"
        : toDate.getFullYear();

    return year;
  };

  return (
    <li className="work_exp" datatype={getDisplayYear()}>
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
