import React from "react";
// import { LoremIpsum } from "react-lorem-ipsum";
import WorkExperience from "./workExperiences";
import Certifications from "./certificates";
import Skills from "./skills";
import Education from "./education";
import "./aboutMe.scss";

export default function about_me() {
  return (
    <div className="about_me wrapper" id="about">
      <div className="heading">
        <h1>About Me</h1>
      </div>
      <div className="me content">
        <text className="summary">
          I am seeking a position to utilise my skills and abilities that offers
          professional growth while being resourceful, innovative and flexible.
          I believe in team-work and I am open to learn new technologies that
          would help me in my growth as well as in the growth of the company as
          a whole.
        </text>
        <Skills />
        <WorkExperience />
        <Certifications />
        {/* <Education /> */}
      </div>
    </div>
  );
}
