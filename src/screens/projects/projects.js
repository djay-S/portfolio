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
          img={"mineSweeper-1.png"}
          details={`
          <p><h4>The classic Single Player game of Minesweeper</h4></p>
          <p>Salient Features
            <ul>
              <li>Responsive layout</li>
              <li>Developed custom modal container</li>
              <li>Developed custom stopwatch container</li>
            </ul>
          </p>
          `}
        />
        <Project
          projectName={"Meme Generator"}
          techStack={["html5", "javascript", "react", "css3"]}
          site={"https://djay-memegenerator.netlify.app/"}
          gitUrl={"https://github.com/djay-S/memeGenerator"}
          img={"memeGen-1.png"}
          details={`
          <p><h4>Custom Meme Maker</h4></p>
          <p>Salient Features
            <ul>
              <li>Masonry like Responsive UI layout</li>
              <li>Search functionality to search for memes from the list</li>
              <li>Provided ability to add remove and postition text blocks within the meme</li>
              <li>Users can download their memes</li>
            </ul>
          </p>
          `}
        />
      </div>
    </div>
  );
}
