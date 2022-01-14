import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import Project from "../../containers/projectContainer/projectContainer";
import "./projects.scss";

export default function projects() {
  return (
    <div className="projects wrapper" id="projects">
      <div className="heading">
        <h1>Projects</h1>
      </div>
      <div className="content">
        {/* <LoremIpsum p={2} /> */}
        <Project
          projectName={"Minesweeper Game"}
          techStack={["html5", "javascript", "react", "css3"]}
          site={"https://djay-minesweeper.netlify.app/"}
          gitUrl={"https://github.com/djay-S/minesweeper"}
          details={<LoremIpsum p={2} />}
        />
        <Project
          projectName={"Meme Generator"}
          techStack={["html5", "javascript", "react", "css3"]}
          site={"https://djay-memegenerator.netlify.app/"}
          gitUrl={"https://github.com/djay-S/memeGenerator"}
          details={<LoremIpsum p={2} />}
        />
      </div>
    </div>
  );
}
