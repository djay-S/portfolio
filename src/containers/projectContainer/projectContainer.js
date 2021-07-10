import React from "react";
import "./projectContainer.scss";
import logo from "../../assets/images/logo512.png";
import { LoremIpsum } from "react-lorem-ipsum";

export default function project() {
  return (
    <div className="project">
      <div className="project_name">Project Name</div>
      <div className="project_content">
        <div className="snapshot">
          <img src={logo} />
          <div>Site Github</div>
        </div>
        <span className="vertical"></span>
        <div className="details">
          Details <LoremIpsum p={2} />
        </div>
      </div>
    </div>
  );
}
