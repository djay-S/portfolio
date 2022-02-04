import React from "react";
import "./projectContainer.scss";
import TechStack from "../techStack/techStack";

export default function project(props) {
  const handleExternalSiteClick = (url) => {
    window.open(url, "blank");
  };
  console.log("projectContainer props", props);
  return (
    <div className="project">
      <div className="project_name">
        <h2>{props.projectName}</h2>
      </div>
      <div className="project_content">
        <div className="snapshot">
          <img
            src={process.env.PUBLIC_URL + "/" + props.img}
            alt="screenshots from the project"
          />
          <div className="links">
            <button onClick={() => handleExternalSiteClick(props.site)}>
              <span className="btn-text">Site &nbsp;</span>
              <span className="gg-external"></span>
            </button>
            <button onClick={() => handleExternalSiteClick(props.gitUrl)}>
              <span className="btn-text">Github &nbsp;</span>
              <span className="gg-external"></span>
            </button>
          </div>
        </div>
        <hr />
        <div className="details">
          {/* Details */}
          <div
            dangerouslySetInnerHTML={{ __html: props.details }}
            className="contents"
          />
          <br />
          <TechStack tech={props.techStack} />
        </div>
      </div>
    </div>
  );
}
