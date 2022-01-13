import React from "react";
import "./contactMe.scss";
import PDF from "../../assets/files/resume.pdf";

export default function ContactMe() {
  const handleExternalLink = (url) => {
    window.open(url, "blank");
  };
  return (
    <div className="contact_me wrapper" id="contact">
      <div className="heading">
        <h1>Contact Me</h1>
      </div>
      <div className="content contacts">
        <ul>
          <li>
            {/* Email */}
            {/* <i className="gg-mail"></i> */}
            <figure>
              <i
                className="far fa-envelope"
                onClick={() =>
                  handleExternalLink(
                    "mailto:dhananjaysinghkushwaha2@ gmail.com"
                  )
                }
              ></i>
              <figcaption>Mail</figcaption>
            </figure>
          </li>
          <li>
            {/* LinkedIn */}
            {/* <i className="fa fa-linkedin"></i> */}
            <figure>
              <i
                className="fab fa-linkedin"
                onClick={() =>
                  handleExternalLink(
                    "https://www.linkedin.com/in/dhananjay- singh-6b52621a7"
                  )
                }
              ></i>
              <figcaption>LinkedIn</figcaption>
            </figure>
          </li>
          <li>
            {/* Github */}
            <figure>
              <i
                className="fab fa-github"
                onClick={() =>
                  handleExternalLink("https://www.github.com/djay-S")
                }
              ></i>
              <figcaption>Github</figcaption>
            </figure>
          </li>
          <li>
            {/* Resume */}
            {/* <i className="gg-software-download"></i> */}
            {/* <i className="fas fa-file-download"></i> */}
            <figure>
              <i
                className="far fa-file"
                onClick={() => handleExternalLink(PDF)}
              ></i>
              <figcaption>Resumé</figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </div>
  );
}
