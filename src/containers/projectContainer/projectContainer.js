import React from "react";
import "./projectContainer.scss";
import logo from "../../assets/images/logo512.png";
// import { LoremIpsum } from "react-lorem-ipsum";
import TechStack from "../techStack/techStack";
// import * as Constants from "../../constants/textConstants";

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
          <img src={logo} alt="screenshots from the project" />
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
        <span className="vertical"></span>
        <div className="details">
          Details {props.details}
          <TechStack tech={props.techStack} />
        </div>
      </div>
    </div>
  );
}
