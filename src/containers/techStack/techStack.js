import React from "react";
import "./techStack.scss";

export default function techStack(props) {
  let techs = props.tech;
  const imgPath = "/images/";
  console.log("Techstack", techs);
  return (
    <div className="techStack">
      {techs.map((tech) => {
        return (
          <figure key={tech}>
            <img
              src={`${imgPath}${tech}.svg`}
              height="50px"
              alt={tech}
            />
            <figcaption>
              {tech[0].toUpperCase() + tech.substr(1).toLowerCase()}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
