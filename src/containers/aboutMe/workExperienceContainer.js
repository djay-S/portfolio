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

  const getExperience = () => {
    let dateDiffMilliSecs = props.toDate - props.fromDate;
    const monthDiff = Math.round(dateDiffMilliSecs / (1000 * 3600 * 24 * 30));
    let unit = "months";
    let diff = monthDiff;
    if (monthDiff >= 12) {
      diff /= 12;
      unit = "years";
    }
    if (diff === 1) {
      unit = unit.slice(0, -1);
    }
    return diff + unit;
  };

  return (
    <li className="work_exp" datatype={getDisplayYear()}>
      <h3 className="company">{props.company}</h3>
      <h4 className="designation">
        {props.designation},{" "}
        <span className="experience">{getExperience()}</span>
      </h4>
      <h5 className="location">{props.location}</h5>
      <span
        className="notes"
        dangerouslySetInnerHTML={{ __html: props.details }}
      />
    </li>
  );
};

export default workExp;
