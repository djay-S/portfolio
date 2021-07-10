import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import "./aboutMe.scss";

export default function about_me() {
  return (
    <div className="about_me wrapper">
      <div className="heading">
        <h1>About Me</h1>
      </div>
      <div className="content">
        <LoremIpsum p={2} />
      </div>
    </div>
  );
}
