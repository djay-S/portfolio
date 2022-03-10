import React from "react";
import techs from "../../assets/files/skills.json";

const skills = () => {
  const renderTechTopics = (topics) => {
    return (
      <div className="stat">
        {topics.split(", ").map((topic) => {
          return (
            <span key={topic} className="topic">
              {`${topic} `}
            </span>
          );
        })}
      </div>
    );
  };

  const imgPath = "/images/";

  return (
    <div className="skills me_content block">
      <h2>Skills</h2>
      <div className="techs">
        {techs.map((tech) => {
          return (
            <div className={`tech `} key={tech.techName}>
              <img src={imgPath + tech.techName + ".svg"} alt={tech.techName} />
              <div className="tech_name">
                {tech.techName[0].toUpperCase() + tech.techName.substr(1)}
              </div>
              <div className="exp">Experience: {tech.exp}</div>
              {tech.topics.length > 0 ? renderTechTopics(tech.topics) : null}
            </div>
          );
        })}
      </div>
      {/* ==> use custom so that on hovering a skill we can magnify and push othersand get more details like experience */}
    </div>
  );
};

export default skills;
