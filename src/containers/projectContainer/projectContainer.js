import React from "react";
import "./projectContainer.scss";
import logo from "../../assets/images/logo512.png";
import { LoremIpsum } from "react-lorem-ipsum";
import TechStack from "../techStack/techStack";
import * as Constants from "../../constants/textConstants";

export default function project() {
  return (
    <div className="project">
      <div className="project_name">Project Name</div>
      <div className="project_content">
        <div className="snapshot">
          <img src={logo} />
          <div className="links">
            <button>
              {/* <span className="gg-external qwert"></span> */}
              <span className="btn-text">
                Site {Constants.NEW_TAB_UNICODE}
                &nbsp;
              </span>
              <span className="gg-external"></span>
            </button>
            <button>
              <span className="btn-text">
                Github {Constants.GITHUB_UNICODE}
                &nbsp;
              </span>
              <span className="gg-external"></span>
            </button>
          </div>
        </div>
        <span className="vertical"></span>
        <div className="details">
          Details <LoremIpsum p={2} />
          <TechStack tech={["java", "react", "css3", "javascript"]} />
        </div>
      </div>
    </div>
  );
}
