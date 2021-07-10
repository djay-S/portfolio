import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import Project from "../../containers/projectContainer/projectContainer";
import "./projects.scss";

export default function projects() {
  return (
    <div className="projects wrapper">
      <div className="heading">
        <h1>Projects</h1>
      </div>
      <div className="content">
        {/* <LoremIpsum p={2} /> */}
        <Project />
        <Project />
      </div>
    </div>
  );
}
