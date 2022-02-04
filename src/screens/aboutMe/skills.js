import React from "react";
import Techstack from "../../containers/techStack/techStack";

const skills = () => {
  const skills = [
    [
      "java",
      "2years",
      "Core Java, OOPS, Java 8, Multithreading, Collection Framework",
    ],
    ["javascript", "2years", ""],
    [
      "react",
      "2years",
      "Class Components, Functional Components, React Router, React Hooks",
    ],
    ["redux", "1year", ""],
    ["html5", "2years", ""],
    ["css3", "2years", "CSS Selectors, Box-Model, Flex-box, Grid"],
    ["spring", "2years", "Spring-Boot, Web Services, Microservices, JDBC"],
    ["oracleSql", "2years", "Views, Triggers"],
    ["mongodb", "1year", ""],
  ];
  console.log("skills", skills);
  console.log(skills[0][2].split(", "));
  const imgPath = "/images/";
  return (
    <div className="skills me_content block">
      <h2>Skills</h2>
      <div className="techs">
        {skills.map((skill) => {
          return (
            <div className={`tech `} key={skill[0]}>
              <img src={imgPath + skill[0] + ".svg"} alt={skill[0]} />
              <div className="tech_name">
                {skill[0][0].toUpperCase() + skill[0].substr(1)}
              </div>
              <div className="exp">Experience: {skill[1]}</div>
              <div className="stat">
                {/* Topics: */}
                {skill[2].split(", ").map((topic) => {
                  return (
                    <span key={topic} className="topic">
                      {`${topic} `}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {/* ==> use custom so that on hovering a skill we can magnify and push othersand get more details like experience */}
    </div>
  );
};

export default skills;
